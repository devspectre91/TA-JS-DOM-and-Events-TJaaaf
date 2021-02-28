'use strict';



var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});
var attempts = 0;
var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;
var remaining = 8;
var flag = 100;
var timeSpent = 0;
var myTimer = 0;
var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
  var name = item.name,
    img = item.img;


  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var match = function match() {
  remaining--;
  if (remaining == 0) {
    clearInterval(myTimer);
    console.log(timeSpent);
    grid.innerHTML = '';
    let result = document.createElement("div");
    let time = document.createElement("div");
    result.classList.add("result");
    time.classList.add("result-time")
    grid.append(result, time);
    result.innerText = `your took ${attempts} attempts`;
    time.innerText = `Time taken : ${timeSpent > 60 ? timeSpent / 60 : 0} minutes and ${timeSpent > 60 ? timeSpent % 60 : timeSpent} seconds `;
  }
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
};

var resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', function (event) {

  if (flag == 100) {
    myTimer = setInterval(countTime, 1000);
    console.log("called");

    flag = 102; console.log(flag);
  }
  var clicked = event.target;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
      attempts++;
      console.log(attempts);
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});


function countTime() {
  timeSpent++;
  console.log(timeSpent)
}

// when click event happen timer shoould Start
// when remaiing==0, timer should stop
//print the time spent on screen
//timeSpent=98s
//minutes=(timeSpent/60)
  //seconds=(timeSpent%60)