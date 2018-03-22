const getTweets = require("../models/tweets.js");
const { getWatsonData, createUserObj } = require("../models/watson.js");
const compareUserAndPrincesses = require("../models/princesses.js");

function getTweetsAndWatson(req, res, next) {
  const { handle } = req.params;
  getTweets(handle)
    .then(tweets => {
      return getWatsonData(tweets);
    })
    .then(watsonData => {
      return createUserObj(watsonData);
    })
    .then(userObj => {
      return compareUserAndPrincesses(userObj);
    })
    .then(([userObj, princessDataObj]) => {
      return res.send(userObj, princessDataObj);
    })
    .catch(next);
}
module.exports = { getTweetsAndWatson };
