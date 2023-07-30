require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("express-jwt");
const upload = require("express-fileupload");
const db = require("../../pkg/db");
const eventHandler = require("./handlers/eventHandler");

db.init();

const api = express();

api.use(
  cors({
    origin: "http://localhost:3000",
  })
);

api.use(express.json);
api.use(upload());

api.use(
  jwt.expressjwt({
    algorithms: ["HS256"],
    secret: process.env.JWT_SECRET,
  })
);

api.get("/api/v1/events/concerts", eventHandler.getConcertEvents);
api.get("/api/v1/events/comedies", eventHandler.getComedyEvents);
api.get("/api/v1/events/find/:id", eventHandler.getOneEvent);
api.post("/api/v1/events/", eventHandler.createEvent);
api.patch("/api/v1/events/:id", eventHandler.updateEvent);
api.delete("/api/v1/events/:id", eventHandler.removeEvent);

// api.use("/api/v1/events", eventRoutes);

api.listen(process.env.EVENTS_PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Service successfully started on port", process.env.EVENTS_PORT);
});
