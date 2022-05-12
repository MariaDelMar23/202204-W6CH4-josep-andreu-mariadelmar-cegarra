const express = require("express");
const debug = require("debug").config("apiThings:server");

const initializeServer = (port) => {
  const app = express();
  const server = app.listen(port, () => {
    debug(`Server listening on port ${port}`);
  });

  server.on("error", (error) => {
    debug(error);
  });
};

module.exports(initializeServer);
