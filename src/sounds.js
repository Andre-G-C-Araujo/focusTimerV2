export const sound = {
  florestSound: new Audio("./assets/Floresta.wav"),
  rainSound: new Audio("./assets/Chuva.wav"),
  cafeteria: new Audio("./assets/Cafeteria.wav"),
  lareira: new Audio("./assets/Lareira.wav"),
};
sound.florestSound.loop = true;
sound.rainSound.loop = true;
sound.cafeteria.loop = true;
sound.lareira.loop = true;

let musicState = false;

const btnsRightSide = {
  tree: document.querySelector(".ph-tree"),
  cloud: document.querySelector(".ph-cloud-rain"),
  shop: document.querySelector(".ph-storefront"),
  fire: document.querySelector(".ph-fire"),
};

export const playMusic = (music, handleEvent, musicState) => {
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
