'use strict';

// event listeners
document.querySelector('.check').addEventListener('click', doThis);
document.querySelector('.again').addEventListener('click', playAgain);

let secretNumber = Math.floor(Math.random() * 100);
const baseScore = document.querySelector('.score').textContent;
let runningScore;

console.log(`secret number is ${secretNumber} `);

function doThis() {
  const checkVal = Number(document.querySelector('.guess').value);
  console.log(`You entered ${checkVal}`);

  if (!checkVal) alert('Kuch toh enter karo....');
  else if (checkVal === secretNumber) {
    console.log(
      `Your number ${checkVal} matches with secret number ${secretNumber}`
    );
    setTextInClass('message', 'Shabaaaaash ...');

    setTextInClass(
      'highscore',
      Number(document.querySelector('.score').textContent) >
        Number(document.querySelector('.highscore').textContent)
        ? document.querySelector('.score').textContent
        : document.querySelector('.highscore').textContent
    );
    setTextInClass('number', secretNumber);
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.again').style.backgroundColor = 'blue';
    document.querySelector('.message').style.backgroundColor = 'blue';
  } else if (checkVal >= secretNumber + 10) {
    console.log(`Your number ${checkVal} is far higher from ${secretNumber}`);

    setTextInClass('message', 'The number is far HIGHER ... Keep Trying');
    setTextInClass('score', (runningScore = decreaseScore()));
  } else if (checkVal <= secretNumber - 10) {
    console.log(`Your number ${checkVal} far lower from ${secretNumber}`);

    setTextInClass('message', 'The number is far LOWER ... Keep Trying');
    setTextInClass('score', (runningScore = decreaseScore()));
  } else {
    console.log(
      `Your number ${checkVal} is closer than ever to ${secretNumber}`
    );
    setTextInClass('message', 'You are getting CLOSER ... Keep Trying');
    setTextInClass('score', (runningScore = decreaseScore()));
  }

  if (runningScore == 0) {
    alert(
      'Oh ooo ! You have exhausted all chances. Click on PLAY AGAIN to restart the game'
    );
    setTextInClass('message', 'TRY AGAIN ! Guess a new number...');
    playAgain();
  }
}

function setTextInClass(className, setText) {
  document.querySelector('.' + className).textContent = setText;
}

function decreaseScore() {
  console.log(
    `Running score is ${document.querySelector('.score').textContent}`
  );

  return Number(document.querySelector('.score').textContent) - 1;
}

function playAgain() {
  setTextInClass('number', '?');
  setTextInClass('message', 'Guess a new number...');
  setTextInClass('score', baseScore);
  document.querySelector('.guess').value = '';
  secretNumber = Math.floor(Math.random() * 100);
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.again').style.backgroundColor = 'white';
  document.querySelector('.message').style.backgroundColor = 'black';
  // setTextInClass('highscore', "");
}
