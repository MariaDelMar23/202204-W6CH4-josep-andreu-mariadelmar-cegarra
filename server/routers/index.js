const app = require("express");
const things = require("../thingsData");

app.get("/things", (req, res) => {
  res.status(200).json(things);
});

app.delete("/things/:idThing", (req, res) => {
  const { idThing } = req.params;
  things.splice(
    things.findIndex((thing) => thing.id === +idThing),
    0
  );