const getTweets = require("../models/tweets.js");
const { getWatsonData, createUserObj } = require("../models/watson.js");
const compareUserAndPrincesses = require("../models/princesses.js");

function getTweetsAndWatson(req, res, next) {
  const { handle } = req.params;
  getTweets(handle)
    .then(tweets => {
      return getWatsonData(tweets);
      //console.log(tweets);
    })
    .then(watsonData => {
      return createUserObj(watsonData);
    })
    .then(userObj => {
      return compareUserAndPrincesses(userObj);
      // return res.send(userObj);
    })
    .then(([userObj, princessDataObj]) => {
      // console.log(arielData);
      return res.send(userObj, princessDataObj);
    })
    .catch(next);
}
module.exports = { getTweetsAndWatson };
