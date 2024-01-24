"use strict";
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

const displayMessage = (message) => {
	document.querySelector(".message").textContent = message;
};

const checkGuess = () => {
	const guessElement = document.querySelector(".guess");
	const guess = +guessElement.value;
	const scoreElement = document.querySelector(".score");
	const bodyElement = document.querySelector("body");
	const numberElement = document.querySelector(".number");
	const highScoreElement = document.querySelector(".highscore");

	// when there is no guess
	if (!guess) {
		displayMessage("⛔ No Number");

		// when guess is right
	} else if (guess === secretNumber) {
		guessElement.disabled = true;
		displayMessage("🎉 Correct Number");
		bodyElement.style.backgroundColor = "#60b347";
		numberElement.style.width = "30rem";
		numberElement.textContent = secretNumber;
		if (score > highScore) {
			highScoreElement.textContent = highScore = score;
		}

		// when guess is wrong
	} else {
		if (guess > secretNumber) {
			displayMessage("📈 Too High");
		} else {
			displayMessage("📉 Too Low");
		}
		if (score > 0) {
			scoreElement.textContent = --score;
		}
		if (score <= 0) {
			displayMessage("💥 You Lose!");
			guessElement.disabled = true;
		}
	}
};

const resetHandler = () => {
	const scoreElement = document.querySelector(".score");
	const bodyElement = document.querySelector("body");
	const numberElement = document.querySelector(".number");
	const guessElement = document.querySelector(".guess");
	secretNumber = Math.floor(Math.random() * 20) + 1;
	// console.log(secretNumber); // just for testing
	score = 10;
	displayMessage("Start guessing...");
	bodyElement.style.backgroundColor = "#222";
	numberElement.style.width = "15rem";
	numberElement.textContent = "?";
	guessElement.disabled = false;
	guessElement.value = "";
	scoreElement.textContent = score;
};

document.querySelector(".check").addEventListener("click", checkGuess);
document.querySelector(".again").addEventListener("click", resetHandler);

// console.log(secretNumber); // just for testing
