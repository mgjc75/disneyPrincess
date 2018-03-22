const princesses = require("../data");
const { createUserObj } = require("./watson");

function compareUserAndPrincesses(userObj) {
  const princessNames = Object.keys(princesses);
  let princessDataObj = {};
  let princessComparison = [];
  let userValuesArr = Object.values(userObj);

  for (let princess in princesses) {
    princessDataObj[princess] = createUserObj(princesses[princess]);
    let princessArray = Object.values(princessDataObj[princess]);
    let sum = 0;
    princessArray.map((score, index) => {
      let difference = score - userValuesArr[index];
      sum += Math.abs(difference);
    });
    princessComparison.push(Number(sum.toFixed(2)));
  }
  const min = Math.min(...princessComparison);
  princessComparison.indexOf(min);
  console.log(`Index position: ${princessComparison.indexOf(min)}`);
  console.log(
    `Princess Name: ${princessNames[princessComparison.indexOf(min)]}`
  );
  return princessDataObj;
}

module.exports = compareUserAndPrincesses;
