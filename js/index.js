import Game from "./scenes/Game.js";

new Phaser.Game({
  type: Phaser.AUTO,
  width: 600,
  height: 900,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: Game,
});
