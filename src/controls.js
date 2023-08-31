import { state } from "./state.js";
import { timer } from "./timer.js";
import * as el from "./elements.js";
import { updateDisplay } from "./updateDisplay.js";

const btnPlay = document.getElementById("play-button");
const btnPause = document.getElementById("pause-button");
const btnReset = document.getElementById("reset-button");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");

export const btnLeftToggle = () => {
  btnPlay.classList.toggle("hidden");
  btnPause.classList.toggle("hidden");
};

btnPlay.addEventListener("click", () => {
  state.itsOn = true;
  timer();
  btnLeftToggle();
});

btnPause.addEventListener("click", () => {
  btnLeftToggle();
  state.itsOn = false;
});

btnReset.addEventListener("click", () => {
  state.minutes = 0;
  state.seconds = 0; //state menos state (state - state)
  updateDisplay();
});

btnPlus.addEventListener("click", () => {
  state.minutes = Number(el.minutes.textContent) + 5;
  updateDisplay();
});

btnMinus.addEventListener("click", () => {
  if (state.minutes <= 0) {
    return;
  }
  state.minutes = Number(el.minutes.textContent) - 5;
  updateDisplay();
});
