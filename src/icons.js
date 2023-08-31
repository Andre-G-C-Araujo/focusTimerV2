import { sound, playMusic } from "./sounds.js";

export const iconSounds = (event) => {
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
    playMusic(sound.florestSound, handleEvent, sound.musicState);
  }
  if (handleEvent.classList.contains("ph-cloud-rain")) {
    playMusic(sound.rainSound, handleEvent, sound.musicState);
  }
  if (handleEvent.classList.contains("ph-storefront")) {
    playMusic(sound.cafeteria, handleEvent, sound.musicState);
  }
  if (handleEvent.classList.contains("ph-fire")) {
    playMusic(sound.lareira, handleEvent, sound.musicState);
  }
};
