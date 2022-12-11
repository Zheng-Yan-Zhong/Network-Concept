const express = require("express");
const app = express();
app.use(express.json()); //解構body中的application/json格式
app.get("/", (req, res) => {
  res.send("<h3>Paradise</h3>");
});
app.get("/user/:id", (req, res) => {
  res.json({ userId: req.params.id });
});

app.get("/search", (req, res) => {
  res.json({ query: req.query });
});

app.post("/register", (req, res) => {
  res.json({ body: req.body });
});

app.listen(3001, () => {
  console.log("running");
});
