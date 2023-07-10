require("dotenv").config();
const express = require("express");
const proxy = require("express-http-proxy");
const cors = require("cors");

const api = express();

api.use(
  cors({
    origin: "http://localhost:3000",
  })
);
api.use(morgan("dev"));

api.use(express.static("images"));

api.use(
  "/api/v1/auth",
  proxy(`http://127.0.0.1:${process.env.AUTH_PORT}`, {
    proxyReqPathResolver: (req) => {
      return `/api/v1/auth/${req.url}`;
    },
  })
);

api.use(
  "/api/v1/events",
  proxy(`http://127.0.0.1:${process.env.EVENTS_PORT}`, {
    proxyReqPathResolver: (req) => {
      return `/api/v1/events/${req.url}`;
    },
  })
);

api.use(
  "/api/v1/users",
  proxy(`http://127.0.0.1:${process.env.USERS_PORT}`, {
    proxyReqPathResolver: (req) => {
      return `/api/v1/users/${req.url}`;
    },
  })
);

api.use(
  "/api/v1/upload",
  proxy(`http://127.0.0.1:${process.env.UPLOAD_PORT}`, {
    proxyReqPathResolver: (req) => {
      return `/api/v1/upload/${req.url}`;
    },
  })
);

api.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(
    "Authentication service successfully started on port",
    process.env.PORT
  );
});
