const jwt = require('jsonwebtoken');
const User = require('./../models/User');

//get user by jwt token
const getUserByToken = async (token) => {
    if(!token) {
        res.status(401).json({ message: "Acess denied"});
    }

    const decode = jwt.verify(token, "mysecretpassword");
    const userId = decode.id;
    const user = await User.findOne({ _id: userId });

    return user;
}

module.exports = getUserByToken;
