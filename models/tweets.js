const Twit = require("twit-promise");
const { twitAuth } = require("../config");
var T = new Twit(twitAuth);

function getTweets(handle) {
  return T.get("statuses/user_timeline", {
    screen_name: handle,
    count: 200,
    include_rts: false
  }).then(data => {
    return data.data.reduce((acc, value, index, arr) => {
      acc += ` ${value.text}`;
      return acc;
    }, "");
  });
}

module.exports = getTweets;
