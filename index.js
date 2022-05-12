require("dotenv").config();
const express = require("express");
const debug = require("debug")("apiThings:root");
const { notFoundError } = require("./server/middlewares");

const app = express();
const server = app.listen(4000, () => {
  debug("Server listening on port 4000");
});

server.on("error", (error) => {
  debug(error);
});

app.use(notFoundError);
