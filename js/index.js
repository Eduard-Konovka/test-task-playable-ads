import Game from "./scenes/Game.js";

const body = document.querySelector("body");
window.innerWidth < window.innerHeight &&
  body.setAttribute("style", `height: ${window.innerHeight}px`);

const mobileBrowserZoom =
  navigator.userAgent.includes("Android") ||
  navigator.userAgent.includes("iPhone")
    ? (window.innerHeight / 900) * 1.19
    : window.innerHeight / 900;

new Phaser.Game({
  type: Phaser.AUTO,
  width: window.innerWidth > window.innerHeight ? 1080 : 600,
  height: 900,
  zoom:
    window.innerWidth > window.innerHeight
      ? mobileBrowserZoom
      : window.innerWidth / 600,
  title: "My Fantasy: Make Your Story",
  url: "https://github.com/Eduard-Konovka/test-task-playable-ads",
  physics: {
    default: "arcade",
  },
  scene: Game,
});
