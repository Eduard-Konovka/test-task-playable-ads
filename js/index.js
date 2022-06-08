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
  // FIXME url
  url: "https://eduard-konovka.github.io/test-task-playable-ads/",
  scene: window.innerWidth > window.innerHeight ? GameHorizontal : GameVertical,
});

// TODO run server on GitHub or Netlify
// TODO choice of zoom
