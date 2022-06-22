export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
    this.DELAY_TIME = 300;
    this.SCENE_DELAY = 3000;
    this.timeCount = 0;
    this.amasingDelay = 0;
    this.idleTimeCount = 0;
    this.actionTime = 0;
    this.tapController = 0;
  }

  preload() {
    this.load.path = "assets/";

    this.load.audio("bgSound", ["bgSound.wav", "bgSound.mp3"]);
    this.load.audio("clickSound", ["clickSound.wav", "clickSound.mp3"]);

    this.load.image("bgH1", "bgH1.png");
    this.load.image("bgH2", "bgH2.png");
    this.load.image("bgH3", "bgH3.png");
    this.load.image("bgV1", "bgV1.png");
    this.load.image("bgV2", "bgV2.png");
    this.load.image("bgV3", "bgV3.png");
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
    this.load.image("star", "star.png");
    this.load.image("leaf", "leaf.png");

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
    this.background = this.add.image(
      window.innerWidth > window.innerHeight ? 540 : 300,
      450,
      "bgH1"
    );

    // overlay
    this.graphics = this.add.graphics().fillStyle(0x000000, 0.7);
    this.graphics.fillRect(
      0,
      0,
      window.innerWidth > window.innerHeight ? 1080 : 600,
      900
    );

    // display board
    this.displayBoard = this.add
      .image(
        window.innerWidth > window.innerHeight ? 540 : 300,
        -40,
        "displayBoard"
      )
      .setScale(0.5);
    this.displayBoardText = this.add.text(0, -45, "Choose your dress", {
      fontSize: "32px",
      fill: "#fff",
    });
    this.displayBoardText.x =
      ((window.innerWidth > window.innerHeight ? 1080 : 600) -
        this.displayBoardText.width) /
      2;

    // progress
    this.progress = this.add
      .image(
        window.innerWidth > window.innerHeight ? 540 : 300,
        -10,
        "progress0"
      )
      .setScale(0.9);

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
    this.paul = this.add
      .sprite(window.innerWidth > window.innerHeight ? 540 : 300, 465, "paul1")
      .play("introPaul");
    this.lexi = this.add.sprite(-300, 465, "lexiIntro1").play("introLexi");

    // hero dialogues
    this.dialogIntroPaul = this.add
      .image(
        window.innerWidth > window.innerHeight ? 540 : 300,
        450,
        "dialogIntroPaul"
      )
      .setScale(0);

    this.dialogIntroLexi = this.add
      .image(
        window.innerWidth > window.innerHeight ? 540 : 300,
        450,
        "dialogIntroLexi"
      )
      .setScale(0);

    this.dialogAmasingPaul = this.add
      .image(
        window.innerWidth > window.innerHeight ? 540 : 300,
        450,
        "dialogAmasingPaul"
      )
      .setScale(0);

    // buttons
    this.buttonLeft = this.add
      .image(window.innerWidth > window.innerHeight ? 400 : 160, 720, "button")
      .setScale(0);
    this.buttonRight = this.add
      .image(window.innerWidth > window.innerHeight ? 680 : 440, 720, "button")
      .setScale(0);
    this.buttonLeft.setInteractive();
    this.buttonRight.setInteractive();

    // hover of button
    this.hover = this.add
      .image(window.innerWidth > window.innerHeight ? 400 : 160, 720, "hover")
      .setScale(0);

    // sound of button
    this.clickSound = this.sound.add("clickSound");

    // clothes & places
    this.clothes1 = this.add
      .image(
        window.innerWidth > window.innerHeight ? 400 : 160,
        720,
        "clothes1"
      )
      .setScale(0);
    this.clothes2 = this.add
      .image(
        window.innerWidth > window.innerHeight ? 680 : 440,
        720,
        "clothes2"
      )
      .setScale(0);
    this.clothes3 = this.add
      .image(
        window.innerWidth > window.innerHeight ? 400 : 160,
        720,
        "clothes3"
      )
      .setScale(0);
    this.clothes4 = this.add
      .image(
        window.innerWidth > window.innerHeight ? 680 : 440,
        720,
        "clothes4"
      )
      .setScale(0);
    this.clothes5 = this.add
      .image(
        window.innerWidth > window.innerHeight ? 400 : 160,
        720,
        "clothes5"
      )
      .setScale(0);
    this.clothes6 = this.add
      .image(
        window.innerWidth > window.innerHeight ? 680 : 440,
        720,
        "clothes6"
      )
      .setScale(0);
    this.clothes7 = this.add
      .image(
        window.innerWidth > window.innerHeight ? 680 : 440,
        720,
        "clothes7"
      )
      .setScale(0);
    this.place1 = this.add
      .image(window.innerWidth > window.innerHeight ? 400 : 160, 720, "place1")
      .setScale(0);
    this.place2 = this.add
      .image(window.innerWidth > window.innerHeight ? 680 : 440, 720, "place2")
      .setScale(0);

    // hint pointer
    this.hand = this.add.image(
      window.innerWidth > window.innerHeight ? 460 : 220,
      1200,
      "hand"
    );

    // link to game source
    this.playNow = this.add
      .image(window.innerWidth > window.innerHeight ? 540 : 300, 800, "playNow")
      .setScale(0);
    this.playNow.setInteractive();
    this.playNow.on("pointerdown", this.goLink, this);
  }

  update(_, delta) {
    this.timeCount += delta;
    this.idleTimeCount += Math.round(delta / 16);

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
      this.paul.x =
        this.DELAY_TIME * 2 +
        this.timeCount -
        this.SCENE_DELAY +
        (window.innerWidth > window.innerHeight ? 540 : 0);
      this.lexi.x =
        this.timeCount -
        this.SCENE_DELAY +
        (window.innerWidth > window.innerHeight ? 240 : 0);
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

      // function of click or tuch on buttons or keyboard
      const clickFunction = (x) => {
        // choice of dress
        if (
          this.lexi.texture.key === "lexiIntro3" &&
          x < (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
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
        } else if (
          this.lexi.texture.key === "lexiIntro3" &&
          x > (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
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
        if (
          this.lexi.texture.key === "lexiDress1" &&
          x < (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
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
        } else if (
          this.lexi.texture.key === "lexiDress1" &&
          x > (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
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
        } else if (
          this.lexi.texture.key === "lexiDress2" &&
          x < (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
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
        } else if (
          this.lexi.texture.key === "lexiDress2" &&
          x > (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
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
        if (
          this.lexi.texture.key === "lexiBag1" &&
          x < (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
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
        } else if (
          this.lexi.texture.key === "lexiBag1" &&
          x > (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
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
        } else if (
          this.lexi.texture.key === "lexiBag2" &&
          x < (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
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
        } else if (
          this.lexi.texture.key === "lexiBag2" &&
          x > (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
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
        } else if (
          this.lexi.texture.key === "lexiBag3" &&
          x < (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
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
        } else if (
          this.lexi.texture.key === "lexiBag3" &&
          x > (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
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
        } else if (
          this.lexi.texture.key === "lexiBag4" &&
          x < (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
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
        } else if (
          this.lexi.texture.key === "lexiBag4" &&
          x > (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
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
        if (
          this.displayBoardText.text === "Choose your place" &&
          x < (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
          this.choosePlace(
            x,
            this.buttonLeft,
            this.place1,
            this.place2,
            window.innerWidth > window.innerHeight ? "bgH2" : "bgV2"
          );
        } else if (
          this.displayBoardText.text === "Choose your place" &&
          x > (window.innerWidth > window.innerHeight ? 540 : 300)
        ) {
          this.choosePlace(
            x,
            this.buttonRight,
            this.place2,
            this.place1,
            window.innerWidth > window.innerHeight ? "bgH3" : "bgV3"
          );
        }
      };

      this.buttonLeft.on("pointerdown", () =>
        clickFunction(window.innerWidth > window.innerHeight ? 460 : 220)
      );
      this.buttonRight.on("pointerdown", () =>
        clickFunction(window.innerWidth > window.innerHeight ? 740 : 500)
      );

      this.keySpace = this.input.keyboard.on("keydown-SPACE", () => {
        this.hand.x < (window.innerWidth > window.innerHeight ? 540 : 300)
          ? clickFunction(window.innerWidth > window.innerHeight ? 460 : 220)
          : clickFunction(window.innerWidth > window.innerHeight ? 740 : 500);
      });
      this.keyEnter = this.input.keyboard.on("keydown-ENTER", () =>
        this.hand.x < (window.innerWidth > window.innerHeight ? 540 : 300)
          ? clickFunction(window.innerWidth > window.innerHeight ? 460 : 220)
          : clickFunction(window.innerWidth > window.innerHeight ? 740 : 500)
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
      this.hand.x < (window.innerWidth > window.innerHeight ? 520 : 280)
    ) {
      this.hover.x = window.innerWidth > window.innerHeight ? 400 : 160;
    } else if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 2 &&
      this.hand.x > (window.innerWidth > window.innerHeight ? 560 : 320)
    ) {
      this.hover.x = window.innerWidth > window.innerHeight ? 680 : 440;
    }

    // time 7200...7400
    if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 &&
      this.timeCount < this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 200
    ) {
      this.hand.x =
        window.innerWidth > window.innerHeight
          ? 240 + (this.timeCount - this.SCENE_DELAY * 2 - this.DELAY_TIME * 3)
          : this.timeCount - this.SCENE_DELAY * 2 - this.DELAY_TIME * 3;
    }

    // time 7500...7760
    if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 300 &&
      this.timeCount < this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 560
    ) {
      this.hand.x =
        (window.innerWidth > window.innerHeight ? 720 : 480) +
        (this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 280 - this.timeCount);
    }

    // time > 8000
    if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 800 &&
      this.keyLeft.isDown
    ) {
      setTimeout(() => {
        this.hand.x = window.innerWidth > window.innerHeight ? 460 : 220;
      }, 50);
    } else if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 800 &&
      this.keyRight.isDown
    ) {
      setTimeout(() => {
        this.hand.x = window.innerWidth > window.innerHeight ? 740 : 500;
      }, 50);
    }

    if (
      this.background.texture.key === "bgH2" ||
      this.background.texture.key === "bgH3" ||
      this.background.texture.key === "bgV2" ||
      this.background.texture.key === "bgV3"
    ) {
      this.amasingDelay += delta;
      this.keySpace.removeAllListeners();

      if (this.lexi.x < (window.innerWidth > window.innerHeight ? 400 : 180)) {
        this.lexi.x =
          this.amasingDelay -
          (window.innerWidth > window.innerHeight ? 540 : 300);
        this.paul.x =
          (window.innerWidth > window.innerHeight ? 1600 : 900) -
          this.amasingDelay;
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

      if (this.amasingDelay > 2600 && this.amasingDelay < 2650) {
        this.playNow.setScale(1);
      }

      if (this.playNow._scaleX > 0) {
        this.input.keyboard.on("keydown-SPACE", this.goLink, this);
        this.input.keyboard.on("keydown-ENTER", this.goLink, this);
      }
    }

    // function hint pointer for idle 2000 ms
    if (
      this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 800 &&
      this.actionTime > 2000 &&
      this.idleTimeCount % 240 === 0
    ) {
      this.actionTime = 0;
    }

    if (this.timeCount > this.SCENE_DELAY * 2 + this.DELAY_TIME * 4 + 800) {
      this.callToAction(delta);
    }
  }

  callToAction(delta) {
    this.actionTime += delta / 1.714;

    if (this.idleTimeCount % 240 < 30) {
      this.hand.x =
        (window.innerWidth > window.innerHeight ? 460 : 220) + this.actionTime;
    }

    if (this.idleTimeCount % 240 > 30 && this.idleTimeCount % 240 < 60) {
      this.hand.x =
        (window.innerWidth > window.innerHeight ? 740 : 500) -
        this.actionTime +
        280;
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
      this.displayBoardText.x =
        ((window.innerWidth > window.innerHeight ? 1080 : 600) -
          this.displayBoardText.width) /
        2;
      this.progress.setTexture(progress);
      this.animateMagicalChange();
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
      this.animateFallingLeaves();
    }, 200);
  }

  // function of animation of magical change of clothes
  animateMagicalChange() {
    for (let i = 0; i < 7; ++i) {
      this.leafs = this.physics.add.group({
        key: "star",
        repeat: 7,
        setXY: {
          x: window.innerWidth > window.innerHeight ? 540 : 300,
          y: 450,
        },
      });

      this.leafs.children.iterate(function (child) {
        child.setVelocityY(Phaser.Math.Between(-800, 800));
        child.setVelocityX(Phaser.Math.Between(-800, 800));
        child.setScale(Phaser.Math.FloatBetween(0.1, 1.7));
        child.angle = Phaser.Math.Between(-180, 180);
      });
    }
  }

  animateFallingLeaves() {
    for (let i = 0; i < 7; ++i) {
      this.leafs = this.physics.add.group({
        key: "leaf",
        repeat: 7,
        setXY: {
          x: Phaser.Math.Between(
            window.innerWidth > window.innerHeight ? 500 : 200,
            window.innerWidth > window.innerHeight ? 580 : 400
          ),
          y: -100,
        },
      });

      this.leafs.children.iterate(function (child) {
        child.setVelocityY(Phaser.Math.Between(100, 300));
        child.setVelocityX(
          Phaser.Math.Between(
            window.innerWidth > window.innerHeight ? -400 : -200,
            window.innerWidth > window.innerHeight ? 400 : 200
          )
        );
        child.setScale(Phaser.Math.FloatBetween(0.2, 0.7));
        child.angle = Phaser.Math.Between(-180, 180);
      });
    }
  }

  goLink() {
    this.playNow.setScale(0.9);

    setTimeout(() => {
      this.playNow.setScale(1);
      window.location = "https://apps.apple.com/us/app/id1491717191";
    }, 200);
  }
}
