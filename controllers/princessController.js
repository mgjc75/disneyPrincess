const getTweets = require("../models/tweets.js");
const getWatsonData = require("../models/watson.js");

function getTweetsAndWatson(req, res, next) {
  const { handle } = req.params;
  getTweets(handle)
    .then(tweets => {
      return getWatsonData(tweets);
      //console.log(tweets);
    })
    .then(watsonData => {
      console.log(watsonData);
      return res.send(watsonData);
    })
    .catch(next);
}
module.exports = { getTweetsAndWatson };
