'use strict';
/*
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `Correct Number 🥳`;

console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;

document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;

console.log(document.querySelector(`.guess`).value); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 5;

let highscore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  //no input

  if (!guess) {
    document.querySelector(`.message`).textContent = `❌ No number!`;

    //player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🥳 Correct Number!`;

    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    //too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `😂Too High!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost, imagine 🤣`;
      document.querySelector(`.score`).textContent = 0;
    }

    //too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `😂Too Low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost, imagine losing 
      `;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 5;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = '';
});
