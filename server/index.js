const express = require("express");
const morgan = require("morgan");

const app = express();
const debug = require("debug").config("apiThings:server");

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

module.exports(initializeServer);
