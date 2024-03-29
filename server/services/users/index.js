require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userHandler = require("./handlers/userHandler");
const db = require("../../pkg/db");
const multer = require("../upload/handlers/uploadHandler");

api = express();

db.init();
api.use(
  cors({
    origin: "http://localhost:3000",
  })
);

api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(express.static("images"));

api.get("/api/v1/users/all-users", userHandler.getAllUsers);
api.get("/api/v1/users/user/:id", userHandler.getOneUser);
api.patch(
  "/api/v1/users/update-user/:id",
  userHandler.updateUser,
  multer.uploadImg
);
api.delete("api/v1/users/delete-user/:id", userHandler.deleteUser);

api.listen(process.env.USERS_PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Service successfully started on port", process.env.USERS_PORT);
});
