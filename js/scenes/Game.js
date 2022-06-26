/** ==================== Пояснення та запитання до фідбеку ====================
 *
 * @feedback - Дві окремі гри по факту для вертикального і горизонтального
 * екрану.
 *
 * @explanation - Так, це на перший погляд дивне рішення, але я виходив з тих
 * міркувань, що це теоретично насправді більш економічне рішення, тому що
 * фактично задіюється лише одна з ігор й виконується розрахунок полотна canvas
 * лише один раз. В протилежному випадку для задавання позицій графічних
 * елементів доводиться вираховувати ці позиції кожного разу - це кілька
 * десятків однакових розрахунків.
 * Але я спробував виправити дублювання коду і задіяв лише один клас Game.
 *
 * @question - Може є якесь простіше канонічне рішення, яке визначено
 * документацією Phaser?
 *
 * ----------------------------------------------------------------------------
 *
 * @feedback - Дуже дивно зроблено інтро, це погано привʼязувати так багато дій
 * до часу.
 * @feedback - Краще передавати колбек який спрацює після завершення дії. А не
 * робити if в update (це дуже погано ще й для перфомансу адже це багато
 * перевірок на кожен ререндер) + сам метод update аж на 400 рядків.
 * @feedback - Краще не робити великі аномні функції, а винести їх в окремі
 * методи і не юзати setTimeout, краще time.delayedCall або передавати
 * onComplete в tween.
 *
 * @explanation - Іншого рішення таймінгу анімації інтро на початковому етапі
 * я не знав, тому й довелося шукати мінімально робоче рішення за допомогою
 * методу життєвого циклу update(). За вашою підказкою розібрався з tween,
 * onComplete та time.delayedCall, та виправив код на більш логічний з точним
 * послідовним визначенням часових проміжків. Дякую за підказку!
 *
 * ----------------------------------------------------------------------------
 *
 * @feedback - Також персонаж вирізаний для кожного вибору окремо, це поганий
 * спосіб, бо місце дуже багато. Краще просто вирізати окремо тіло, обличчя,
 * одяг, сумочки, окуляри. І наприклад зробити для них свій контейнер і туди
 * додавати, щоб вони завжди було в однаковій позиції відносно себе.
 *
 * @explanation - Цілком логічне зауваження. Саме таким чином я спочатку і
 * планував конструювати накладання асетів один на одного. Але за створення та
 * надання асетів, як я розумію, відповідає дизайнер. В наданому макеті Figma
 * були лише цільні зразки персонажів - для кожного геймплею окремо. Навіть не
 * має двох ключових зразків - їх довелося самому "ліпити" з підручних зразків.
 * Навіть якщо в обов'язки розробника входить підготовка асетів, то не має
 * матеріалу з якого мінімально коректно можливо вирізати окремі деталі тіла
 * персонажів, щоб далі у відповідному порядку накладати елементи тіла та
 * одягу.
 * Я цю проблему відразу зазначив рекрутеру Валерії, але вона дослівно
 * відповіла: "Будь-яка реалізація буде Ок. Додаткові матеріали можна брати на
 * власний розсуд. Головне гарне тех. виконання".
 * Тому готовий виконати завдання з окремими контейнерами для окремих емоцій,
 * одягу та аксесуарів, але для цього потрібні відповідні асети, або матеріали,
 * з яких можливо вирізати асети без візуальних артефактів та втрат.
 *
 * ----------------------------------------------------------------------------
 *
 * @feedback - Трохи важкувато читається код, все в одному файлі, великі
 * анонімні функції, функції які приймають по 6-7 значень.
 *
 * @explanation - Про великі анонімні функції не зовсім зрозумів, але
 * сподіваюсь, що переніс функціонал з методу update() в окремі методи, й цим
 * вирішив вказану проблему.
 * Щодо функцій, які приймають по 6-7 значень. Іншого, більш доцільного методу
 * чи способу я не бачу. Якщо зменшити кількість аргументів функцій, то
 * доведеться збільшити кількість самих цих функцій, які будуть подібні одна до
 * одної, і по суті дублювати одна одну. Але можливо я, як і у випадку з моїм
 * дивним інтро, чогось не бачу...
 *
 * @question - Напевно досвіду не хватає, щоб коректно розділити файл з класом
 * Game на частини, можете підказати як це зробити? Звичайно, якщо це ще має
 * сенс.
 *
 * ----------------------------------------------------------------------------
 *
 * @specification - Техзавдання виконував наскільки можливо якісно, ​​але
 * враховуючи дещо різні вимоги у GDD TZ, у референсах та у макеті Фігми,
 * виконав щось середнє між ними – наскільки дозволили отримані асети, і ті
 * текстури, що підійшли з інтернету.
 * Враховуючи, що це моє перше знайомство і мій перший досвід роботи з Phaser,
 * деякий функціонал спочатку робив надмірним для зручнішого вивчення та
 * розуміння фреймворку, це, в першу чергу, торкнулося додаткової можливості
 * навігації по геймплею як тапами, так і за допомогою миші та клавіатури
 * ("<", ">", "Space", "Enter"). Прибирати цю можливість вже не став, через це
 * дещо відрізняється робота хінтпоінтера, проте якщо це все ж таки не
 * відповідає техзавданню - готовий відкоригувати.
 * Ця реклама адаптована і до горизонтальної, і до вертикальної орієнтації
 * екрану з відповідним зумом, але особливості різних браузерів не дозволили
 * мені повноцінно реалізувати кросбраузрність в'юпорту. На більш сучасних
 * мобільних браузерах реалізується коректніше розташування полотна фреймворку,
 * на більш давніх версіях полотно може бути погано відцентроване і знаходиться
 * впритул до вікна браузера з однієї зі сторін. Це те, над чим мені доведеться
 * ще працювати.
 *
 * @gratitude - Буду дуже вдячний за відповіді та корисні підказки!
 *
 * ========================================================================= */

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
    this.horizontalScreen = window.innerWidth > window.innerHeight;
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

    this.load.spritesheet("firework", "firework.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

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
      this.horizontalScreen ? 540 : 300,
      450,
      "bgH1"
    );

    // overlay
    this.graphics = this.add.graphics().fillStyle(0x000000, 0.7);
    this.graphics.fillRect(0, 0, this.horizontalScreen ? 1080 : 600, 900);

    // display board
    this.displayBoard = this.add
      .image(this.horizontalScreen ? 540 : 300, -40, "displayBoard")
      .setScale(0.5);
    this.displayBoardText = this.add.text(0, -45, "Choose your dress", {
      fontSize: "32px",
      fill: "#fff",
    });
    this.displayBoardText.x =
      ((this.horizontalScreen ? 1080 : 600) - this.displayBoardText.width) / 2;

    // display progress
    this.displayProgress = this.add
      .image(this.horizontalScreen ? 540 : 300, -10, "progress0")
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

    // creating fireworks animation
    this.anims.create({
      key: "moveFireworks",
      frames: this.anims.generateFrameNumbers("firework", {
        start: 0,
        end: 16,
      }),
      frameRate: 20,
      repeat: 0,
    });

    // adding animation heroes
    this.paul = this.add
      .sprite(this.horizontalScreen ? 540 : 300, 465, "paul1")
      .play("introPaul");
    this.lexi = this.add.sprite(-300, 465, "lexiIntro1").play("introLexi");

    // hero dialogues
    this.dialogIntroPaul = this.add
      .image(this.horizontalScreen ? 540 : 300, 450, "dialogIntroPaul")
      .setScale(0);

    this.dialogIntroLexi = this.add
      .image(this.horizontalScreen ? 540 : 300, 450, "dialogIntroLexi")
      .setScale(0);

    this.dialogAmasingPaul = this.add
      .image(this.horizontalScreen ? 540 : 300, 450, "dialogAmasingPaul")
      .setScale(0);

    // buttons
    this.buttonLeft = this.add
      .image(this.horizontalScreen ? 400 : 160, 720, "button")
      .setScale(0);
    this.buttonRight = this.add
      .image(this.horizontalScreen ? 680 : 440, 720, "button")
      .setScale(0);
    this.buttonLeft.setInteractive();
    this.buttonRight.setInteractive();

    // hover of button
    this.hover = this.add
      .image(this.horizontalScreen ? 400 : 160, 720, "hover")
      .setScale(0);

    // sound of button
    this.clickSound = this.sound.add("clickSound");

    // clothes & places
    this.clothes1 = this.add
      .image(this.horizontalScreen ? 400 : 160, 720, "clothes1")
      .setScale(0);
    this.clothes2 = this.add
      .image(this.horizontalScreen ? 680 : 440, 720, "clothes2")
      .setScale(0);
    this.clothes3 = this.add
      .image(this.horizontalScreen ? 400 : 160, 720, "clothes3")
      .setScale(0);
    this.clothes4 = this.add
      .image(this.horizontalScreen ? 680 : 440, 720, "clothes4")
      .setScale(0);
    this.clothes5 = this.add
      .image(this.horizontalScreen ? 400 : 160, 720, "clothes5")
      .setScale(0);
    this.clothes6 = this.add
      .image(this.horizontalScreen ? 680 : 440, 720, "clothes6")
      .setScale(0);
    this.clothes7 = this.add
      .image(this.horizontalScreen ? 680 : 440, 720, "clothes7")
      .setScale(0);
    this.place1 = this.add
      .image(this.horizontalScreen ? 400 : 160, 720, "place1")
      .setScale(0);
    this.place2 = this.add
      .image(this.horizontalScreen ? 680 : 440, 720, "place2")
      .setScale(0);

    // hint pointer
    this.hand = this.add.image(this.horizontalScreen ? 460 : 220, 1200, "hand");

    // link to game source
    this.playNow = this.add
      .image(this.horizontalScreen ? 540 : 300, 800, "playNow")
      .setScale(0);
    this.playNow.setInteractive();
    this.playNow.on("pointerdown", this.goLink, this);

    this.tweens.add({
      targets: this.dialogIntroPaul,
      scaleX: 0.5,
      scaleY: 0.5,
      ease: "Power1",
      duration: 300,
      onComplete: () => this.changeOfCharacters(),
    });
  }

  changeOfCharacters() {
    this.tweens.add({
      targets: this.dialogIntroPaul,
      scaleX: 0,
      scaleY: 0,
      ease: "Power1",
      delay: 2700,
      duration: 300,
      onComplete: () => this.changeOfDialogs(),
    });

    this.tweens.add({
      targets: this.paul,
      x: this.horizontalScreen ? 1380 : 900,
      ease: "Power1",
      delay: 2700,
      duration: 600,
    });

    this.tweens.add({
      targets: this.lexi,
      x: this.horizontalScreen ? 540 : 300,
      ease: "Power1",
      delay: 2700,
      duration: 600,
    });
  }

  changeOfDialogs() {
    this.dialogIntroPaul.destroy();

    this.tweens.add({
      targets: this.dialogIntroLexi,
      scaleX: 0.5,
      scaleY: 0.5,
      ease: "Power1",
      duration: 300,
      onComplete: () => this.gamePlay(),
    });
  }

  gamePlay() {
    this.tweens.add({
      targets: this.dialogIntroLexi,
      scaleX: 0,
      scaleY: 0,
      ease: "Power1",
      delay: 2100,
      duration: 300,
      onComplete: () => {
        this.dialogIntroLexi.destroy();
        this.lexi.active = false;
        this.lexi.setTexture("lexiIntro3");

        this.initializeButton();
        this.initializeChoice1();
      },
    });
  }

  initializeButton() {
    this.buttonLeft.on("pointerdown", () => this.clickFunctionLeft());
    this.buttonRight.on("pointerdown", () => this.clickFunctionRight());

    this.keySpace = this.input.keyboard.on("keydown-SPACE", () => {
      this.hand.x < (this.horizontalScreen ? 540 : 300)
        ? this.clickFunctionLeft()
        : this.clickFunctionRight();
    });
    this.keyEnter = this.input.keyboard.on("keydown-ENTER", () =>
      this.hand.x < (this.horizontalScreen ? 540 : 300)
        ? this.clickFunctionLeft()
        : this.clickFunctionRight()
    );
  }

  // functions of click or tuch on buttons or keyboard
  clickFunctionLeft() {
    const key = this.lexi.texture.key;

    switch (key) {
      // choice of dress
      case "lexiIntro3":
        this.chooseClothes(
          this.horizontalScreen ? 460 : 220,
          this.buttonLeft,
          this.clothes1,
          this.clothes2,
          this.clothes3,
          this.clothes4,
          "bag",
          "progress1",
          "lexiDress1"
        );
        break;

      // choice of bag
      case "lexiDress1":
        this.chooseClothes(
          this.horizontalScreen ? 460 : 220,
          this.buttonLeft,
          this.clothes3,
          this.clothes4,
          this.clothes5,
          this.clothes6,
          "accessory",
          "progress2",
          "lexiBag1"
        );
        break;

      case "lexiDress2":
        this.chooseClothes(
          this.horizontalScreen ? 460 : 220,
          this.buttonLeft,
          this.clothes3,
          this.clothes4,
          this.clothes5,
          this.clothes7,
          "accessory",
          "progress2",
          "lexiBag3"
        );
        break;

      // choice of accessory
      case "lexiBag1":
        this.chooseClothes(
          this.horizontalScreen ? 460 : 220,
          this.buttonLeft,
          this.clothes5,
          this.clothes6,
          this.place1,
          this.place2,
          "place",
          "progress3",
          "lexiAccessory1"
        );
        break;

      case "lexiBag2":
        this.chooseClothes(
          this.horizontalScreen ? 460 : 220,
          this.buttonLeft,
          this.clothes5,
          this.clothes6,
          this.place1,
          this.place2,
          "place",
          "progress3",
          "lexiAccessory3"
        );
        break;

      case "lexiBag3":
        this.chooseClothes(
          this.horizontalScreen ? 460 : 220,
          this.buttonLeft,
          this.clothes5,
          this.clothes7,
          this.place1,
          this.place2,
          "place",
          "progress3",
          "lexiAccessory5"
        );
        break;

      case "lexiBag4":
        this.chooseClothes(
          this.horizontalScreen ? 460 : 220,
          this.buttonLeft,
          this.clothes5,
          this.clothes7,
          this.place1,
          this.place2,
          "place",
          "progress3",
          "lexiAccessory7"
        );
        break;

      // choice of place
      default:
        this.displayBoardText.text === "Choose your place"
          ? this.choosePlace(
              this.horizontalScreen ? 460 : 220,
              this.buttonLeft,
              this.place1,
              this.place2,
              this.horizontalScreen ? "bgH2" : "bgV2"
            )
          : console.log("Invalid data type");
    }
  }

  clickFunctionRight() {
    const key = this.lexi.texture.key;

    switch (key) {
      // choice of dress
      case "lexiIntro3":
        this.chooseClothes(
          this.horizontalScreen ? 740 : 500,
          this.buttonRight,
          this.clothes2,
          this.clothes1,
          this.clothes3,
          this.clothes4,
          "bag",
          "progress1",
          "lexiDress2"
        );
        break;

      // choice of bag
      case "lexiDress1":
        this.chooseClothes(
          this.horizontalScreen ? 740 : 500,
          this.buttonRight,
          this.clothes4,
          this.clothes3,
          this.clothes5,
          this.clothes6,
          "accessory",
          "progress2",
          "lexiBag2"
        );
        break;

      case "lexiDress2":
        this.chooseClothes(
          this.horizontalScreen ? 740 : 500,
          this.buttonRight,
          this.clothes4,
          this.clothes3,
          this.clothes5,
          this.clothes7,
          "accessory",
          "progress2",
          "lexiBag4"
        );
        break;

      // choice of accessory
      case "lexiBag1":
        this.chooseClothes(
          this.horizontalScreen ? 740 : 500,
          this.buttonRight,
          this.clothes6,
          this.clothes5,
          this.place1,
          this.place2,
          "place",
          "progress3",
          "lexiAccessory2"
        );
        break;

      case "lexiBag2":
        this.chooseClothes(
          this.horizontalScreen ? 740 : 500,
          this.buttonRight,
          this.clothes6,
          this.clothes5,
          this.place1,
          this.place2,
          "place",
          "progress3",
          "lexiAccessory4"
        );
        break;

      case "lexiBag3":
        this.chooseClothes(
          this.horizontalScreen ? 740 : 500,
          this.buttonRight,
          this.clothes7,
          this.clothes5,
          this.place1,
          this.place2,
          "place",
          "progress3",
          "lexiAccessory6"
        );
        break;

      case "lexiBag4":
        this.chooseClothes(
          this.horizontalScreen ? 740 : 500,
          this.buttonRight,
          this.clothes7,
          this.clothes5,
          this.place1,
          this.place2,
          "place",
          "progress3",
          "lexiAccessory8"
        );
        break;

      // choice of place
      default:
        this.displayBoardText.text === "Choose your place"
          ? this.choosePlace(
              this.horizontalScreen ? 740 : 500,
              this.buttonRight,
              this.place2,
              this.place1,
              this.horizontalScreen ? "bgH3" : "bgV3"
            )
          : console.log("Invalid data type");
    }
  }

  initializeChoice1() {
    this.graphics.destroy();

    this.tweens.add({
      targets: this.lexi,
      y: 550,
      scaleX: 1.1,
      scaleY: 1.1,
      ease: "Power1",
      duration: 300,
    });

    this.tweens.add({
      targets: this.displayBoard,
      y: 40,
      ease: "Power1",
      duration: 300,
    });

    this.tweens.add({
      targets: this.displayBoardText,
      y: 25,
      ease: "Power1",
      duration: 300,
    });

    this.tweens.add({
      targets: this.displayProgress,
      y: 75,
      ease: "Power1",
      duration: 300,
    });

    this.tweens.add({
      targets: [this.buttonLeft, this.clothes1],
      scaleX: 1,
      scaleY: 1,
      ease: "Power1",
      duration: 300,
      onComplete: () => this.initializeChoice2(),
    });
  }

  initializeChoice2() {
    this.tweens.add({
      targets: [this.buttonRight, this.clothes2],
      scaleX: 1,
      scaleY: 1,
      ease: "Power1",
      duration: 300,
      onComplete: () => this.initializeHand(),
    });
  }

  initializeHand() {
    this.hover.setScale(1);

    this.tweens.add({
      targets: this.hand,
      y: 835,
      ease: "Power1",
      duration: 300,
      onComplete: () => this.handMoveRight(),
    });
  }

  handMoveRight() {
    this.tweens.add({
      targets: this.hand,
      x: this.horizontalScreen ? 740 : 500,
      ease: "Power1",
      delay: 100,
      duration: 400,
      onComplete: () => this.handMoveLeft(),
    });
  }

  handMoveLeft() {
    this.tweens.add({
      targets: this.hand,
      x: this.horizontalScreen ? 460 : 220,
      ease: "Power1",
      delay: 100,
      duration: 400,
      onComplete: () =>
        this.time.delayedCall(2000, this.handMoveRight, null, this),
    });
  }

  update() {
    // function of hover
    if (this.hand.x < (this.horizontalScreen ? 520 : 280)) {
      this.hover.x = this.horizontalScreen ? 400 : 160;
    } else if (this.hand.x > (this.horizontalScreen ? 560 : 320)) {
      this.hover.x = this.horizontalScreen ? 680 : 440;
    }

    // function hand following for click
    if (this.keyLeft.isDown) {
      this.hand.x = this.horizontalScreen ? 460 : 220;
    } else if (this.keyRight.isDown) {
      this.hand.x = this.horizontalScreen ? 740 : 500;
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

    this.tweens.add({
      targets: [this.hand, button, this.hover, selectedClothes],
      scaleX: 0.9,
      scaleY: 0.9,
      ease: "Power1",
      duration: 100,
    });

    this.tweens.add({
      targets: [this.hand, button, this.hover, selectedClothes],
      scaleX: 1,
      scaleY: 1,
      ease: "Power1",
      delay: 100,
      duration: 100,
      onComplete: () => {
        this.displayBoardText.text = `Choose your ${nextChoose}`;
        this.displayBoardText.x =
          ((this.horizontalScreen ? 1080 : 600) - this.displayBoardText.width) /
          2;
        this.displayProgress.setTexture(progress);
        this.animateClothesChange();
        this.lexi.setTexture(lexiInClothes);

        selectedClothes.destroy();
        alternativeClothes.destroy();
        nextClothes1.setScale(1);
        nextClothes2.setScale(1);
      },
    });
  }

  choosePlace(x, button, selectedClothes, alternativeClothes, place) {
    this.hand.x = x;

    this.clickSound.play();

    this.tweens.add({
      targets: [this.hand, button, this.hover, selectedClothes],
      scaleX: 0.9,
      scaleY: 0.9,
      ease: "Power1",
      duration: 100,
    });

    this.tweens.add({
      targets: [this.hand, button, this.hover, selectedClothes],
      scaleX: 1,
      scaleY: 1,
      ease: "Power1",
      delay: 100,
      duration: 100,
      onComplete: () => {
        this.displayBoard.destroy();
        this.displayBoardText.destroy();
        this.displayProgress.destroy();
        this.buttonLeft.destroy();
        this.buttonRight.destroy();
        this.hover.destroy();
        this.hand.destroy();
        selectedClothes.destroy();
        alternativeClothes.destroy();
        this.lexi.x = -300;
        this.lexi.setScale(1);

        this.background.setTexture(place);
        this.animatePlaceChange();
        this.amazingScreen();
      },
    });
  }

  // function of animation of magical change of clothes
  animateClothesChange() {
    for (let i = 0; i < 192; ++i) {
      this.fireworks = this.add
        .sprite(
          Phaser.Math.Between(0, this.horizontalScreen ? 1080 : 600),
          Phaser.Math.Between(0, 900),
          "firework"
        )
        .setScale(Phaser.Math.FloatBetween(0.1, 2));
      this.fireworks.angle = Phaser.Math.Between(-180, 180);

      this.fireworks.play("moveFireworks");
    }
  }

  // function of animation of change of place
  animatePlaceChange() {
    for (let i = 0; i < 7; ++i) {
      this.leafs = this.physics.add.group({
        key: "star",
        repeat: 7,
        setXY: {
          x: this.horizontalScreen ? 540 : 300,
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

    for (let i = 0; i < 7; ++i) {
      this.leafs = this.physics.add.group({
        key: "leaf",
        repeat: 7,
        setXY: {
          x: Phaser.Math.Between(
            this.horizontalScreen ? 500 : 200,
            this.horizontalScreen ? 580 : 400
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

  amazingScreen() {
    this.keySpace.removeAllListeners();

    this.tweens.add({
      targets: this.lexi,
      x: this.horizontalScreen ? 400 : 160,
      ease: "Power1",
      duration: 600,
    });

    this.tweens.add({
      targets: this.paul,
      x: this.horizontalScreen ? 640 : 400,
      ease: "Power1",
      duration: 600,
      onComplete: () => this.runDialogAmasingPaul(),
    });
  }

  runDialogAmasingPaul() {
    this.tweens.add({
      targets: this.dialogAmasingPaul,
      scaleX: 0.5,
      scaleY: 0.5,
      ease: "Power1",
      duration: 300,
      onComplete: () =>
        this.time.delayedCall(2000, this.destroyDialogAmasingPaul, null, this),
    });
  }

  destroyDialogAmasingPaul() {
    this.tweens.add({
      targets: this.dialogAmasingPaul,
      scaleX: 0,
      scaleY: 0,
      ease: "Power1",
      duration: 300,
      onComplete: () => {
        this.paul.active = false;
        this.paul.setTexture("paul1");

        this.runPlayNow();
      },
    });
  }

  runPlayNow() {
    this.input.keyboard.on("keydown-SPACE", this.goLink, this);
    this.input.keyboard.on("keydown-ENTER", this.goLink, this);

    this.tweens.add({
      targets: this.playNow,
      scaleX: 1,
      scaleY: 1,
      ease: "Power1",
      duration: 300,
    });
  }

  goLink() {
    this.tweens.add({
      targets: this.playNow,
      scaleX: 0.9,
      scaleY: 0.9,
      ease: "Power1",
      duration: 200,
      onComplete: () => {
        this.playNow.setScale(1);
        window.location = "https://apps.apple.com/us/app/id1491717191";
      },
    });
  }
}
