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

function createUserObj(watsonData) {
  return watsonData.personality.reduce((acc, big5, i) => {
    acc[big5.name] = big5.percentile.toFixed(2);
    return acc;
  }, {});
}

module.exports = { getWatsonData, createUserObj };
