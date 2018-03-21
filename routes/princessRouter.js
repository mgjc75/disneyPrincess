const princessRouter = require("express").Router();
const { getTweetsAndWatson } = require("../controllers/princessController");

princessRouter.post("/handle", getTweetsAndWatson);

module.exports = princessRouter;
