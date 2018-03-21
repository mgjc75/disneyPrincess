const apiRouter = require("express").Router();
const princessRouter = require("./princessRouter");

apiRouter.get("/", (req, res) => res.send("Welcome to the API route!"));

apiRouter.use("/princess", princessRouter);

module.exports = apiRouter;
