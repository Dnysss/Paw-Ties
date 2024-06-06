const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config;

async function getUserByToken(token) {
  if (!token) {
    throw new Error("Token not provided");
  }

  let decoded;
  try {
    decoded = jwt.verify(token, "mysecretpassword");
  } catch (error) {
    throw new Error("Invalid token");
  }

  const userId = decoded.id;

  if (!userId || typeof userId !== "string" || userId.length !== 24) {
    throw new Error("Invalid user ID in token");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

module.exports = getUserByToken;
