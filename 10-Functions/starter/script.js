'use strict';
// / /g used to replace all spces in an expression
/*
const oneWord = function () {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};
transformer('Javascript is the best!', upperFirstWord);
const login = function () {
  console.log('👋');
};

['jonas', 'mathas', 'Adam'].forEach(login);

const ages = function () {
  const birthYr = 2000;
  return 2022 - birthYr;
};

const names = function (fullName, fn) {
  const [first, last] = fullName.split(' ');
  //   console.log(first[0].toUpperCase() + first.slice(1), last);
  //   console.log(first.replace(first[0], first[0].toUpperCase()));
  const all = [
    first.replace(first[0], first[0].toUpperCase()),
    last.replace(last[0], last[0].toUpperCase()),
  ].join('-');

  console.log(`${all} is ${fn} yrs Old `);
};

names('adebowale damilola', ages());

const greet = greeting => {
  return name => {
    console.log();
  };
};


const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(238, 'Adebowale Damilola');
lufthansa.book(898, 'Oladayo Olatunji');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//does not work
// book(23, 'Araba Michael');

// call method
book.call(eurowings, 23, 'Araba Michael');
console.log(eurowings);

book.call(lufthansa, 45, 'Umah Samuel');

// Apply Method
const flightData = [456, 'olamide john'];
book.apply(eurowings, flightData);
console.log(flightData);

book.call(lufthansa, ...flightData);

// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(23, 'James Smith');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Adewumi Jane');

//partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
addVAT(100);


Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming Language?',
  options: ['0: javaScript', '1: python', '2: Rust', '3: C++'],
  // this generates [0,0,0,0]. more in the next section
  answer: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
};
console.log(poll.answer[3]);

(function () {
  console.log('Who dey breath');
})();

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
});
