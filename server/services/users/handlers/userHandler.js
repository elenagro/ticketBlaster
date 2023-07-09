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

const updateUser = async (req, res) => {
  try {
    if (req.file) {
      req.body.profile_img = req.file.filename;
    }

    const update = User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).send(update);
  } catch (err) {
    console.log(err);
    res.status(404).send("Update Failed");
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      res.status(404).send("Delete Operation Failed. User Not Found");
    }

    res.status(200).send(deletedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
};
