const princesses = require("../data");
const { createUserObj } = require("./watson");

function compareUserAndPrincesses(userObj) {
  let princessDataObj = {};
  for (let princess in princesses) {
    princessDataObj[princess] = createUserObj(princesses[princess]);
  }
  //let singlePrincess = princessDataObj.arielData;

  let userValuesArr = Object.values(userObj);
  let princessComparison = [];
  console.log("userObj", userValuesArr);
  for (let princess in princessDataObj) {
    console.log("princess", princess);

    let i = 0;
    let sum = 0;
    for (let big5 in Object.values(princess)) {
      console.log("big5: ", princess[big5]);
      sum += +Math.abs(princess[big5] - userValuesArr[i]).toFixed(2);
      i++;
    }
  }

  princessComparison.push(sum);
  console.log(princessComparison, userValuesArr);
  // console.log(princessDataObj, userObj);
  // console.log(arielComparison);
  return princessDataObj;
  // return createUserObj(princess.arielData);
}

module.exports = compareUserAndPrincesses;
