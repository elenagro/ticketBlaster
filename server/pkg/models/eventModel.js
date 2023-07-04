const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  event_name: {
    type: String,
  },
  category: {
    type: String,
    enum: ["Musical Concert", "Stand-up Comedy"],
  },
  date: {
    type: Date,
  },
  event_img: {
    type: String,
  },
  event_details: {
    type: String,
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  user_id: {
    type: String,
  },
});

const Event = mongoose.model("event", eventSchema);

module.exports = { Event };
