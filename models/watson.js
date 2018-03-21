const PersonalityInsights = require("watson-developer-cloud/personality-insights/v3");
const { watsonAuth } = require("../config");

const pi = new PersonalityInsights(watsonAuth);

function getWatsonData(tweets) {
  return new Promise((resolve, reject) => {
    pi.profile({ content: tweets, content_type: "text/plain" }, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

module.exports = getWatsonData;
