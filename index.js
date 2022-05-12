require("dotenv").config();
const express = require("express");
const debug = require("debug")("apiThings:root");
const { notFoundError } = require("./server/middlewares");
const app = require("express")
const morgan = require("morgan");
const initializeServer = require("./server");

initializeServer();

app.use(express.json());
app.use(morgan("dev"));

