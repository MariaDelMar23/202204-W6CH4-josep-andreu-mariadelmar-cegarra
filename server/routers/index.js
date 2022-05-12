const express = require("express");
const debug = require("debug")("apiThings:router");
const things = require("../thingsData");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(things);
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
