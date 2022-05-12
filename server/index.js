const express = require("express");

const debug = require("debug")("apiThings:server");

const morgan = require("morgan");
const router = require("./routers");

const app = express();
const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(`Server listening on port ${port}`);
  });

  server.on("error", (error) => {
    debug(error);
  });
};

app.use(express.json());
app.use(morgan("dev"));

app.use("/things", router);

module.exports = initializeServer;

