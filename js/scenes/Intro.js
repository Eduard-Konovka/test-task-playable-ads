export default class Intro extends Phaser.Scene {
  constructor() {
    super("intro");
    this.timeCount = 0;
    this.DELAY_TIME = 300;
    this.SCENE_DELAY = 3000;
  }

  preload() {
    this.load.path = "assets/";

    this.load.image("bg1", "bg11.png");
    this.load.image("paul1", "paul1.png");
    this.load.image("paul2", "paul2.png");
    this.load.image("lexi1", "lexi1.png");
    this.load.image("lexi2", "lexi2.png");
    this.load.image("lexi3", "lexi3.png");
    this.load.image("introDialogPaul", "intro-dialog-paul.png");
    this.load.image("introDialogLexi", "intro-dialog-lexi.png");
    this.load.image("rectangle", "rectangle.png");
    this.load.image("button", "button.png");
    this.load.image("hand", "hand.png");
    this.load.image("cloths1", "cloths1.png");
    this.load.image("cloths2", "cloths2.png");
    this.load.image("cloths3", "cloths3.png");
    this.load.image("cloths4", "cloths4.png");
    this.load.image("cloths5", "cloths5.png");
    this.load.image("cloths6", "cloths6.png");
  }

  create() {
    // background
    this.add.image(300, 450, "bg1");
    // overlay
    this.graphics = this.add.graphics().fillStyle(0x000000, 0.7);
    this.graphics.fillRect(0, 0, 600, 900);
    // billet
    this.rectangle = this.add.image(300, -40, "rectangle").setScale(0.5);
    // text of billet
    this.rectangleText = this.add.text(150, -45, "Choose your dress", {
      align: "center",
      fontSize: "32px",
      fill: "#fff",
    });

    // creating character animation
    this.anims.create({
      key: "introPaul",
      frames: [{ key: "paul1" }, { key: "paul2", duration: 50 }],
      frameRate: 2,
      repeat: -1,
    });

    this.anims.create({
      key: "introLexi",
      frames: [{ key: "lexi1" }, { key: "lexi2", duration: 50 }],
      frameRate: 2,
      repeat: -1,
    });

    // adding animation heroes
    this.introPaul = this.add.sprite(300, 465, "paul1").play("introPaul");
    this.introLexi = this.add.sprite(-300, 465, "lexi1").play("introLexi");

    // hero dialogues
    this.introDialogPaul = this.add
      .image(42.5, 400, "introDialogPaul")
      .setOrigin(0, 0)
      .setScale(0);

    this.introDialogLexi = this.add
      .image(62.5, 400, "introDialogLexi")
      .setOrigin(0, 0)
      .setScale(0);
  }

  update(time, delta) {
    this.timeCount += delta;

    // time 0...300
    if (this.timeCount < this.DELAY_TIME) {
      this.introDialogPaul.setScale(this.timeCount / this.DELAY_TIME);
    }

    // time 2700...3300
    if (
      this.timeCount > this.SCENE_DELAY - this.DELAY_TIME &&
      this.timeCount < this.SCENE_DELAY + this.DELAY_TIME
    ) {
      this.introDialogPaul.setScale(
        (this.SCENE_DELAY - this.timeCount) / this.DELAY_TIME
      );
      this.introPaul.x =
        this.DELAY_TIME * 2 + this.timeCount - this.SCENE_DELAY;
      this.introLexi.x = this.timeCount - this.SCENE_DELAY;
    }

    // time 3000...3300
    if (
      this.timeCount > this.SCENE_DELAY &&
      this.timeCount < this.SCENE_DELAY + this.DELAY_TIME
    ) {
      this.introDialogPaul.destroy();
      this.introDialogLexi.setScale(
        (this.timeCount - this.SCENE_DELAY) / this.DELAY_TIME
      );
    }

    // time 5700...5989
    if (
      this.timeCount > this.SCENE_DELAY * 2 - this.DELAY_TIME &&
      this.timeCount < this.SCENE_DELAY * 2 - 11
    ) {
      this.introDialogLexi.setScale(
        (this.SCENE_DELAY * 2 - this.timeCount) / this.DELAY_TIME
      );
    }

    // time 5990...6010
    if (
      this.timeCount > this.SCENE_DELAY * 2 - 10 &&
      this.timeCount < this.SCENE_DELAY * 2 + 10
    ) {
      this.introDialogLexi.destroy();
      this.introLexi.active = false;
      this.introLexi.setTexture("lexi3");

      // buttons
      this.buttonLeft = this.add.image(170, 720, "button");
      this.buttonRight = this.add.image(430, 720, "button");
      this.buttonLeft.setScale(0);
      this.buttonRight.setScale(0);

      // cloths
      this.cloths1 = this.add.image(170, 720, "cloths1");
      this.cloths2 = this.add.image(430, 720, "cloths2");
      this.cloths1.setScale(0);
      this.cloths2.setScale(0);

      // hint pointer
      this.hand = this.add.image(230, 1200, "hand");
    }

    // time 6011...6300
    if (
      this.timeCount > this.SCENE_DELAY * 2 + 11 &&
      this.timeCount < this.SCENE_DELAY * 2 + this.DELAY_TIME
    ) {
      this.graphics.destroy();
      this.graphics = this.add
        .graphics()
        .fillStyle(
          0x000000,
          (this.SCENE_DELAY * 3 - this.timeCount) / this.DELAY_TIME / 16
        );

      this.introLexi.setScale(
        1 + (this.timeCount - this.SCENE_DELAY * 2) / this.DELAY_TIME / 8
      );
      this.introLexi.y = 465 + (this.timeCount - this.SCENE_DELAY * 2) / 4;

      this.rectangle.y = (this.timeCount - this.SCENE_DELAY * 2) / 7.5;
      this.rectangleText.y = (this.timeCount - this.SCENE_DELAY * 2) / 7.5 - 15;

      this.buttonLeft.setScale(
        (this.timeCount - this.SCENE_DELAY * 2) / this.DELAY_TIME
      );
      this.cloths1.setScale(
        (this.timeCount - this.SCENE_DELAY * 2) / this.DELAY_TIME
      );
    }

    // time 6300...6600
    if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME &&
      this.timeCount < this.SCENE_DELAY * 2 + this.DELAY_TIME * 2
    ) {
      this.buttonRight.setScale(
        (this.timeCount - this.SCENE_DELAY * 2 - this.DELAY_TIME) /
          this.DELAY_TIME
      );
      this.cloths2.setScale(
        (this.timeCount - this.SCENE_DELAY * 2 - this.DELAY_TIME) /
          this.DELAY_TIME
      );
    }

    // time 6600...6900
    if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 2 &&
      this.timeCount < this.SCENE_DELAY * 2 + this.DELAY_TIME * 3
    ) {
      this.hand.y = (1000000 / this.timeCount) * 5.75;
    }

    // time 7200...7380
    if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 &&
      this.timeCount < this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 180
    ) {
      this.hand.x = this.timeCount - this.SCENE_DELAY * 2 - this.DELAY_TIME * 3;
    }

    // time 7480...7740
    if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 280 &&
      this.timeCount < this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 540
    ) {
      this.hand.x =
        480 +
        (this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 280 - this.timeCount);
    }
  }
}
