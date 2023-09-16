import { state } from "./state.js";
import * as el from "./elements.js";
import { updateDisplay } from "./updateDisplay.js";

const set = () => {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
};

export const setTimer = () => {
  set();
  setTimeStart();
};

export const setTimeStart = () => {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });
  el.minutes.onkeypress = (event) => /\d/.test(event.key);
  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;
    time = time > 99 ? 99 : time;
    state.minutes = time;
    state.seconds = 0;
    updateDisplay();
    el.minutes.removeAttribute("contenteditable");
  });
};
