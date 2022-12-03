const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 6, 3];
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

//dog is adult if it is at least 3yrs
//  puppy < 3yr
// dog >= 3 ? adult : puppy

const checkDogs = function (dogsJulia, dogsKate) {
  const conJulia = dogsJulia.splice(1, 2);

  const corrected = [...conJulia, ...dogsKate];

  corrected.forEach(function (dog, i) {
    const check =
      dog >= 3
        ? `Dog num ${i + 1} is an adult, and is ${dog} years old`
        : `Dog num ${i + 1} is a puppy`;
    console.log(check);
    // console.log(`Dog number ${i + 1} is an ${check}, and is `);
  });
};
checkDogs(dogsJulia2, dogsKate2);

// const withdrawal = movements.filter(function (mov) {
//   return mov < 0;
// });

// const withdrew = [];
// for (const mov of movements) if (mov < 0) withdrew.push(mov);

// test data1: julia[3,5,2,12,7], kate[4,1,15,6,3]
// test data2: julia[9,16,6,8,3], kate[10,5,6,1,4]

// const movementsUSD = movement.map((mov) => mov * euroToUsd);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 0);

//maximum value ofthe array
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

let sum = 0;
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );

  console.log(humanAge);
  const adult = humanAge.filter((age) => age >= 18);
  console.log(adult);

  const avgAge = adult.reduce((acc, avg) => acc + avg, 0) / adult.length;
  return avgAge;
  //   console.log(avgAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//chaining
const calcAverageHumanAge2 = function (ages) {
  const humanAge = ages
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((dogAge) => dogAge >= 18)
    .reduce((acc, dogAge, i, arr) => acc + dogAge / arr.length, 0);
};

for (const acc of accounts) {
  if (acc.owner === "Jessica Davis") console.log(acc);
}

const arr = new Array(7);

arr.from({ length: 100 }, () => Math.random() * 100);

labelBalance.addEventListener("click", function () {
  const movementUI = Array.from(document.querySelectorAll(".movements__value"));
  movementUI.map((ele) => ele.textContent.replace("£", ""));
});

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each
 dog, calculate the recommended food portion and add it to the
  object as a new property. Do NOT create a new array, simply
   loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28.
    (The result is in grams of food, and the weight needs to 
      be in kg)
2. Find Sarah's dog and log to the console whether it's eatin
g too much or too little. HINT: Some dogs have multiple owner
s, so you first need to find Sarah in the owners array, and 
so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too
 much ('ownersEatTooMuch') and an array with all owners of 
 dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3.,
 like this: "Matilda and Alice and Bob's dogs eat too much!"
  and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:


GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach((dog) => Math.trunc((dog.dogRec = weight ** 0.75 * 25)));

const dogSarah = dogs.find((dog) => dog.owners.includes("sarah"));
dogSarah.curFood > dogSarah.dogRec ? "Much" : "Little";

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.dogRec)
  .flatMap((dog) => dog.owners);
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.dogRec)
  .flatMap((dog) => dog.owners);

/*

dogs.forEach((dog) => Math.trunc((dog.recFood = weight ** 0.75 * 25)));

const dogSarah = dogs.find((dog) => dog.owners.includes("sarah"));
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  } `
);

// 3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
// sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
*/
