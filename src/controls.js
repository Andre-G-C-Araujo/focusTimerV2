import { state } from "./state.js";
import { timer } from "./timer.js";
import * as el from "./elements.js";
import { updateDisplay } from "./updateDisplay.js";
import { setTimer } from "./function.js";

export const btnPlay = document.getElementById("play-button");
export const btnPause = document.getElementById("pause-button");
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

const togglePlayPauseIcon = () => {
  btnLeftToggle();
  state.itsOn = false;
};
3;
btnPause.addEventListener("click", togglePlayPauseIcon);

btnReset.addEventListener("click", () => {
  state.minutes = 0;
  state.seconds = 0;
  setTimer();
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
