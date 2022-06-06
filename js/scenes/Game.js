export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
    this.DELAY_TIME = 300;
    this.SCENE_DELAY = 3000;
    this.timeCount = 0;
    this.amasingDelay = 0;
  }

  preload() {
    this.load.path = "assets/";

    this.load.audio("bgSound", ["bgSound.wav", "bgSound.mp3"]);

    this.load.image("bg1", "bg1.png");
    this.load.image("bg2", "bg2.png");
    this.load.image("bg3", "bg3.png");
    this.load.image("paul1", "paul1.png");
    this.load.image("paul2", "paul2.png");
    this.load.image("lexiIntro1", "lexiIntro1.png");
    this.load.image("lexiIntro2", "lexiIntro2.png");
    this.load.image("lexiIntro3", "lexiIntro3.png");
    this.load.image("lexiDress1", "lexiDress1.png");
    this.load.image("lexiDress2", "lexiDress2.png");
    this.load.image("lexiBag1", "lexiBag1.png");
    this.load.image("lexiBag2", "lexiBag2.png");
    this.load.image("lexiBag3", "lexiBag3.png");
    this.load.image("lexiBag4", "lexiBag4.png");
    this.load.image("lexiAccessory1", "lexiAccessory1.png");
    this.load.image("lexiAccessory2", "lexiAccessory2.png");
    this.load.image("lexiAccessory3", "lexiAccessory3.png");
    this.load.image("lexiAccessory4", "lexiAccessory4.png");
    this.load.image("lexiAccessory5", "lexiAccessory5.png");
    this.load.image("lexiAccessory6", "lexiAccessory6.png");
    this.load.image("lexiAccessory7", "lexiAccessory7.png");
    this.load.image("lexiAccessory8", "lexiAccessory8.png");
    this.load.image("dialogIntroPaul", "dialogIntroPaul.png");
    this.load.image("dialogIntroLexi", "dialogIntroLexi.png");
    this.load.image("dialogAmasingPaul", "dialogAmasingPaul.png");
    this.load.image("billet", "billet.png");
    this.load.image("button", "button.png");
    this.load.image("hover", "hover.png");
    this.load.image("hand", "hand.png");
    this.load.image("cloths1", "cloths1.png");
    this.load.image("cloths2", "cloths2.png");
    this.load.image("cloths3", "cloths3.png");
    this.load.image("cloths4", "cloths4.png");
    this.load.image("cloths5", "cloths5.png");
    this.load.image("cloths6", "cloths6.png");
    this.load.image("cloths7", "cloths7.png");
    this.load.image("place1", "place1.png");
    this.load.image("place2", "place2.png");
    this.load.image("playNow", "playNow.png");

    this.clickButton = this.input.keyboard.createCursorKeys();
  }

  create() {
    // background music
    this.sound.add("bgSound", { loop: true }).play();
    // background
    this.background = this.add.image(300, 450, "bg1");
    // overlay
    this.graphics = this.add.graphics().fillStyle(0x000000, 0.7);
    this.graphics.fillRect(0, 0, 600, 900);
    // billet
    this.billet = this.add.image(300, -40, "billet").setScale(0.5);
    // text of billet
    this.billetText = this.add.text(150, -45, "Choose your dress", {
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
      frames: [{ key: "lexiIntro1" }, { key: "lexiIntro2", duration: 50 }],
      frameRate: 2,
      repeat: -1,
    });

    // adding animation heroes
    this.paul = this.add.sprite(300, 465, "paul1").play("introPaul");
    this.lexi = this.add.sprite(-300, 465, "lexiIntro1").play("introLexi");

    // hero dialogues
    this.dialogIntroPaul = this.add
      .image(300, 450, "dialogIntroPaul")
      .setScale(0);

    this.dialogIntroLexi = this.add
      .image(300, 450, "dialogIntroLexi")
      .setScale(0);

    this.dialogAmasingPaul = this.add
      .image(300, 450, "dialogAmasingPaul")
      .setScale(0);
  }

  update(time, delta) {
    this.timeCount += delta;

    // time 0...300
    if (this.timeCount < this.DELAY_TIME) {
      this.dialogIntroPaul.setScale(this.timeCount / this.DELAY_TIME / 2);
    }

    // time 2700...3300
    if (
      this.timeCount > this.SCENE_DELAY - this.DELAY_TIME &&
      this.timeCount < this.SCENE_DELAY + this.DELAY_TIME
    ) {
      this.dialogIntroPaul.setScale(
        (this.SCENE_DELAY - this.timeCount) / this.DELAY_TIME / 2
      );
      this.paul.x = this.DELAY_TIME * 2 + this.timeCount - this.SCENE_DELAY;
      this.lexi.x = this.timeCount - this.SCENE_DELAY;
    }

    // time 3000...3300
    if (
      this.timeCount > this.SCENE_DELAY &&
      this.timeCount < this.SCENE_DELAY + this.DELAY_TIME
    ) {
      this.dialogIntroPaul.destroy();
      this.dialogIntroLexi.setScale(
        (this.timeCount - this.SCENE_DELAY) / this.DELAY_TIME / 2
      );
    }

    // time 5700...5989
    if (
      this.timeCount > this.SCENE_DELAY * 2 - this.DELAY_TIME &&
      this.timeCount < this.SCENE_DELAY * 2 - 11
    ) {
      this.dialogIntroLexi.setScale(
        (this.SCENE_DELAY * 2 - this.timeCount) / this.DELAY_TIME / 2
      );
    }

    // time 5990...6010
    if (
      this.timeCount > this.SCENE_DELAY * 2 - 10 &&
      this.timeCount < this.SCENE_DELAY * 2 + 10
    ) {
      this.dialogIntroLexi.destroy();
      this.lexi.active = false;
      this.lexi.setTexture("lexiIntro3");

      // buttons
      this.buttonLeft = this.add.image(160, 720, "button").setScale(0);
      this.buttonRight = this.add.image(440, 720, "button").setScale(0);
      this.buttonLeft.setInteractive();
      this.buttonRight.setInteractive();

      // hover of button
      this.hover = this.add.image(160, 720, "hover").setScale(0);

      // cloths & places
      this.cloths1 = this.add.image(160, 720, "cloths1").setScale(0);
      this.cloths2 = this.add.image(440, 720, "cloths2").setScale(0);
      this.cloths3 = this.add.image(160, 720, "cloths3").setScale(0);
      this.cloths4 = this.add.image(440, 720, "cloths4").setScale(0);
      this.cloths5 = this.add.image(160, 720, "cloths5").setScale(0);
      this.cloths6 = this.add.image(440, 720, "cloths6").setScale(0);
      this.cloths7 = this.add.image(440, 720, "cloths7").setScale(0);
      this.place1 = this.add.image(160, 720, "place1").setScale(0);
      this.place2 = this.add.image(440, 720, "place2").setScale(0);

      // hint pointer
      this.hand = this.add.image(220, 1200, "hand");

      // click or tuch on buttons
      const clickButtonLeft = () => {
        this.chooseClothes(
          220,
          this.buttonLeft,
          this.cloths1,
          this.cloths2,
          this.cloths3,
          this.cloths4,
          "bag",
          "lexiDress1"
        );
      };

      const clickButtonRight = () => {
        this.chooseClothes(
          500,
          this.buttonRight,
          this.cloths2,
          this.cloths1,
          this.cloths3,
          this.cloths4,
          "bag",
          "lexiDress2"
        );
      };

      this.buttonLeft.on("pointerdown", clickButtonLeft, null);
      this.buttonRight.on("pointerdown", clickButtonRight, null);
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

      this.lexi.setScale(
        1 + (this.timeCount - this.SCENE_DELAY * 2) / this.DELAY_TIME / 8
      );
      this.lexi.y = 465 + (this.timeCount - this.SCENE_DELAY * 2) / 4;

      this.billet.y = (this.timeCount - this.SCENE_DELAY * 2) / 7.5;
      this.billetText.y = (this.timeCount - this.SCENE_DELAY * 2) / 7.5 - 15;

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
      this.buttonLeft.setScale(1);
      this.buttonRight.setScale(1);
      this.hover.setScale(1);
      this.hand.y = (1000000 / this.timeCount) * 5.75;
    }

    // function of hover
    if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 2 &&
      this.hand.x < 300
    ) {
      this.hover.x = 160;
    } else if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 2 &&
      this.hand.x > 300
    ) {
      this.hover.x = 440;
    }

    // time 7200...7400
    if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 &&
      this.timeCount < this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 200
    ) {
      this.hand.x = this.timeCount - this.SCENE_DELAY * 2 - this.DELAY_TIME * 3;
    }

    // time 7500...7760
    if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 300 &&
      this.timeCount < this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 560
    ) {
      this.hand.x =
        480 +
        (this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 280 - this.timeCount);
    }

    // time > 7760
    if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 540 &&
      this.clickButton.left.isDown
    ) {
      this.hand.x = 220;
    } else if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 540 &&
      this.clickButton.right.isDown
    ) {
      this.hand.x = 500;
    }

    // choice of dress
    if (
      this.lexi.texture.key === "lexiIntro3" &&
      this.clickButton.space.isDown &&
      this.hand.x === 220
    ) {
      this.chooseClothes(
        this.hand.x,
        this.buttonLeft,
        this.cloths1,
        this.cloths2,
        this.cloths3,
        this.cloths4,
        "bag",
        "lexiDress1"
      );
    } else if (
      this.lexi.texture.key === "lexiIntro3" &&
      this.clickButton.space.isDown &&
      this.hand.x === 500
    ) {
      this.chooseClothes(
        this.hand.x,
        this.buttonRight,
        this.cloths2,
        this.cloths1,
        this.cloths3,
        this.cloths4,
        "bag",
        "lexiDress2"
      );
    }

    // choice of bag
    if (
      this.lexi.texture.key === "lexiDress1" &&
      this.clickButton.space.isDown &&
      this.hand.x === 220
    ) {
      this.chooseClothes(
        this.hand.x,
        this.buttonLeft,
        this.cloths3,
        this.cloths4,
        this.cloths5,
        this.cloths6,
        "accessory",
        "lexiBag1"
      );
    } else if (
      this.lexi.texture.key === "lexiDress1" &&
      this.clickButton.space.isDown &&
      this.hand.x === 500
    ) {
      this.chooseClothes(
        this.hand.x,
        this.buttonRight,
        this.cloths4,
        this.cloths3,
        this.cloths5,
        this.cloths6,
        "accessory",
        "lexiBag2"
      );
    } else if (
      this.lexi.texture.key === "lexiDress2" &&
      this.clickButton.space.isDown &&
      this.hand.x === 220
    ) {
      this.chooseClothes(
        this.hand.x,
        this.buttonLeft,
        this.cloths3,
        this.cloths4,
        this.cloths5,
        this.cloths7,
        "accessory",
        "lexiBag3"
      );
    } else if (
      this.lexi.texture.key === "lexiDress2" &&
      this.clickButton.space.isDown &&
      this.hand.x === 500
    ) {
      this.chooseClothes(
        this.hand.x,
        this.buttonRight,
        this.cloths4,
        this.cloths3,
        this.cloths5,
        this.cloths7,
        "accessory",
        "lexiBag4"
      );
    }

    // choice of accessory
    if (
      this.lexi.texture.key === "lexiBag1" &&
      this.clickButton.space.isDown &&
      this.hand.x === 220
    ) {
      this.chooseClothes(
        this.hand.x,
        this.buttonLeft,
        this.cloths5,
        this.cloths6,
        this.place1,
        this.place2,
        "place",
        "lexiAccessory1"
      );
    } else if (
      this.lexi.texture.key === "lexiBag1" &&
      this.clickButton.space.isDown &&
      this.hand.x === 500
    ) {
      this.chooseClothes(
        this.hand.x,
        this.buttonRight,
        this.cloths6,
        this.cloths5,
        this.place1,
        this.place2,
        "place",
        "lexiAccessory2"
      );
    } else if (
      this.lexi.texture.key === "lexiBag2" &&
      this.clickButton.space.isDown &&
      this.hand.x === 220
    ) {
      this.chooseClothes(
        this.hand.x,
        this.buttonLeft,
        this.cloths5,
        this.cloths6,
        this.place1,
        this.place2,
        "place",
        "lexiAccessory3"
      );
    } else if (
      this.lexi.texture.key === "lexiBag2" &&
      this.clickButton.space.isDown &&
      this.hand.x === 500
    ) {
      this.chooseClothes(
        this.hand.x,
        this.buttonRight,
        this.cloths6,
        this.cloths5,
        this.place1,
        this.place2,
        "place",
        "lexiAccessory4"
      );
    } else if (
      this.lexi.texture.key === "lexiBag3" &&
      this.clickButton.space.isDown &&
      this.hand.x === 220
    ) {
      this.chooseClothes(
        this.hand.x,
        this.buttonLeft,
        this.cloths5,
        this.cloths7,
        this.place1,
        this.place2,
        "place",
        "lexiAccessory5"
      );
    } else if (
      this.lexi.texture.key === "lexiBag3" &&
      this.clickButton.space.isDown &&
      this.hand.x === 500
    ) {
      this.chooseClothes(
        this.hand.x,
        this.buttonRight,
        this.cloths7,
        this.cloths5,
        this.place1,
        this.place2,
        "place",
        "lexiAccessory6"
      );
    } else if (
      this.lexi.texture.key === "lexiBag4" &&
      this.clickButton.space.isDown &&
      this.hand.x === 220
    ) {
      this.chooseClothes(
        this.hand.x,
        this.buttonLeft,
        this.cloths5,
        this.cloths7,
        this.place1,
        this.place2,
        "place",
        "lexiAccessory7"
      );
    } else if (
      this.lexi.texture.key === "lexiBag4" &&
      this.clickButton.space.isDown &&
      this.hand.x === 500
    ) {
      this.chooseClothes(
        this.hand.x,
        this.buttonRight,
        this.cloths7,
        this.cloths5,
        this.place1,
        this.place2,
        "place",
        "lexiAccessory8"
      );
    }

    // choice of place
    if (
      this.billetText.text === "Choose your place" &&
      this.clickButton.space.isDown &&
      this.hand.x === 220
    ) {
      this.choosePlace(
        this.hand.x,
        this.buttonLeft,
        this.place1,
        this.place2,
        "bg2"
      );
    } else if (
      this.billetText.text === "Choose your place" &&
      this.clickButton.space.isDown &&
      this.hand.x === 500
    ) {
      this.choosePlace(
        this.hand.x,
        this.buttonRight,
        this.place2,
        this.place1,
        "bg3"
      );
    }

    if (
      this.background.texture.key === "bg2" ||
      this.background.texture.key === "bg3"
    ) {
      this.amasingDelay += delta;

      if (this.lexi.x < 180) {
        this.lexi.x = this.amasingDelay - 300;
        this.paul.x = 900 - this.amasingDelay;
      }

      if (this.amasingDelay > 500 && this.amasingDelay < 800) {
        this.dialogAmasingPaul.setScale((this.amasingDelay - 500) / 640);
      }

      if (this.amasingDelay > 800 && this.amasingDelay < 900) {
        this.dialogAmasingPaul.setScale(0.5);
      }

      if (this.amasingDelay > 2000) {
        this.paul.setTexture("paul1");
      }

      if (this.amasingDelay > 2000 && this.amasingDelay < 2300) {
        this.dialogAmasingPaul.setScale(0.5 - (this.amasingDelay - 2000) / 640);
        this.playNow = this.add.image(300, 720, "playNow").setScale(0);
      }

      if (this.amasingDelay > 2300 && this.amasingDelay < 2600) {
        this.dialogAmasingPaul.destroy();
        this.playNow.setScale((this.amasingDelay - 2300) / 320);
      }
    }
  }

  chooseClothes(
    x,
    button,
    selectedClothes,
    alternativeClothes,
    nextClothes1,
    nextClothes2,
    nextChoose,
    lexiInClothes
  ) {
    this.hand.x = x;

    this.hand.setScale(0.9);
    button.setScale(0.9);
    this.hover.setScale(0.9);
    selectedClothes.setScale(0.9);

    setTimeout(() => {
      this.hand.setScale(1);
      button.setScale(1);
      this.hover.setScale(1);
      selectedClothes.setScale(1);
    }, 100);

    setTimeout(() => {
      this.billetText.text = `Choose your ${nextChoose}`;
      this.lexi.setTexture(lexiInClothes);

      selectedClothes.destroy();
      alternativeClothes.destroy();
      nextClothes1.setScale(1);
      nextClothes2.setScale(1);
    }, 200);
  }

  choosePlace(x, button, selectedClothes, alternativeClothes, place) {
    this.hand.x = x;

    this.hand.setScale(0.9);
    button.setScale(0.9);
    this.hover.setScale(0.9);
    selectedClothes.setScale(0.9);

    setTimeout(() => {
      this.hand.setScale(1);
      button.setScale(1);
      this.hover.setScale(1);
      selectedClothes.setScale(1);
    }, 100);

    setTimeout(() => {
      this.billet.destroy();
      this.billetText.destroy();
      this.buttonLeft.destroy();
      this.buttonRight.destroy();
      this.hover.destroy();
      this.hand.destroy();
      selectedClothes.destroy();
      alternativeClothes.destroy();
      this.lexi.x = -300;
      this.lexi.setScale(1);

      this.background.setTexture(place);
    }, 200);
  }
}
