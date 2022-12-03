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

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/hr`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/hr`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    return speed * 1.6;
  }
}

const Ev = function (make, speed, charge) {
  Cars.call(this, make, speed);
  this.charge = charge;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} is going at ${this.speed}km/hr`);
};
EV.prototype = Object.create(Car.prototype);
Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

const car = new Car('dammy', 123);
console.log(car.speedUS);
car.accelerate();
car.brake();
car.speedUS = 50;
console.log();
