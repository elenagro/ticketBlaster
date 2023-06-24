const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = mongoose.model(
  "user",
  {
    full_name: String,
    email: String,
    password: String,
    profile_img: String,
    is_admin: Boolean,
  },
  "users"
);

const register = async (req, res) => {
  let usr = new User(data);
  return usr.save();
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

module.exports = {
  register,
  getUserByEmail,
};
