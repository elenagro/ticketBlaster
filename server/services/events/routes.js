const express = require("express");
const eventHandler = require("./handlers/eventHandler");

const router = express.Router();

router.get("/concerts", eventHandler.getConcertEvents);
router.get("/comedies", eventHandler.getComedyEvents);
router.get("/:id", eventHandler.getOneEvent);
router.post("/", eventHandler.createEvent);
router.patch("/:id", eventHandler.updateEvent);
router.delete("/:id", eventHandler.removeEvent);

module.exports = { router };
