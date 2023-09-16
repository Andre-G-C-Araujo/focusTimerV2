import { updateDisplay } from "./updateDisplay.js";
import { state } from "./state.js";
import { sound } from "./sounds.js";
import { setTimer, setTimeStart } from "./function.js";

const spanText = document.querySelector(".minutes");
// spanText.addEventListener("click", () => {
//   spanText.setAttribute("contenteditable", true);
//   spanText.focus();
// });

export const timer = () => {
  if (state.itsOn === false) {
    return;
  }

  if (state.seconds < 0) {
    state.seconds = 59;
    state.minutes--;
  }
  if (state.minutes < 0) {
    sound.kitchenTimer.play();
    setTimeout(() => {
      alert("your time is over");
    }, 2000);
    return;
  }
  setTimeout(() => {
    state.seconds--;
    timer();
  }, 1000);

  updateDisplay();
};
