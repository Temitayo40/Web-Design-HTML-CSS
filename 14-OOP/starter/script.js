'use strict';
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do thuis
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const dammy = new Person('Jonas', 1991);

const matilda = new Person('Jack', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

// const jay = 'jay';

console.log(dammy instanceof Person);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

dammy.calcAge();
matilda.calcAge();

console.log(dammy.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(dammy));
console.log(Person.prototype.isPrototypeOf(matilda));

// .prototypeOfLinkedObjects
Person.prototype.species = 'Homo Sapiens';
console.log(dammy.species, matilda.species);

console.log(dammy.hasOwnProperty('firstName'));
console.log(dammy.hasOwnProperty('species'));

const arr = [3, 4, 3, 4, 3, 3, 9, 7, 7];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const Cars = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Cars.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/hr`);
};
Cars.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/hr`);
};

// const dammy = new Person('Jonas', 1991);
const bmw = new Cars('BMW', 120);
const mercedes = new Cars('Mercedes', 110);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();

//classs expression
// const PersonCL = class {}

//class delcaration
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //instance method
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    console.log(`Hey ${this.birthYear}`);
  }

  //set property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get _fullName() {
    return this.fullName;
  }

  //static method
  static hey() {
    console.log('Hey there 👋`');
  }
}

/*
const jessica = new PersonCL('Jessica', 1999);
console.log(jessica);
jessica.calcAge();

// PersonCL.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

//1. classes are not hoisted
// 2. classes are first- class citizen
//3. classes are ecevuted in strict mode
const walter = new PersonCL('walter janes', 1999);

// Array.from()
// Number.parseFloat()


const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
*/
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
// never do thuis
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

Car.prototype.EV = function () {};
const mike = new Student('Mike', 2000, 'Computer Science');
mike.introduce();
// mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
Student.prototype.constructor = Student;

const Cars = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Cars.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/hr`);
};
Cars.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/hr`);
};

class StudentCL extends Person {
  constructor(fullNmae, birthYear, course) {
    //Always needs to happen first
    super(fullNmae, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `i'am ${
        2027 - this.birthYear
      } years old, but as a student I feel more like ${2037 - this.year + 10}`
    );
  }
}
const paul = new StudentCL('Jannie paul', 2010, 'Engineering');
*/

//Ineritance Between "Classes":

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const stephan = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

// public fields
// private fields
//public methdds
// Private method

const jay = Object.create(StudentProto);
jay.init('jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

class Account {
  // public fields (instance)
  locale = navigator.language;
  _movement = [];

  // 2. private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //
    this.#movement = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movement.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`loan deposited`);
      return this;
    }
  }

  // 4. private method
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Dammy', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1);
