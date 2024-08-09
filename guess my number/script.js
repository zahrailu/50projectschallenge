"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 1;
document.querySelector(".guess").value = 22;
console.log(document.querySelector(".guess").value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "NO NUMBER! 🙈";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "TOO HIGH⚡";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "TOO LOW 👇";
  }
});
