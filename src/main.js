import { iconSounds } from "./icons.js";
import { updateDisplay } from "./updateDisplay.js";
import { timer } from "./timer.js";
import { btnLeftToggle } from "./controls.js";

const iconContent = document.querySelector(".iconButtons");
iconContent.addEventListener("click", (event) => {
  iconSounds(event);
});

timer();
updateDisplay();
btnLeftToggle();
