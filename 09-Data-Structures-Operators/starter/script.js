'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const nested = [2, 4, [5, 6]];

// const [a, , b] = nested;
// console.log(a, b);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//spread, because on Right Sode of =
// const arr = [1, 2, ...[3, 4]];

//res, because on left side  of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];

const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'Risotto',
  'pasta',
  'pizza',
]);
console.log(orderSet);
orderSet.has('pizza');
orderSet.add('Gralic Bread');
orderSet.delete('Risotto');
console.log(orderSet);

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io   \n';

const lowerEmail = loginEmail.toLowerCase().trim();
console.log(lowerEmail);
console.log(email === loginEmail);

//replacing
const priceGB = '288,973$';
const priceUS = priceGB.replace('$', 'N').replace(',', '.');

const announcement = 'All passengers come to boarding all 23. Boarding door 23';
console.log(announcement.replace('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

//Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW AIRbus family');
}

//practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are Not Allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a Laptop, some Food and a Pocket knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection');

//Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Adebowale Damilola'.split(' '));

const [firstName, lastName] = 'Adebowale Damilola'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    console.log(namesUpper.join('  '));
  }
};
capitalizeName('jessica ann smith davis');
capitalizeName('jadebowale samiloa');

//padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(srt.length, '*');
};

console.log(maskCreditCard(648724232));
console.log(maskCreditCard(439838287648724232));
console.log(maskCreditCard('43983828764872232'));

//Repeat
const message2 = 'Bad Weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const prog = function () {};

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const split = text.split('\n');

  for (const [i, rows] of split.entries()) {
    const [first, second] = rows.toLowerCase().trim().split('_');
    const words = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${words.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
