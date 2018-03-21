const princessRouter = require("express").Router();
const { getTweets } = require("../controllers/tweetController");

princessRouter.post("/handle", getTweets);

module.exports = princessRouter;
