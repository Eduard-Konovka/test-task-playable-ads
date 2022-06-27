import Game from "./scenes/Game.js";

const body = document.querySelector("body");
body.setAttribute("style", `height: ${window.innerHeight}px`);

new Phaser.Game({
  type: Phaser.AUTO,
  width: window.innerWidth > window.innerHeight ? 1080 : 600,
  height: 900,
  zoom:
    window.innerWidth > window.innerHeight
      ? window.innerHeight / 900
      : window.innerWidth / 600,
  title: "My Fantasy: Make Your Story",
  url: "https://github.com/Eduard-Konovka/test-task-playable-ads",
  physics: {
    default: "arcade",
  },
  scene: Game,
});
