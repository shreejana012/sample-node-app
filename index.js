const app = require("express")();

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    id,
  });
});

app.listen(3000);
