"use strict";

// function foodType(food) {
//   return `${food} is enjoyed well with okra soup and`;
// }

// const food = foodType("amala");

// const softDrinks = function (drink) {
//   return `People like taking ${drink} because it has less sugar`;
// };
// console.log(food, softDrinks("cocacola"));

//team 1

// (44 + 23 + 71) / 3;
// (65 + 54 + 49) / 3;

// const teamDolpnins2 = (85 + 54 + 41) / 3;
// const teamKoalas2 = (23 + 34 + 24) / 3;

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const avgDolphins = calcAverage(20, 23, 41);
// const avgKoalas = calcAverage(65, 54, 49);
// console.log(avgDolphins, avgKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log("No winner");
//   }
// }

// const result = checkWinner(avgDolphins, avgKoalas);

// const calcTip = function (bill) {
//   return bill >= 50 <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 54, 23];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.firstName}'s BMI ${mark.calcBMI()} is higher than ${
//       john.firstName
//     }'s ${john.calcBMI()}`
//   );
// } else {
//   console.log(
//     `${john.firstName}'s BMI ${john.calcBMI()} is higher than ${
//       mark.firstName
//     }'s ${mark.calcBMI()}`
//   );
// }

// const markAndJohn = {
//   firstNameMark: "Mark",
//   lastNameMark: "Miller",
//   massMark: 78,
//   heightMark: 1.69,

//   firstNameJohn: "John",
//   lastNameJohn: "Smith",
//   massJohn: 92,
//   heightJohn: 1.65,

//   calcBMIMark: function () {
//     return this.massMark / this.heightMark ** 2;
//   },
//   calcBMIJohn: function () {
//     return this.massJohn / this.heightJohn ** 2;
//   },
// };

// if (markAndJohn.calcBMIMark() > markAndJohn.calcBMIJohn()) {
//   console.log(
//     `${
//       markAndJohn.firstNameMark
//     }'s BMI ${markAndJohn.calcBMIMark()} is higher than ${
//       markAndJohn.firstNameJohn
//     }'s ${markAndJohn.calcBMIJohn()}`
//   );
// } else {
//   console.log(
//     `${
//       markAndJohn.firstNameJohn
//     }'s BMI ${markAndJohn.calcBMIJohn()} is higher than ${
//       markAndJohn.firstNameMark
//     }'s ${markAndJohn.calcBMIMark()}`
//   );
// }
// const array = ["grace", "dunni", "bayo", "shola"];
// for (let i = 0; i < array.length; i++) {
//   const word = array[i];
//   console.log(`${word} is an amazing somebody`);
// }

const calcTip = function (bill) {
  return bill >= 50 <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
