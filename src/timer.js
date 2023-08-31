import { updateDisplay } from "./updateDisplay.js";
import { state } from "./state.js";

export const timer = () => {
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
