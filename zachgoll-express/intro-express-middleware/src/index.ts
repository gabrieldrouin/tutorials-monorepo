import express, { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

function add(a: number, b: number) {
  return a + b;
}

function mid1(req: Request, res: Response, next: NextFunction) {
  console.log("mid1, first");
  next();
  console.log("mid1, second");
  next();
}

function mid2(req: Request, res: Response, next: NextFunction) {
  console.log("mid2");
  res.status(200).send("<h1>hello</h1>");
  //next();
}

function mid3(req: Request, res: Response, next: NextFunction) {
  console.log("mid3");
  next();
}

function mid4(req: Request, res: Response, next: NextFunction) {
  console.log("mid4");
  const error = new Error("I am an error");
  next(error);
}

function errHandler(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
  console.error(`Error: ${err}`);
}

app.get(
  "/",
  mid1,
  (req, res, next) => {
    console.log(add(5, 5));
    next();
  },
  mid2,
  mid3,
  mid4
);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
