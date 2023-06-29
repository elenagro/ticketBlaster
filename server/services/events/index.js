const express = require("express");
const cors = require("cors");
const jwt = require("express-jwt");
const upload = require("express-fileupload");
const db = require("../../pkg/db");

const eventRoutes = require("./routes");

db.init();

const api = express();

api.use(express.json);
api.use(cors());
api.use(upload());

api.use(
  jwt.expressjwt({
    algorithms: ["HS256"],
    secret: process.env.JWT_SECRET,
  })
);

api.use("/api/v1/ticket-blaster/events", eventRoutes);

api.listen(process.env.EVENTS_PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Service successfully started on port", process.env.EVENTS_PORT);
});
