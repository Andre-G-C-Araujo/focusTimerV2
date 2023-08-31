import * as el from "./elements.js";
import { state } from "./state.js";

export const updateDisplay = () => {
  el.minutes.textContent = String(state.minutes).padStart(2, "0");
  el.seconds.textContent = String(state.seconds).padStart(2, "0");
};
