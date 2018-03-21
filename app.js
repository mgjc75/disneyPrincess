const app = require("express")();
const apiRouter = require("./routes/apiRouter");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hi Mark and Tim!");
});

app.use("/*", (re, res, next) => next({ status: 404 }));

//404
app.use((err, req, res, next) => {
  if (err.status === 404)
    return res.status(404).send({ msg: "page not found :" });
  next(err);
});

//500
app.use((err, req, res, next) => {
  res.status(500).send({ msg: "internal server error:", err });
});

module.exports = app;
