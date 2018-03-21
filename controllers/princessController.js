const getTweets = require("../models/tweets.js");

function getTweetsAndWatson(req, res, next) {
  getTweets(req, res, next);
}
module.exports = { getTweetsAndWatson };
