import express, { Express, Request } from "express";
const app: Express = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

app.get("/", (_req: Request, res: any) => {
  res.send("<h1>hello</h1>");
  console.log("get");
});
