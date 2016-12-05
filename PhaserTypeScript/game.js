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
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(game, x, y) {
            _super.call(this, game, x, y, 'enemy', 0);
            this.anchor.setTo(0.5, 0.5);
            this.game.physics.enable(this);
            this.game.add.existing(this);
        }
        Enemy.prototype.update = function () {
            // movement and action code goes in here
        };
        return Enemy;
    }(Phaser.Sprite));
    PhaserGame.Enemy = Enemy;
})(PhaserGame || (PhaserGame = {}));
var PhaserGame;
(function (PhaserGame) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            // only load the resources needed for the 
            // loading bar.
            this.load.image('preloadBar', '../img/loader.png');
        };
        Boot.prototype.create = function () {
            // initialise core properties of the game
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
            this.player = new PhaserGame.Player(this.game, 130, 284, PhaserGame.MovementMode.MOUSE_AND_KEYBOARD);
            this.enemies = [];
            this.enemies.push(new PhaserGame.Enemy(this.game, 70, 120));
        };
        DodgerLevel.prototype.update = function () {
        };
        DodgerLevel.prototype.render = function () {
            this.game.debug.inputInfo(32, 32);
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
            _super.call(this, 1024, 768, Phaser.AUTO, 'content', null);
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
            this.player = new PhaserGame.Player(this.game, 130, 284, PhaserGame.MovementMode.KEYBOARD_DIR);
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
            // wire-up mouse click event
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
    (function (MovementMode) {
        MovementMode[MovementMode["MOVE_TO_MOUSE"] = 0] = "MOVE_TO_MOUSE";
        MovementMode[MovementMode["KEYBOARD_DIR"] = 1] = "KEYBOARD_DIR";
        MovementMode[MovementMode["KEYBOARD_WASD"] = 2] = "KEYBOARD_WASD";
        MovementMode[MovementMode["MOUSE_AND_KEYBOARD"] = 3] = "MOUSE_AND_KEYBOARD";
    })(PhaserGame.MovementMode || (PhaserGame.MovementMode = {}));
    var MovementMode = PhaserGame.MovementMode;
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y, movemode) {
            _super.call(this, game, x, y, 'player', 0);
            this.anchor.setTo(0.5, 0.5);
            this.MoveMode = movemode;
            this.DisableInertia = true;
            this.game.physics.enable(this);
            this.game.add.existing(this);
            this.MaxSpeed = 150;
        }
        Player.prototype.update = function () {
            if (this.DisableInertia) {
                this.body.velocity.x = 0;
                this.body.velocity.y = 0;
            }
            switch (this.MoveMode) {
                case MovementMode.MOVE_TO_MOUSE:
                    this.move_to_mouse();
                    break;
                case MovementMode.KEYBOARD_DIR:
                    this.keyboard_dir();
                    break;
                case MovementMode.KEYBOARD_WASD:
                    this.keyboard_wasd();
                    break;
                case MovementMode.MOUSE_AND_KEYBOARD:
                    this.mouse_and_keyboard();
                    break;
            }
        };
        Player.prototype.move_to_mouse = function () {
            //  If the sprite is > 8px away from the pointer then let's move to it
            if (this.game.physics.arcade.distanceToPointer(this, this.game.input.activePointer) > 8) {
                //  Make the object seek to the active pointer (mouse or touch).
                this.game.physics.arcade.moveToPointer(this, 300);
            }
            else {
                //  Otherwise turn off velocity because we're close enough to the pointer
                this.body.velocity.set(0);
            }
        };
        Player.prototype.keyboard_dir = function () {
            // set movement speed by directional arrow keys
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.velocity.x = -150;
                this.scale.x = (this.scale.x == 1) ? -1 : this.scale.x;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.velocity.x = 150;
                this.scale.x = (this.scale.x == -1) ? 1 : this.scale.x;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.body.velocity.y = 150;
                this.scale.y = (this.scale.y == -1) ? 1 : this.scale.y;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.body.velocity.y = -150;
                this.scale.y = (this.scale.y == 1) ? -1 : this.scale.y;
            }
        };
        Player.prototype.keyboard_wasd = function () {
            // set movement speed by w, a, s and d keys
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
                this.body.velocity.x = -150;
                this.scale.x = (this.scale.x == 1) ? -1 : this.scale.x;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                this.body.velocity.x = 150;
                this.scale.x = (this.scale.x == -1) ? 1 : this.scale.x;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
                this.body.velocity.y = 150;
                this.scale.y = (this.scale.y == -1) ? 1 : this.scale.y;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
                this.body.velocity.y = -150;
                this.scale.y = (this.scale.y == 1) ? -1 : this.scale.y;
            }
        };
        Player.prototype.mouse_and_keyboard = function () {
            // angleToPointer returns angle in radians (-1 to +1). this.angle expects angle in degrees
            // angleToPointer returns angle to the x-axis so -90 to offset 0 degrees to straight upwards
            this.angle = this.radians_to_degrees(this.game.physics.arcade.angleToPointer(this)) - 90;
            //TODO: figure out the math for strafing
            // wasd keys
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
                // move forward
                this.body.velocity.y = Math.sin(this.angle) * this.MaxSpeed;
                this.body.velocity.x = Math.cos(this.angle) * this.MaxSpeed;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
                // stop / move backwards
                this.body.velocity.y = -Math.sin(this.angle) * this.MaxSpeed;
                this.body.velocity.x = -Math.cos(this.angle) * this.MaxSpeed;
            }
            // cap speed
        };
        Player.prototype.degrees_to_radians = function (a) {
            return a * Math.PI / 180;
        };
        Player.prototype.radians_to_degrees = function (a) {
            return a * 180 / Math.PI;
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
            // use this function to load all the other resources 
            // we need for the game.
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            this.load.image('titlepage', '../img/titlepage.jpg');
            this.load.image('logo', '../img/logo.png');
            this.load.audio('music', '../img/title.mp3');
            this.load.image('player', '../img/01.dodger/player.png');
            this.load.image('enemy', '../img/01.dodger/enemy.png');
        };
        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };
        Preloader.prototype.startMainMenu = function () {
            // hand-off to the main menu
            this.game.state.start('MainMenu', true, false);
        };
        return Preloader;
    }(Phaser.State));
    PhaserGame.Preloader = Preloader;
})(PhaserGame || (PhaserGame = {}));
//# sourceMappingURL=game.js.map