const { default: cryptoRandomString } = require("crypto-random-string");

const JWT_SECRET = cryptoRandomString({ length: 32, type: "base64" });

module.exports = JWT_SECRET;
