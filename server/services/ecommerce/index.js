require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("../../pkg/db");
const ticketHandler = require("./handlers/ticketHandler");

db.init();

const api = express();
api.use(
  cors({
    origin: "http://localhost:3000",
  })
);

api.use(express.json());

api.post("/api/v1/tickets/", ticketHandler.createTicket);
api.patch("/api/v1/tickets/:ticketId", ticketHandler.updateIsPurchased);
api.delete("/api/v1/tickets/:ticketId", ticketHandler.removeCartTicket);

api.listen(process.env.TICKETS_PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(
    `Service successfully started on port ${process.env.TICKETS_PORT}`
  );
});
