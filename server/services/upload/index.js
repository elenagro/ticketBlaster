const express = require("express");
const db = require("../../pkg/db");
const multer = require("./handlers/uploadHandler");

const api = express();
db.init();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(express.static("images"));

api.post("/api/v1/ticket-blaster/upload", multer.uploadImg, (req, res) =>
  res.status(201).send("Successfully Uploaded Image")
);

api.listen(process.env.UPLOAD_PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Service successfully started on port", process.env.UPLOAD_PORT);
});
