import GameHorizontal from "./scenes/GameHorizontal.js";
import GameVertical from "./scenes/GameVertical.js";

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
  scene: window.innerWidth > window.innerHeight ? GameHorizontal : GameVertical,
});

// TODO choice of zoom
