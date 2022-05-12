require("dotenv").config();
const { app } = require("express");
const { express } = require("express");
const morgan = require("morgan");
const initializeServer = require("./server");

initializeServer();

app.use(express.json());
app.use(morgan("dev"));
