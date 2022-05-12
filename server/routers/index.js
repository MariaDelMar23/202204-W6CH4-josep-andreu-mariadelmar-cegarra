const app = require("express");
const things = require("../thingsData");

app.get("/things", (req, res) => {
  res.status(200).json(things);
});
