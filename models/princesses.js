const princesses = require("../data");
const { createUserObj } = require("./watson");

function compareUserAndPrincesses(userObj) {
  let princessDataObj = {};
  let princessComparison = [];
  let userValuesArr = Object.values(userObj);
  console.log("user Scores: ", userValuesArr);

  for (let princess in princesses) {
    princessDataObj[princess] = createUserObj(princesses[princess]);
    let princessArray = Object.values(princessDataObj[princess]);
    let sum = 0;
    princessArray.map((score, index) => {
      sum +=
        Math.abs(Number(score)) - Math.abs(userValuesArr[index]).toFixed(2);
    });
    princessComparison.push(sum);
    //console.log(sum);

    //let sum = 0;
    //console.log(princessDataObj[princess]);

    // for (let princess in princessDataObj[princess]) {
    //   console.log(princess);
    // }

    // for (let i = 0; i < userValuesArr.length; i++) {
    //   //console.log(princessDataObj[princess][i], userValuesArr[i]);
    //   // sum += +Math.abs(
    //   //   Number(princessDataObj[princess][i]) - Number(userValuesArr[i])
    //   // ).toFixed(2);
    // }

    //console.log("princess", Object.values(princessDataObj[princess]));
  }
  console.log("difference:", princessComparison);
  let min = Math.min(...princessComparison);
  princessComparison.indexOf(min);
  console.log(princessComparison.indexOf(min));
  console.log(princessDataObj);

  //let singlePrincess = princessDataObj.arielData;

  // for (let princess in princessDataObj) {
  //   let sumTotal = 0;
  //   let princessScore = Object.values(princessDataObj[princess]);
  //   console.log("princesses; ", princessScore);

  //   //1. do the difference
  //   sum += +Math.abs(princess[big5] - userValuesArr[i]).toFixed(2);
  //   i++;
  //   //2. recuce the sums of the diff
  //   //3. push to comparionds array
  //   //4.

  //   //princessComparison.push(Object.values(princessDataObj[princess]));
  // }

  //let x = princessComparison.map(princessArray => {
  //   return princessArray.reduce((acc, val) => {
  //     acc += +val;
  //     return acc;
  //   }, 0);
  // });

  //console.log(princessComparison);
  // for (let princess in princessDataObj) {
  //   // console.log("princess", princess);
  //   let i = 0;
  //   let sum = 0;
  //   for (let big5 in Object.values(princess)) {
  //     // console.log("big5: ", princess[big5]);
  //     sum += +Math.abs(princess[big5] - userValuesArr[i]).toFixed(2);
  //     i++;
  //   }
  // }

  // princessComparison.push(sum);
  // npm run dwevconsole.log(princessComparison, userValuesArr);
  // console.log(princessDataObj, userObj);
  // console.log(arielComparison);
  return princessDataObj;
  // return createUserObj(princess.arielData);
}

module.exports = compareUserAndPrincesses;
