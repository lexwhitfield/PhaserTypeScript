window.onload = function () {
    var game = new PhaserGame.Game();
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PhaserGame;
(function (PhaserGame) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', '../img/loader.png');
        };
        Boot.prototype.create = function () {
            // number of touch points
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
                this.scale.pageAlignHorizontally = true;
            }
            else {
            }
            // hand over to the Preloader
            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    }(Phaser.State));
    PhaserGame.Boot = Boot;
})(PhaserGame || (PhaserGame = {}));
var PhaserGame;
(function (PhaserGame) {
    var DodgerLevel = (function (_super) {
        __extends(DodgerLevel, _super);
        function DodgerLevel() {
            _super.apply(this, arguments);
        }
        DodgerLevel.prototype.create = function () {
            this.stage.backgroundColor = '#555555';
            this.player = new PhaserGame.Player(this.game, 130, 284);
            this.game.physics.enable(this.player);
        };
        DodgerLevel.prototype.update = function () {
        };
        return DodgerLevel;
    }(Phaser.State));
    PhaserGame.DodgerLevel = DodgerLevel;
})(PhaserGame || (PhaserGame = {}));
// http://www.photonstorm.com/phaser/advanced-phaser-and-typescript-projects
var PhaserGame;
(function (PhaserGame) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 600, Phaser.AUTO, 'content', null);
            this.state.add('Boot', PhaserGame.Boot, false);
            this.state.add('Preloader', PhaserGame.Preloader, false);
            this.state.add('MainMenu', PhaserGame.MainMenu, false);
            this.state.add('Level1', PhaserGame.DodgerLevel, false);
            this.state.start('Boot');
        }
        return Game;
    }(Phaser.Game));
    PhaserGame.Game = Game;
})(PhaserGame || (PhaserGame = {}));
var PhaserGame;
(function (PhaserGame) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1() {
            _super.apply(this, arguments);
        }
        Level1.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'level1');
            this.music = this.add.audio('music', 1, false);
            this.music.play();
            this.player = new PhaserGame.Player(this.game, 130, 284);
            this.game.physics.enable(this.player);
        };
        return Level1;
    }(Phaser.State));
    PhaserGame.Level1 = Level1;
})(PhaserGame || (PhaserGame = {}));
var PhaserGame;
(function (PhaserGame) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;
            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);
            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
            this.input.onDown.addOnce(this.fadeOut, this);
        };
        MainMenu.prototype.fadeOut = function () {
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        };
        MainMenu.prototype.startGame = function () {
            this.game.state.start('Level1', true, false);
        };
        return MainMenu;
    }(Phaser.State));
    PhaserGame.MainMenu = MainMenu;
})(PhaserGame || (PhaserGame = {}));
var PhaserGame;
(function (PhaserGame) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            _super.call(this, game, x, y, 'simon', 0);
            this.anchor.setTo(0.5, 0);
            this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            game.add.existing(this);
        }
        Player.prototype.update = function () {
            this.body.velocity.x = 0;
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.velocity.x = -150;
                this.animations.play('walk');
                if (this.scale.x == 1) {
                    this.scale.x = -1;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.velocity.x = 150;
                this.animations.play('walk');
                if (this.scale.x == -1) {
                    this.scale.x = 1;
                }
            }
            else {
                this.animations.frame = 0;
            }
        };
        return Player;
    }(Phaser.Sprite));
    PhaserGame.Player = Player;
})(PhaserGame || (PhaserGame = {}));
var PhaserGame;
(function (PhaserGame) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            this.load.image('titlepage', '../img/titlepage.jpg');
            this.load.image('logo', '../img/logo.png');
            this.load.audio('music', '../img/title.mp3');
            this.load.spritesheet('simon', '../img/simon.png', 58, 96, 5);
            this.load.image('level1', '../img/level1.png');
        };
        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };
        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };
        return Preloader;
    }(Phaser.State));
    PhaserGame.Preloader = Preloader;
})(PhaserGame || (PhaserGame = {}));
//# sourceMappingURL=game.js.map