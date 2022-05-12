const express = require("express");

const things = require("../thingsData");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(things);
});

router.delete("/things/:idThing", (req, res) => {
  const { idThing } = req.params;
  things.splice(
    things.findIndex((thing) => thing.id === +idThing),
    0
  );
  res.status(200);
});

router.get("/things");

module.exports = router;
