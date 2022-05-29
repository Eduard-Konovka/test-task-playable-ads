import Game from "./scenes/Game.js";
import Intro from "./scenes/Intro.js";

new Phaser.Game({
  type: Phaser.AUTO,
  width: 600,
  height: 900,
  scene: [Game, Intro],
});
