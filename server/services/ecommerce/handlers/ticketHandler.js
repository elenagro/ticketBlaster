const Ticket = require("../../../pkg/models/ticketModel");

const createTicket = async (req, res) => {
  try {
    const { event_id, quantity, user_id } = req.body;
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { createTicket };
