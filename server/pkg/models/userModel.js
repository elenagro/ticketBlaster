const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: [true, "First name and last name are required"],
  },
  email: {
    type: String,
    required: [true, "E-mail is required."],
    lowercase: true,
    unique: true,
    validate: [validator.isEmail],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [6, "Password must contain at least 6 characters."],
  },
  profile_img: {
    type: String,
  },
  is_admin: {
    type: Boolean,
    enum: ["user", "admin"],
    default: "user",
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 11);
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
