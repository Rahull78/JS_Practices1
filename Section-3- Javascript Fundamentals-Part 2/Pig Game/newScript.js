"use strict";

// Selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const highScore0El = document.getElementById("high-score--0"); // High Score element
const highScore1El = document.getElementById("high-score--1"); // High Score element

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing, highScores; // Added highScores

// Initialize the game
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  //   Set the High Score into Local Storage using Array
  highScores = [
    localStorage.getItem("highScore0")
      ? Number(localStorage.getItem("highScore0"))
      : 0,
    localStorage.getItem("highScore1")
      ? Number(localStorage.getItem("highScore1"))
      : 0,
  ];

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  //   Display the Updated score using LocalStorage
  highScore0El.textContent = `High Score: ${highScores[0]}`;
  highScore1El.textContent = `High Score: ${highScores[1]}`;

  // Hide the dice at the start
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

// Reloading from new game button
window.onload = init;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling Dice Functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // Generate Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display Dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current roll
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // Add Current Score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Update high score if current score is higher
    if (scores[activePlayer] > highScores[activePlayer]) {
      highScores[activePlayer] = scores[activePlayer];

      document.getElementById(
        `high-score--${activePlayer}`
      ).textContent = `High Score: ${highScores[activePlayer]}`;
    }

    // Save & Updating to the Local Storage
    localStorage.setItem(`highScore${activePlayer}`, highScores[activePlayer]);

    // Check if player's score is >= 100 to finish game
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

// New Game button functionality
btnNew.addEventListener("click", function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  location.reload();
});
