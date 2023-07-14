require("dotenv").config();
const express = require("express");
const db = require("../../pkg/db");

db.init();

const api = express();

api.use(express.json());

api.listen(process.env.TICKETS_PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(
    `Service successfully started on port ${process.env.TICKETS_PORT}`
  );
});
