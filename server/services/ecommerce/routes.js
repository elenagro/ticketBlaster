const express = require("express");
const ticketHandler = require("./handlers/ticketHandler");

const router = express.Router();

router.post("/", ticketHandler.createTicket);
router.patch("/:ticketId", ticketHandler.updateIsPurchased);
router.delete("/:ticketId", ticketHandler.removeCartTicket);

module.exports = { router };
