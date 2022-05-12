const app = require("express");
const debug = require("debug")("apiThings:middleware");

// eslint-disable-next-line no-unused-vars
const serverError = (error, req, res, next) => {
  debug(error.message);
  res.status(500).json({ msg: "Error del Servidor" });
};

const notFoundError = (req, res) => {
  res.status(404).json({ msg: "Not Found" });
};

module.exports = {
  serverError,
  notFoundError,
};
