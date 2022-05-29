export default class Intro extends Phaser.Scene {
  constructor() {
    super("intro");
    this.timeCount = 0;
    this.DELAY_TIME = 300;
    this.SCENE_DELAY = 3000;
  }

  preload() {
    this.load.path = "assets/";

    this.load.image("bg1", "bg1.png");
    this.load.image("paul1", "paul1.png");
    this.load.image("paul2", "paul2.png");
    this.load.image("lexi1", "lexi1.png");
    this.load.image("lexi2", "lexi2.png");
    this.load.image("lexi3", "lexi3.png");
    this.load.image("introDialogPaul", "intro-dialog-paul.png");
    this.load.image("introDialogLexi", "intro-dialog-lexi.png");
    this.load.image("rectangle", "rectangle.png");
    this.load.image("button", "button.png");
  }

  create() {
    // фон
    this.add.image(300, 450, "bg1");
    // оверлей
    this.graphics = this.add.graphics().fillStyle(0x000000, 0.7);
    this.graphics.fillRect(0, 0, 600, 900);
    // плашка
    this.rectangle = this.add.image(300, -40, "rectangle").setScale(0.5);
    // текст плашки
    this.rectangleText = this.add.text(150, -45, "Choose your dress", {
      align: "center",
      fontSize: "32px",
      fill: "#fff",
    });

    // создание анимации героя
    this.anims.create({
      key: "introPaul",
      frames: [{ key: "paul1" }, { key: "paul2", duration: 50 }],
      frameRate: 2, // количество кадров
      repeat: -1,
    });

    // создание анимации героини
    this.anims.create({
      key: "introLexi",
      frames: [{ key: "lexi1" }, { key: "lexi2", duration: 50 }],
      frameRate: 2, // количество кадров
      repeat: -1,
    });

    // добавление анимация героев
    this.introPaul = this.add.sprite(300, 465, "paul1").play("introPaul");
    this.introLexi = this.add.sprite(-300, 465, "lexi1").play("introLexi");

    // диалог героя
    this.introDialogPaul = this.add
      .image(42.5, 400, "introDialogPaul")
      .setOrigin(0, 0)
      .setScale(0);

    // диалог героини
    this.introDialogLexi = this.add
      .image(62.5, 400, "introDialogLexi")
      .setOrigin(0, 0)
      .setScale(0);

    this.lexi = this.add.image(0, 0, "lexi1").setOrigin(0, 0).setScale(0);
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

    // time 5700...6000
    if (
      this.timeCount > this.SCENE_DELAY * 2 - this.DELAY_TIME &&
      this.timeCount < this.SCENE_DELAY * 2 - 11
    ) {
      this.introDialogLexi.setScale(
        (this.SCENE_DELAY * 2 - this.timeCount) / this.DELAY_TIME
      );
    }

    // time 6000
    if (
      this.timeCount > this.SCENE_DELAY * 2 - 10 &&
      this.timeCount < this.SCENE_DELAY * 2 + 10
    ) {
      this.introDialogLexi.destroy();
      this.introLexi.active = false;
      this.introLexi.setTexture("lexi3");

      // кнопки
      this.buttonLeft = this.add.image(170, 720, "button");
      this.buttonRight = this.add.image(430, 720, "button");
    }

    // time 6000...6300
    if (
      this.timeCount > this.SCENE_DELAY * 2 + 11 &&
      this.timeCount < this.SCENE_DELAY * 2 + this.DELAY_TIME - 11
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
      this.buttonRight.setScale(
        (this.timeCount - this.SCENE_DELAY * 2) / this.DELAY_TIME
      );
    }

    if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME - 10 &&
      this.timeCount < this.SCENE_DELAY * 2 + this.DELAY_TIME + 10
    ) {
      // this.introLexi.active = true;
    }
  }
}
