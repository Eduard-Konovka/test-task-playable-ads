export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {
    this.load.path = "assets/";
    this.load.audio("bgSound", ["bgSound.wav", "bgSound.mp3"]);
  }

  create() {
    this.sound.add("bgSound", { loop: true }).play();
  }

  update() {
    this.scene.start("intro");
  }
}
