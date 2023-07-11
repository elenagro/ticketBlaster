const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
  qr_code: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  is_purchased: {
    type: Boolean,
    default: false,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Ticket = mongoose.model("ticket", ticketSchema);

module.exports = {
  Ticket,
};
