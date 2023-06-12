const bcrypt = require("bcryptjs");
const user = require("../../../pkg/user");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const create = (req, res) => {
  try {
    // equality of passwords
    if (
      req.body.password.length === 0 ||
      req.body.password !== req.body.password2
    ) {
      return res.status(400).send("Bad Request");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
  //   existing user
};
