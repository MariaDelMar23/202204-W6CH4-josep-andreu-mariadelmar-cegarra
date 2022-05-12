const debug = require("debug")("apiThings:routers");
const express = require("express");

const router = express.Router();
let things = require("../thingsData");

router.get("/", (req, res) => {
  debug("Request to get things");
  res.status(200).json(things);
});

router.post("/", (req, res) => {
  debug("Request to add a thing");
  const thing = req.body;
  things.push(thing);
  res.status(201).json(thing);
});

router.put("/", (req, res) => {
  debug("Request to modify a thing");
  const thingModificated = req.body;
  things = things.map((thing) =>
    thing.id === thingModificated.id ? { ...thingModificated } : { ...thing }
  );
  res.status(200).json(thingModificated);
});

router.get("/:idThing", (req, res) => {
  const { idThing } = req.params;
  debug(`Request to get a thing with id ${idThing}`);
  const idthingToShow = things.findIndex((thing) => thing.id === +idThing);
  res.status(200).json(things[idthingToShow]);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  debug(`Request to delete the thing with id ${id}`);
  things.splice(
    things.findIndex((thing) => thing.id === +id),
    1
  );
  res.status(200).json(things);
});

router.get("/things");

module.exports = router;
