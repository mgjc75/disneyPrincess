const princessRouter = require("express").Router();
const { getTweetsAndWatson } = require("../controllers/princessController");

princessRouter.get("/:handle", getTweetsAndWatson);

module.exports = princessRouter;
