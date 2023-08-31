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

//
const florestSound = new Audio("./assets/Floresta.wav");
const rainSound = new Audio("./assets/Chuva.wav");
const cafeteria = new Audio("./assets/Cafeteria.wav");
const lareira = new Audio("./assets/Lareira.wav");
florestSound.loop = true;
rainSound.loop = true;
cafeteria.loop = true;
lareira.loop = true;

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

// let musicState = false;

const playMusic = (music, handleEvent, musicState) => {
  musicState = true;

  if (
    btnsRightSide.tree.classList.contains("btnClicked") ||
    btnsRightSide.cloud.classList.contains("btnClicked") ||
    btnsRightSide.fire.classList.contains("btnClicked") ||
    btnsRightSide.shop.classList.contains("btnClicked")
  ) {
    music.pause();
    handleEvent.classList.remove("btnClicked");

    return;
  }

  if (musicState) {
    musicState = !musicState;
    music.play();
    handleEvent.classList.add("btnClicked");
  }
};

const iconContent = document.querySelector(".iconButtons");

let musicState = false;
const btnsRightSide = {
  tree: document.querySelector(".ph-tree"),
  cloud: document.querySelector(".ph-cloud-rain"),
  shop: document.querySelector(".ph-storefront"),
  fire: document.querySelector(".ph-fire"),
};

iconContent.addEventListener(
  "click",
  (event) => {
    const handleEvent = event.target;
    if (!handleEvent.classList.contains("btnRightSize")) {
      return;
    }
    // if (
    //   handleEvent.classList.contains("btnRightSize") &&
    //   handleEvent.classList.contains("ph-tree")
    // ) {
    //   handleEvent.classList.toggle("btnClicked");
    //   florestSound.play();
    // }
    if (handleEvent.classList.contains("ph-tree")) {
      playMusic(florestSound, handleEvent, musicState);
    }
    if (handleEvent.classList.contains("ph-cloud-rain")) {
      playMusic(rainSound, handleEvent, musicState);
    }
    if (handleEvent.classList.contains("ph-storefront")) {
      playMusic(cafeteria, handleEvent, musicState);
    }
    if (handleEvent.classList.contains("ph-fire")) {
      playMusic(lareira, handleEvent, musicState);
    }
  }

  // if(event.target)
);

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
  }, 1000);

  updateDisplay();
};

const updateDisplay = () => {
  minutes.textContent = String(state.minutes).padStart(2, "0");
  seconds.textContent = String(state.seconds).padStart(2, "0");
};

updateDisplay();
