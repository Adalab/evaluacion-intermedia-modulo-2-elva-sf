"use strict";
const tryButton = document.querySelector(".js-button");

const number = document.querySelector(".js-inputNumber");

const getRandomNumber = function (max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const handler = function (ev) {
    ev.preventDefault();
    const clue = document.querySelector("js-inputClue");
    const numberValue = number.value;

    if (numberValue > randomNumber) {
        clue.innerHTML = "Demasiado alto";
        console.log("Demasiado alto");
    } else if (numberValue < randomNumber) {
        clue.innerHTML = "Demasiado bajo";
    }
    if (numberValue === randomNumber) {
        clue.innerHTML = "Has ganado campeona!!!";
    } else
        if (numberValue < 1 || numberValue > 100) {
            clue.innerHTML = "El número debe estar entre 1 y 100.";
        }
}

function showAttempts() {
    let attempt;
    for (attempt = 0; attempt > 0; attempt++) {
        console.log();
    };
}

function stopAction(ev) {
}

tryButton.addEventListener("click", handler);
