const Twit = require("twit-promise");
const oAuth = require("../config");
var T = new Twit(oAuth);

function getTweets(req, res, next) {
  let screenname = req.body.screenname;
  T.get("statuses/user_timeline", {
    screen_name: req.body.screenname,
    count: 200,
    include_rts: false
  })
    .then(data => {
      let tweetsPromises = data.data.reduce((acc, value, index, arr) => {
        acc += ` ${value.text}`;
        return acc;
      }, "");
      return tweetsPromises;
    })
    .then(tweets => {
      res.send(JSON.stringify(tweets));
    })
    .catch(next);
}

module.exports = getTweets;
