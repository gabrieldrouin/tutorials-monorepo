import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;
function add(a, b) {
    return a + b;
}
function general(req, res, next) {
    console.log("general");
    next();
}
function mid1(req, res, next) {
    console.log("mid1, first");
    next();
    console.log("mid1, second");
    next();
}
function mid2(req, res, next) {
    console.log("mid2");
    const error = new Error("I am an error!");
    if (!error)
        next(error);
    else
        next();
    //res.status(200).send("<h1>hello</h1>");
}
function mid3(req, res, next) {
    console.log("mid3");
    next();
}
function mid4(req, res, next) {
    console.log("mid4");
    res.status(200).send("<h1>all good</h1>");
    //next();
}
function midlast(req, res, next) {
    console.log("midlast");
}
function errHandler(err, req, res, next) {
    if (err) {
        res.send(`<h1>${err}</h1>`);
        console.error(`Console error: ${err}`);
    }
}
app.use(general);
app.get("/", mid1, (req, res, next) => {
    console.log(add(5, 5));
    next();
}, mid2, mid3, mid4, midlast);
app.use(errHandler);
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
