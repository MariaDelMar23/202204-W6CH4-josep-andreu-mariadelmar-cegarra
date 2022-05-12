const express = require("express");

const router = express.Router();
const things = require("../thingsData");

router.get("/", (req, res) => {
  res.status(200).json(things);
});

router.post("/", (req, res) => {
  const thing = req.body;
  things.push(thing);
  res.status(201).json(thing);
});

router.put("/", (req, res) => {
  const thingModificated = req.body;
  things.map((thing) =>
    thing.id === thingModificated.id ? thingModificated : thing
  );
  res.status(200).json(thingModificated);
});

router.get("/:idThing", (req, res) => {
  const idThing = req.params;
  const idthingToShow = things.findIndex((thing) => thing.id === +idThing);
  res.status(200).json(things[idthingToShow]);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  debug(id);
  things.splice(
    things.findIndex((thing) => thing.id === +id),
    1
  );
  res.status(200).json(things);
});

router.get("/things");

module.exports = router;

