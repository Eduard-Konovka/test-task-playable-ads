import Game from "./scenes/Game.js";

const windowSize = () =>
  window.innerWidth / window.innerHeight > 1.5
    ? window.innerHeight / 900
    : window.innerWidth / 600;

new Phaser.Game({
  type: Phaser.AUTO,
  width: 600,
  height: 900,
  zoom: windowSize(),
  scene: Game,
});
