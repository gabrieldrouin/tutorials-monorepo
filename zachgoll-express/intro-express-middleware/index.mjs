import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

app.get("/", (req, res, next) => {
  res.send("<h1>hello</h1>");
  console.log("get");
});
