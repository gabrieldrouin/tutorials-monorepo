import express, { RequestHandler, ErrorRequestHandler } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT ?? "3000";

function add(a: number, b: number) {
  return a + b;
}

const general: RequestHandler = (_req, _res, next) => {
  console.log("general");
  next();
};

const mid1: RequestHandler = (_req, _res, next) => {
  console.log("mid1, first");
  next();
  console.log("mid1, second");
  next();
};

const mid2: RequestHandler = (_req, _res, next) => {
  console.log("mid2");
  const error = new Error("I am an error!");
  next(error);
  //res.status(200).send("<h1>hello</h1>");
};

const mid3: RequestHandler = (_req, _res, next) => {
  console.log("mid3");
  next();
};

const mid4: RequestHandler = (_req, res, _next) => {
  console.log("mid4");
  res.status(200).send("<h1>all good</h1>");
  //next();
};

const midlast: RequestHandler = (_req, _res, _next) => {
  console.log("midlast");
};

const errHandler: ErrorRequestHandler = (err: Error, _req, res, _next) => {
  res.send(`<h1>${err}</h1>`);
  console.error(`Console error: ${err}`);
};

app.use(general);

app.get(
  "/",
  mid1,
  (_req, _res, next) => {
    console.log(add(5, 5));
    next();
  },
  mid2,
  mid3,
  mid4,
  midlast,
);

app.use(errHandler);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
