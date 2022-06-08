export default class VerticalGame extends Phaser.Scene {
  constructor() {
    super("verticalGame");
    this.DELAY_TIME = 300;
    this.SCENE_DELAY = 3000;
    this.timeCount = 0;
    this.amasingDelay = 0;
  }

  preload() {
    this.load.path = "assets/";

    this.load.audio("bgSound", ["bgSound.wav", "bgSound.mp3"]);
    this.load.audio("clickSound", ["clickSound.wav", "clickSound.mp3"]);

    this.load.image("bg1", "bgV1.png");
    this.load.image("bg2", "bgV2.png");
    this.load.image("bg3", "bgV3.png");
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
    this.load.image("displayBoard", "displayBoard.png");
    this.load.image("progress0", "progress0.png");
    this.load.image("progress1", "progress1.png");
    this.load.image("progress2", "progress2.png");
    this.load.image("progress3", "progress3.png");
    this.load.image("button", "button.png");
    this.load.image("hover", "hover.png");
    this.load.image("hand", "hand.png");
    this.load.image("clothes1", "clothes1.png");
    this.load.image("clothes2", "clothes2.png");
    this.load.image("clothes3", "clothes3.png");
    this.load.image("clothes4", "clothes4.png");
    this.load.image("clothes5", "clothes5.png");
    this.load.image("clothes6", "clothes6.png");
    this.load.image("clothes7", "clothes7.png");
    this.load.image("place1", "place1.png");
    this.load.image("place2", "place2.png");
    this.load.image("playNow", "playNow.png");

    // plugin of click for keyboard on buttons
    this.keyLeft = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.LEFT
    );
    this.keyRight = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT
    );
  }

  create() {
    // background music
    this.sound.add("bgSound", { loop: true }).play();
    // background
    this.background = this.add.image(300, 450, "bg1");
    // overlay
    this.graphics = this.add.graphics().fillStyle(0x000000, 0.7);
    this.graphics.fillRect(0, 0, 600, 900);
    // display board
    this.displayBoard = this.add.image(300, -40, "displayBoard").setScale(0.5);
    this.displayBoardText = this.add.text(0, -45, "Choose your dress", {
      fontSize: "32px",
      fill: "#fff",
    });
    this.displayBoardText.x = (600 - this.displayBoardText.width) / 2;
    // progress
    this.progress = this.add.image(300, -10, "progress0").setScale(0.9);

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

      // sound of button
      this.clickSound = this.sound.add("clickSound");

      // clothes & places
      this.clothes1 = this.add.image(160, 720, "clothes1").setScale(0);
      this.clothes2 = this.add.image(440, 720, "clothes2").setScale(0);
      this.clothes3 = this.add.image(160, 720, "clothes3").setScale(0);
      this.clothes4 = this.add.image(440, 720, "clothes4").setScale(0);
      this.clothes5 = this.add.image(160, 720, "clothes5").setScale(0);
      this.clothes6 = this.add.image(440, 720, "clothes6").setScale(0);
      this.clothes7 = this.add.image(440, 720, "clothes7").setScale(0);
      this.place1 = this.add.image(160, 720, "place1").setScale(0);
      this.place2 = this.add.image(440, 720, "place2").setScale(0);

      // hint pointer
      this.hand = this.add.image(220, 1200, "hand");

      // link to game source
      this.playNow = this.add.image(300, 800, "playNow").setScale(0);

      // function of click or tuch on buttons or keyboard
      const clickFunction = (x) => {
        // choice of dress
        if (this.lexi.texture.key === "lexiIntro3" && x < 300) {
          this.chooseClothes(
            x,
            this.buttonLeft,
            this.clothes1,
            this.clothes2,
            this.clothes3,
            this.clothes4,
            "bag",
            "progress1",
            "lexiDress1"
          );
        } else if (this.lexi.texture.key === "lexiIntro3" && x > 300) {
          this.chooseClothes(
            x,
            this.buttonRight,
            this.clothes2,
            this.clothes1,
            this.clothes3,
            this.clothes4,
            "bag",
            "progress1",
            "lexiDress2"
          );
        }

        // choice of bag
        if (this.lexi.texture.key === "lexiDress1" && x < 300) {
          this.chooseClothes(
            x,
            this.buttonLeft,
            this.clothes3,
            this.clothes4,
            this.clothes5,
            this.clothes6,
            "accessory",
            "progress2",
            "lexiBag1"
          );
        } else if (this.lexi.texture.key === "lexiDress1" && x > 300) {
          this.chooseClothes(
            x,
            this.buttonRight,
            this.clothes4,
            this.clothes3,
            this.clothes5,
            this.clothes6,
            "accessory",
            "progress2",
            "lexiBag2"
          );
        } else if (this.lexi.texture.key === "lexiDress2" && x < 300) {
          this.chooseClothes(
            x,
            this.buttonLeft,
            this.clothes3,
            this.clothes4,
            this.clothes5,
            this.clothes7,
            "accessory",
            "progress2",
            "lexiBag3"
          );
        } else if (this.lexi.texture.key === "lexiDress2" && x > 300) {
          this.chooseClothes(
            x,
            this.buttonRight,
            this.clothes4,
            this.clothes3,
            this.clothes5,
            this.clothes7,
            "accessory",
            "progress2",
            "lexiBag4"
          );
        }

        // choice of accessory
        if (this.lexi.texture.key === "lexiBag1" && x < 300) {
          this.chooseClothes(
            x,
            this.buttonLeft,
            this.clothes5,
            this.clothes6,
            this.place1,
            this.place2,
            "place",
            "progress3",
            "lexiAccessory1"
          );
        } else if (this.lexi.texture.key === "lexiBag1" && x > 300) {
          this.chooseClothes(
            x,
            this.buttonRight,
            this.clothes6,
            this.clothes5,
            this.place1,
            this.place2,
            "place",
            "progress3",
            "lexiAccessory2"
          );
        } else if (this.lexi.texture.key === "lexiBag2" && x < 300) {
          this.chooseClothes(
            x,
            this.buttonLeft,
            this.clothes5,
            this.clothes6,
            this.place1,
            this.place2,
            "place",
            "progress3",
            "lexiAccessory3"
          );
        } else if (this.lexi.texture.key === "lexiBag2" && x > 300) {
          this.chooseClothes(
            x,
            this.buttonRight,
            this.clothes6,
            this.clothes5,
            this.place1,
            this.place2,
            "place",
            "progress3",
            "lexiAccessory4"
          );
        } else if (this.lexi.texture.key === "lexiBag3" && x < 300) {
          this.chooseClothes(
            x,
            this.buttonLeft,
            this.clothes5,
            this.clothes7,
            this.place1,
            this.place2,
            "place",
            "progress3",
            "lexiAccessory5"
          );
        } else if (this.lexi.texture.key === "lexiBag3" && x > 300) {
          this.chooseClothes(
            x,
            this.buttonRight,
            this.clothes7,
            this.clothes5,
            this.place1,
            this.place2,
            "place",
            "progress3",
            "lexiAccessory6"
          );
        } else if (this.lexi.texture.key === "lexiBag4" && x < 300) {
          this.chooseClothes(
            x,
            this.buttonLeft,
            this.clothes5,
            this.clothes7,
            this.place1,
            this.place2,
            "place",
            "progress3",
            "lexiAccessory7"
          );
        } else if (this.lexi.texture.key === "lexiBag4" && x > 300) {
          this.chooseClothes(
            x,
            this.buttonRight,
            this.clothes7,
            this.clothes5,
            this.place1,
            this.place2,
            "place",
            "progress3",
            "lexiAccessory8"
          );
        }

        // choice of place
        if (this.displayBoardText.text === "Choose your place" && x < 300) {
          this.choosePlace(x, this.buttonLeft, this.place1, this.place2, "bg2");
        } else if (
          this.displayBoardText.text === "Choose your place" &&
          x > 300
        ) {
          this.choosePlace(
            x,
            this.buttonRight,
            this.place2,
            this.place1,
            "bg3"
          );
        }
      };

      this.buttonLeft.on("pointerdown", () => clickFunction(220));
      this.buttonRight.on("pointerdown", () => clickFunction(500));

      this.keySpace = this.input.keyboard.on("keydown-SPACE", () => {
        this.hand.x < 300 ? clickFunction(220) : clickFunction(500);
      });
      this.keyEnter = this.input.keyboard.on("keydown-ENTER", () =>
        this.hand.x < 300 ? clickFunction(220) : clickFunction(500)
      );
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

      this.displayBoard.y = (this.timeCount - this.SCENE_DELAY * 2) / 7.5;
      this.displayBoardText.y =
        (this.timeCount - this.SCENE_DELAY * 2) / 7.5 - 15;
      this.progress.y = (this.timeCount - this.SCENE_DELAY * 2) / 7.5 + 35;

      this.buttonLeft.setScale(
        (this.timeCount - this.SCENE_DELAY * 2) / this.DELAY_TIME
      );
      this.clothes1.setScale(
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
      this.clothes2.setScale(
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
      this.hand.x < 280
    ) {
      this.hover.x = 160;
    } else if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 2 &&
      this.hand.x > 320
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
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 560 &&
      this.keyLeft.isDown
    ) {
      this.hand.x = 220;
    } else if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 560 &&
      this.keyRight.isDown
    ) {
      this.hand.x = 500;
    }

    if (
      this.background.texture.key === "bg2" ||
      this.background.texture.key === "bg3"
    ) {
      this.amasingDelay += delta;
      // TODO removeAllListeners
      this.keySpace.removeAllListeners("keydown-SPACE");
      this.keyEnter.removeAllListeners("keydown-ENTER");

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
      }

      if (this.amasingDelay > 2300 && this.amasingDelay < 2600) {
        this.dialogAmasingPaul.destroy();
        this.playNow.setScale((this.amasingDelay - 2300) / 320);
      }

      if (this.playNow._scaleX > 0) {
        // TODO link to game source
        this.input.keyboard.on("keydown-SPACE", () =>
          console.log("Link to game source")
        );
        this.input.keyboard.on("keydown-ENTER", () =>
          console.log("Link to game source")
        );
      }
    }

    // TODO function hint pointer for idle 2000 ms
  }

  chooseClothes(
    x,
    button,
    selectedClothes,
    alternativeClothes,
    nextClothes1,
    nextClothes2,
    nextChoose,
    progress,
    lexiInClothes
  ) {
    this.hand.x = x;

    this.clickSound.play();

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
      this.displayBoardText.text = `Choose your ${nextChoose}`;
      this.displayBoardText.x = (600 - this.displayBoardText.width) / 2;
      this.progress.setTexture(progress);
      // TODO animation of magical change of clothes
      this.lexi.setTexture(lexiInClothes);

      selectedClothes.destroy();
      alternativeClothes.destroy();
      nextClothes1.setScale(1);
      nextClothes2.setScale(1);
    }, 200);
  }

  choosePlace(x, button, selectedClothes, alternativeClothes, place) {
    this.hand.x = x;

    this.clickSound.play();

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
      this.displayBoard.destroy();
      this.displayBoardText.destroy();
      this.progress.destroy();
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

// TODO run server on GitHub or Netlify
