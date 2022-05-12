app.delete("/things/:idThing", (req, res) => {
  const { idThing } = req.params;
  things.splice(
    things.findIndex((thing) => thing.id === +idThing),
    0
  );
  res.status(200);
});
