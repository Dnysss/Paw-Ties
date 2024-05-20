const User = require('../models/User');
const bcrypt = require('bcrypt');

// helpers
const createUserToken = require('../helpers/create-user-token');

module.exports = class UserController {
    static async register(req, res) {
        const {name, email, phone, password, confirmPassword} = req.body;

        // validations
        if(!name) {
            res.status(422).json({ message: "Name is required"});
            return;
        }

        if(!email) {
            res.status(422).json({ message: "Email is required" });
            return;
        }

        if(!phone) {
            res.status(422).json({ message: "Phone is required"})
        }

        if(!password) {
            res.status(422).json({ message: "Password is required"});
            return;
        }

        if(!confirmPassword) {
            res.status(422).json({ message: "Comfirm password is required" });
            return;
        }

        if(password !== confirmPassword) {
            res.status(422).json({ message: "Passwords must be the same!"})
        }

        // check if user exists
        const userExists = await User.findOne({email: email});

        if(userExists) {
            res.status(422).json({ message: "Please use another email!"});
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
            res.status(500).json({ message: err })
        }
    }
};
