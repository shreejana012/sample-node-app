const app = require("express")();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    id,
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
