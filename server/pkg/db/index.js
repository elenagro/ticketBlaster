const mongoose = require("mongoose");

require("dotenv").config();

const init = () => {
  const dsn = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

  mongoose.connect(dsn);
};

module.exports = { init };

// ?retryWrites=true&w=majority
