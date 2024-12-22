import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

function add(a: number, b: number) {
  return a + b;
}

app.get("/", (req, res, next) => {
  res.status(200).send("<h1>hello</h1>");
  console.log(add(5, 3));
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
