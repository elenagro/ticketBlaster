require("dotenv").config();
const express = require("express");
const cors = require("cors");
const auth = require("./handlers/auth");
const db = require("../../pkg/db");
const cookieParser = require("cookie-parser");

const api = express();

db.init();

api.use(cors({ origin: "http://localhost:3000" }));

api.use(express.json());
api.use(cookieParser());

api.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

api.post("/api/v1/auth/register", auth.register);
api.post("/api/v1/auth/log-in", auth.logIn);

api.listen(process.env.AUTH_PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(
    "Authentication service successfully started on port",
    process.env.AUTH_PORT
  );
});
