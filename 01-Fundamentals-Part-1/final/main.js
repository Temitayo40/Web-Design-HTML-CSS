// since the formula for
// bmi = mass / heaight ** 2;

// let marksWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;
// let result;
// let result2;

// let markBMI = marksWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;
// if (markBMI > johnBMI) {
//   result = `Mark's bmi ${markBMI} is higher than John's ${johnBMI}`;
// } else {
//   result = `Mark's bmi ${markBMI} is lower than John's ${johnBMI}`;
// }
// console.log(result);

// for data two

// let markWeight2 = 95;
// let markHeight2 = 1.88;
// let johnWeight2 = 85;
// let johnHeight2 = 1.76;

// let markBMI2 = markWeight2 / (markHeight2 * markHeight2);
// let johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);
// if (markBMI2 > johnBMI2) {
//   result2 = `Mark's bmi ${markBMI2} is higher than John's ${johnBMI2}`;
// } else {
//   result2 = `Mark's bmi ${markBMI2} is lower than John's ${johnBMI2}`;
// }
// console.log(result2);

// const firstName = "Adebowale";
// const lastName = "Suleman";
// const currentYear = 2022;
// const birthYear = 2010;
// const birthPlace = "Osun";
// const age = currentYear - birthYear;

// let details = `Hello, My name is ${firstName + " " + lastName},\n\
// I'm ${currentYear - birthYear} years old 😂,\n\
// I currently reside in ${birthPlace}, Ilesha to be precise because of this damn ASUU body.`;
// console.log(details);

//Test Score for Dolphin
// Test data one
// let minimumScore = 100;
// let dolphinScore1 = (97 + 112 + 101) / 3;
// let koalasScore1 = (109 + 95 + 123) / 3;
// console.log(dolphinScore1, koalasScore1);
// if (dolphinScore1 > koalasScore1 && dolphinScore1 >= 100) {
//   console.log(`Dolphin won!`);
// } else if (koalasScore1 > dolphinScore1 && koalasScore1 >= 100) {
//   console.log(`Koalas won!`);
// } else if (
//   dolphinScore1 === koalasScore1 &&
//   dolphinScore1 >= 100 &&
//   koalasScore1 >= 100
// ) {
//   console.log("It's a Tie");
// } else {
//   console.log("No one wins the throphy");
// }
//Test data two

// let dolphinScore2 = (97 + 112 + 101) / 3;
// let koalasScore2 = (109 + 95 + 123) / 3;

// //Test data three
// let dolphinScore3 = (97 + 112 + 101) / 3;
// let koalasScore3 = (109 + 95 + 106) / 3;

// const name = "bimbo";
// switch (name) {
//   case "jerry":
//     console.log("jerry is the goat");
//     break;

//   case "bimbo":
//     console.log("so ra fun bimbo oo, oluwa a wa pelu ee");
//     break;
//   case "bimpe":
//     console.log("bimpe na my person sha, we gather dey");
//     break;
//   default:
//     console.log("other na coll people");
// }

// const drink = "water";

// let tunde = drink === "water" ? "Normal person" : "I don't like drinks";
// console.log(tunde);

//tip 15% if bill value is greater than 50 but less than 300
const billValue = 275;

// if (billValue >= 50 < 300) {
//   tip = 0.15 * billValue;
// } else {
//   tip = 0.2 * billValue;
// }

// console.log(
//   `The bill was ${billValue}, the tip was ${tip}, and the total value ${
//     billValue + tip
//   }`
// );

let result = billValue >= 50 < 300 ? 0.15 * billValue : 0.2 * billValue;
console.log(result);
