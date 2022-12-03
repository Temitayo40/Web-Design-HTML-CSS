'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
    <article class="country ">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
*/

/////////////////////////////////////////////////////////////////////////////
//Old ways of doing things
/////////////////////////////////////////////////////////////////////////////
/* 

const getCountryAndNeighbour = function (country) {
  //Ajax call country one
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //Render Country
    renderCountry(data);
    //Get neighbor country
    const [neighbour] = data.borders;
    if (!neighbour) return;

    //Ajax call country two
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, 'neighbour');
    });
  });
};
// console.log('dammy na boss');
// getCountryData('nigeria');
getCountryAndNeighbour('usa');
*/

//MODERN WAYS OF IMPLEMENTING THINGS
/////////////////////////////////////////////////////////////////////////////
//Using fetch
/////////////////////////////////////////////////////////////////////////////

// const request = fetch(`https://restcountries.com/v2/name/${country}`);
// console.log(request);

// getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
//

// const getJSON = function (url, errMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
//     return response.json();
//   });
// };

// getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];

//       if (!neighbor) return;

//       //country two
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       renderError(`something went wrong 💥💥💥 ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/*
const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) throw new Error('No neigbhour found!');

      //country two
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      renderError(`something went wrong 💥💥💥 ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

*/

/////////////////////////////////////////////////////////////////////////////
//coding challenge one
/////////////////////////////////////////////////////////////////////////////
/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
console.log('wetin dey sup');
*/

// console.log('Test start');
// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res););

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN');
    } else {
      reject('You lost nyour money');
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('I waited for 1 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 second');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 second');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 second');
    return wait(1);
  });

Promise.resolve('abc').then(x => console.log(X));
Promise.reject(new Error('Error')).catch(x => console.error(x));
*/

/////////////////////////////////////////////////////////////////////////////
//PROMISISFYING THE GEOLOCATION API
/////////////////////////////////////////////////////////////////////////////
/*

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);

whereAmI(52.508, 13.381);
*/

/////////////////////////////////////////////////////////////////////////////
//Coding challnege two
/////////////////////////////////////////////////////////////////////////////
/*
const imgcontainer = document.querySelector('.images');
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (path) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = path;
    img.addEventListener('load', function () {
      imgcontainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject('Image not found');
    });
  });
};

let currentImage;
createImage('img/img-1.jpg')
  .then(res => {
    currentImage = res;
    console.log('img 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-2.png');
  })
  .then(res => {
    currentImage = res;
    console.log('img 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
  })
  .catch(err => console.log(err));
*/

//////////////////////////////////////////////////////////////////////////////
//CONSUMING PROMISE WITH ASYNC  AWAIT, Error handling with try and catch
/////////////////////////////////////////////////////////////////////////////
//  fetch(`https://restcountries.com/v2/name/${country}`).then(data => console.log(data))
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function (country) {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    //Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    //country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting location data');
    console.log(res);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
    return `You are in ${data.city}, ${data.country}`;
  } catch (err) {
    console.log(`${err} 🔥`);
    renderCountry(`Something went wrong 💥 ${err.message}`);

    //Reject promise return from async function
    throw err;
  }
};

// const city = whereAmI()
// console.log(city);
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`${err.message}`))
//   .finally(() => console.log('3: finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(err.message);
  }
  console.log('3: finished getting location');
})();
*/

///////////////////////////////////////////
// /Running Promise in parallel, promise all

const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
    return response.json();
  });
};

const get3countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.com/v2/alpha/${c1}`,
    //   'Country not found'
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.com/v2/alpha/${c2}`,
    //   'Country not found'
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.com/v2/alpha/${c3}`,
    //   'Country not found'
    // );

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/alpha/${c1}`),
      getJSON(`https://restcountries.com/v2/alpha/${c2}`),
      getJSON(`https://restcountries.com/v2/alpha/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
    // console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.log(err);
  }
};

get3countries('portugal', 'canada', 'tanzania');

//Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/alpha/italy`),
    getJSON(`https://restcountries.com/v2/alpha/egypt`),
    getJSON(`https://restcountries.com/v2/alpha/mexico`),
  ]);
  console.log(res[0]);
});

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/alpha/tanzania`),
  timeout(1),
])
  .then(data => console.log(data[0]))
  .catch(err => console.error(err));

//promise.allSettled
Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('Error'),
  Promise.resolve(' Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

// promise.any[ES2021]
Promise.any([
  Promise.resolve('success'),
  Promise.reject('Error'),
  Promise.resolve(' Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

const imgcontainer = document.querySelector('.images');
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (path) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = path;
    img.addEventListener('load', function () {
      imgcontainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject('Image not found');
    });
  });
};

let currentImage;
createImage('img/img-1.jpg')
  .then(res => {
    currentImage = res;
    console.log('img 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-2.png');
  })
  .then(res => {
    currentImage = res;
    console.log('img 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
  })
  .catch(err => console.log(err));

///////////////////////////////////////
// Coding challenge number three
///////////////////////////////////////
// Part one
const loadNpause = async function (path) {
  try {
    //load image 1
    let img1 = await createImage('img/img-1.jpg');
    console.log('img 1 loaded');
    await wait(2);
    img1.style.display = 'none';
    //load image 2
    img1 = await createImage('img/img-2 .jpg');
    console.log('img 2 loaded');
    await wait(2);
    img1.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};
loadNpause();
//part two
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);
    const imgsEl = Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
