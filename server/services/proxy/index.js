require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
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
  proxy(`http://localhost:${process.env.AUTH_PORT}`, {
    proxyReqPathResolver: (req) => {
      return `/api/v1/auth/${req.url}`;
    },
  })
);

api.use(
  "/api/v1/events",
  proxy(`http://localhost:${process.env.EVENTS_PORT}`, {
    proxyReqPathResolver: (req) => {
      return `/api/v1/events/${req.url}`;
    },
  })
);

api.use(
  "/api/v1/users",
  proxy(`http://localhost:${process.env.USERS_PORT}`, {
    proxyReqPathResolver: (req) => {
      return `/api/v1/users/${req.url}`;
    },
  })
);

api.use(
  "/api/v1/upload",
  proxy(`http://localhost:${process.env.UPLOAD_PORT}`, {
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
