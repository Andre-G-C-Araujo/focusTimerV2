// State
const state = {
  seconds: 0,
  minutes: 0,
  itsOn: false,
};

//Elementos

const clock = document.querySelector(".clock");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

//buttons catch

const btnPlay = document.getElementById("play-button");
const btnPause = document.getElementById("pause-button");
const btnReset = document.getElementById("reset-button");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");

//buttons actions
const btnLeftToggle = () => {
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
  state.minutes = Number(minutes.textContent) + 5;
  updateDisplay();
});

btnMinus.addEventListener("click", () => {
  if (state.minutes <= 0) {
    return;
  }
  state.minutes = Number(minutes.textContent) - 5;
  updateDisplay();
});
//clock text

const timer = () => {
  if (state.itsOn === false) {
    return;
  }

  if (state.seconds < 0) {
    state.seconds = 59;
    state.minutes--;
  }
  if (state.minutes < 0) {
    console.log("your time is done, lets take a shower and make some food");
    return;
  }
  setTimeout(() => {
    state.seconds--;
    timer();
  }, 200);

  updateDisplay();
};

const updateDisplay = () => {
  minutes.textContent = String(state.minutes).padStart(2, "0");
  seconds.textContent = String(state.seconds).padStart(2, "0");
};
