'use strict';
/*
// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;
class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10)
  constructor(coords, distance, duration){
    this.coords = coords
    this.distance = distance //
    this.duration = duration
  }
}
class Running extends Workout{
  constructor(coords, distance, cadence){
  super(coords, distance, cadence)
  this.cadence = cadence
  this.calcPace()
  }
  calcPace() {
    //min/km
    this.pace = this.duration / this.distance
    return this.pace
  }
}
class Cycling extends Workout{
  constructor(coords, distance, cadence){
  super(coords, distance, cadence)
  this.elevationGain = elevationGain 
  this.calcSpeed()
  }
  calcSpeed() {
    //km/h
    this.speed = this.distance / (this.duration / 60)
  }
}

const run1 = new Running([39, -121], 5.2,27, 178)

////////////////////
//Application
class App {
  #map;
  #mapEvent
  constructor() {
    this._getPosition()
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this._loadMap,
         function () {
          alert('Could not get your position');
        }
      );
  }
  _loadMap(position) {
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log();
      const coords = [latitude, longitude];
      map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    }
  
  }
  _showForm() {}
  _toggleElevationField() {}
  _newWorkout() {}
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  //clear input fields
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxwidth: 250,
        minwidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .openPopup();
});

inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row');
  inputCadence.closest('.form__row');
});

*/

import { cloneDeep } from 'lodash-es';

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateDeepClone);
