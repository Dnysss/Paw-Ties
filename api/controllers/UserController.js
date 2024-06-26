const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// helpers
const createUserToken = require("../helpers/create-user-token");
const getToken = require("../helpers/get-token");
const getUserByToken = require("../helpers/get-user-by-token");
const { bucket } = require("../firebase/firebaseConfig");

module.exports = class UserController {
  static async register(req, res) {
    const { name, email, phone, password, confirmPassword } = req.body;

    // validations
    if (!name) {
      res.status(422).json({ message: "Name is required" });
      return;
    }

    if (!email) {
      res.status(422).json({ message: "Email is required" });
      return;
    }

    if (!phone) {
      res.status(422).json({ message: "Phone is required" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "Password is required" });
      return;
    }

    if (!confirmPassword) {
      res.status(422).json({ message: "Comfirm password is required" });
      return;
    }

    if (password !== confirmPassword) {
      res.status(422).json({ message: "Passwords don't match" });
      return;
    }

    // check if user exists
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      res.status(422).json({ message: "Please, use another email!" });
      return;
    }

    // create a password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // create a user
    const user = new User({
      name,
      email,
      phone,
      password: passwordHash,
    });

    try {
      const newUser = await user.save();

      await createUserToken(newUser, req, res);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    if (!email) {
      res.status(422).json({ message: "E-mail is required" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "Password is required" });
      return;
    }

    // check if user exists
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(422).json({ message: "E-mail or password is incorrect" });
      return;
    }

    // check if password match with db password
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      res.status(422).json({ message: "E-mail or password is incorrect" });
      return;
    }

    await createUserToken(user, req, res);
  }

  static async checkUser(req, res) {
    let currentUser;

    if (req.headers.authorization) {
      const token = getToken(req);
      const decode = jwt.verify(token, "mysecretpassword");

      currentUser = await User.findById(decode.id);
      currentUser.password = undefined;
    } else {
      currentUser = null;
    }

    res.status(200).send(currentUser);
  }

  static async getUserById(req, res) {
    const id = req.params.id;

    const user = await User.findById(id).select("-password");

    if (!user) {
      res.status(422).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ user });
  }

  // check if user exists
  static async editUser(req, res) {
    const id = req.params.id;

    // check if user exists
    const token = getToken(req);
    const user = await getUserByToken(token);

    const { name, email, phone, password, confirmPassword } = req.body;

    // upload images
    if (req.file) {
      try {
        const blob = bucket.file(
          `users/${id}/${Date.now()}_${req.file.originalname}`
        );
        const blobStream = blob.createWriteStream({
          metadata: {
            contentType: req.file.mimetype,
          },
        });

        blobStream.on("error", (err) => {
          console.error(err);
          res.status(500).json({ message: "Failed to upload image." });
          return;
        });

        blobStream.on("finish", async () => {
          const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
          user.image = publicUrl;

          // Continue updating other user information and saving to the database
          await UserController.updateUser(
            user,
            { name, email, phone, password, confirmPassword },
            res
          );
        });

        blobStream.end(req.file.buffer);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!" });
        return;
      }
    } else {
      // Continue updating other user information and saving to the database
      await UserController.updateUser(
        user,
        { name, email, phone, password, confirmPassword },
        res
      );
    }
  }

  static async updateUser(
    user,
    { name, email, phone, password, confirmPassword },
    res
  ) {
    if (!name) {
      res.status(422).json({ message: "Name is required" });
      return;
    }

    user.name = name;

    if (!email) {
      res.status(422).json({ message: "Email is required" });
      return;
    }

    // check if email has already taken
    const userExists = await User.findOne({ email: email });

    if (user.email !== email && userExists) {
      res.status(422).json({ message: "Please, use another email" });
      return;
    }

    user.email = email;

    if (!phone) {
      res.status(422).json({ message: "Phone is required" });
      return;
    }

    user.phone = phone;

    if (password != confirmPassword) {
      res.status(422).json({ message: "Passwords don't match" });
      return;
    } else if (password === confirmPassword && password != null) {
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      user.password = passwordHash;
    }

    try {
      // return user updated data
      await User.findOneAndUpdate(
        { _id: user._id },
        { $set: user },
        { new: true }
      );

      res.status(200).json({ message: "User updated successfully" });
    } catch (err) {
      res.status(500).json({ message: err });
      return;
    }
  }
};
