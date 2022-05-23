// создаем новую сцену с именем "Game"
const gameScene = new Phaser.Scene("Game");

// конфигурация нашей игры
const config = {
  type: Phaser.AUTO, // Phaser сам решает как визуализировать нашу игру (WebGL или Canvas)
  width: 600, // ширина игры
  height: 900, // высота игры
  scene: gameScene, // наша созданная выше сцена
};

// создаем игру и передам ей конфигурацию
const game = new Phaser.Game(config);

// загрузка файлов ресурсов для нашей игры
gameScene.preload = function () {
  // задаём путь к папке изображений
  this.load.path = "assets/";

  // загрузка изображений
  this.load.image("bg1", "bg1.png");
  this.load.image("paul1", "paul1.png");
  this.load.image("paul2", "paul2.png");
  this.load.image("lexi1", "lexi1.png");
  this.load.image("lexi2", "lexi2.png");
  this.load.image("intro-dialog1", "intro-dialog1.png");
  this.load.image("intro-dialog2", "intro-dialog2.png");

  // загрузка аудио с массивом расширений
  this.load.audio("bgSound", ["bgSound.wav", "bgSound.mp3"]);
};

// выполняется один раз, после загрузки ресурсов
gameScene.create = function () {
  // фон
  this.add.image(0, 0, "bg1").setOrigin(0, 0);
  // фоновая музыка
  this.sound.add("bgSound", { loop: true }).play();

  // создание анимация героя
  this.anims.create({
    key: "intro",
    frames: [{ key: "paul1" }, { key: "paul2", duration: 50 }],
    frameRate: 2,
    repeat: -1,
  });

  // добавление анимация героя
  this.add.sprite(300, 465, "paul1").play("intro");

  // диалог
  this.add.image(42.5, 400, "intro-dialog1").setOrigin(0, 0);
};
