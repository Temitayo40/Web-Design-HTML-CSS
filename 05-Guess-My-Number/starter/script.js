'use strict';
// console.log(document.querySelector('.message').textContent);

// console.log((document.querySelector('.score').textContent = 30));
// console.log((document.querySelector('.guess').value = 10));

const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const number = document.querySelector('.number');
const again = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNum = 20;
let highscore = 0;

// console.log(secretNumber);
// console.log(num, typeof num);

check.addEventListener('click', function () {
  let num = Number(guess.value);
  // when there is no value
  if (!num) {
    message.textContent = '🚫 no number';
  } // when the value is equal
  else if (num === secretNumber) {
    message.textContent = 'correct Guess';
    number.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (scoreNum > highscore) {
      highscore = scoreNum;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when the value is greater
  else if (guess !== secretNumber) {
    if (scoreNum > 1) {
      message.textContent =
        guess > secretNumber ? '📈 Too high' : '📈 Too high';
      scoreNum--;
      score.textContent = scoreNum;
    } else {
      message.textContent = '💥 You Lost The Game';
      score.textContent = 0;
    }
  }
  //   } else if (num > secretNumber) {
  //     if (scoreNum > 1) {
  //       message.textContent = '📈 Too high';
  //       scoreNum--;
  //       score.textContent = scoreNum;
  //     } else {
  //       message.textContent = '💥 You Lost The Game';
  //       score.textContent = 0;
  //     }

  //     // when the number is lower
  //   } else if (num < secretNumber) {
  //     if (scoreNum > 1) {
  //       message.textContent = '📉 5 Too Low';
  //       scoreNum--;
  //       score.textContent = scoreNum;
  //     } else {
  //       message.textContent = '💥 You Lost The Game';
  //       score.textContent = 0;
  //     }
  //   }
});

again.addEventListener('click', function () {
  scoreNum = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'start guessing';
  score.textContent = scoreNum;
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
