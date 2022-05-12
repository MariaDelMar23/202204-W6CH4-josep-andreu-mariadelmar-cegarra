const express = require("express");

const router = express.Router();
const things = require("../thingsData");

router.get("/", (req, res) => {
  res.status(200).json(things);
});

router.delete("/:idThing", (req, res) => {
  const { idThing } = req.params;
  const idthingToDelete = things.findIndex((thing) => thing.id === +idThing);
  things.splice(idthingToDelete, 0);
  res.status(200).json(things[idthingToDelete]);
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
