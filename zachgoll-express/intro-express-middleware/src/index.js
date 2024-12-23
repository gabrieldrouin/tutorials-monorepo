import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;
function add(a, b) {
    return a + b;
}
app.get("/", (req, res, next) => {
    res.status(200).send("<h1>hello</h1>");
    console.log(add(5, 5));
});
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
