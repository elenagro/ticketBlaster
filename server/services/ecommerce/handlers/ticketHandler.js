const Ticket = require("../../../pkg/models/ticketModel");

const createTicket = async (req, res) => {
  try {
    const { eventId, quantity, userId } = req.body;

    const ticket = new Ticket({
      event_id: eventId,
      quantity: quantity,
      user_id: userId,
    });

    await ticket.save();

    res.status(200).send(ticket);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const updateIsPurchased = async (req, res) => {
  try {
    const { ticketId } = req.params;

    const ticket = await Ticket.findByIdAndUpdate(
      ticketId,
      { is_purchased: true },
      { new: true }
    );

    res.status(200).send(ticket);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const removeCartTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;

    await Ticket.findByIdAndRemove(ticketId);

    res.status(204).send();
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { createTicket, updateIsPurchased, removeCartTicket };
