const User = require("../../../pkg/models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const users = User.find();
    res.status(200).send(users);
  } catch (err) {
    if (err) {
      console.log(err);
    }
    res.status(500).send("Internal Server Error");
  }
};

const getOneUser = async (req, res) => {
  try {
    const oneUser = await User.findById(req.params.id);
    res.status(200).send(oneUser);
  } catch (err) {
    if (err) {
      console.log(err);
    }
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
};
