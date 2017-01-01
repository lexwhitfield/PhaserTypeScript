var Tutorials;
(function (Tutorials) {
    var Display;
    (function (Display) {
        var T2;
        (function (T2) {
            var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: create, update: update });
            var info;
            var graphics1;
            var graphics2;
            var angle = { min: 0, max: 0 };
            function create() {
                game.stage.backgroundColor = 0x2d2d2d;
                graphics1 = game.add.graphics(0, 0);
                graphics2 = game.add.graphics(0, 0);
                var style = { font: '24px Arial', fill: '#ffffff', align: 'center' };
                info = game.add.text(32, 32, 'Arc', style);
                game.add.text(130, 500, 'clockwise', style);
                game.add.text(530, 500, 'Anticlockwise', style);
                this.add.tween(angle).to({ max: 360 }, 6000, Phaser.Easing.Linear.None, true, 0, -1, true);
            }
            function update() {
                info.text = 'Arc maxAngle: ' + Math.round(angle.max);
                graphics1.clear();
                graphics1.lineStyle(2, 0xffffff);
                graphics1.beginFill(0x00bff3);
                graphics1.arc(200, 300, 160, angle.min, degrees_to_radians(angle.max), false);
                graphics1.endFill();
                graphics2.clear();
                graphics2.lineStyle(2, 0xffffff);
                graphics2.beginFill(0xa000f3);
                graphics2.arc(600, 300, 160, angle.min, degrees_to_radians(angle.max), true);
                graphics1.endFill();
            }
            function degrees_to_radians(a) {
                return a * Math.PI / 180;
            }
        })(T2 = Display.T2 || (Display.T2 = {}));
    })(Display = Tutorials.Display || (Tutorials.Display = {}));
})(Tutorials || (Tutorials = {}));
var Tutorials;
(function (Tutorials) {
    var Display;
    (function (Display) {
        var T1;
        (function (T1) {
            var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: create });
            function create() {
                var graphics = game.add.graphics(game.world.centerX, game.world.centerY);
                graphics.lineStyle(8, 0xffd900);
                graphics.arc(0, 0, 135, 0, Math.PI / 2, false);
                // move graphics cursor
                //graphics.moveTo(-100, -100);
                // resets the line style
                graphics.lineStyle(0);
                // to draw solid shapes, need to start and end fill as if it were a spritebatch
                graphics.beginFill(0xff3300);
                graphics.arc(0, 0, 135, 0, Math.PI / 2, true);
                graphics.endFill();
            }
        })(T1 = Display.T1 || (Display.T1 = {}));
    })(Display = Tutorials.Display || (Tutorials.Display = {}));
})(Tutorials || (Tutorials = {}));
var Tutorials;
(function (Tutorials) {
    var T3;
    (function (T3) {
        var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });
        var tween;
        var prev = -400;
        var t = Date.now();
        var sprite;
        function preload() {
            game.forceSingleUpdate = true;
            game.load.image('einstein', '/img/tutorials/assets/ra_einstein.png');
        }
        function create() {
            sprite = game.add.sprite(-400, 0, 'einstein');
            tween = game.add.tween(sprite);
            tween.to({ x: 800 }, 5000, Phaser.Easing.Linear.None, true, 0);
        }
    })(T3 = Tutorials.T3 || (Tutorials.T3 = {}));
})(Tutorials || (Tutorials = {}));
var Tutorials;
(function (Tutorials) {
    var T6;
    (function (T6) {
        var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'content', { create: create });
        function create() {
            var text = "- phaser -\n with a sprinkle of \n pixi dust.";
            var style = { font: "65px Arial", fill: '#ff0044', align: 'center' };
            var t = game.add.text(game.world.centerX - 300, 0, text, style);
        }
    })(T6 = Tutorials.T6 || (Tutorials.T6 = {}));
})(Tutorials || (Tutorials = {}));
var Tutorials;
(function (Tutorials) {
    var T5;
    (function (T5) {
        var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });
        function preload() {
            game.load.atlasJSONHash('bot', '/img/tutorials/sprites/running_bot.png', '/img/tutorials/sprites/running_bot.json');
        }
        function create() {
            var bot = game.add.sprite(200, 200, 'bot');
            bot.animations.add('run');
            bot.animations.play('run', 15, true);
        }
    })(T5 = Tutorials.T5 || (Tutorials.T5 = {}));
})(Tutorials || (Tutorials = {}));
var Tutorials;
(function (Tutorials) {
    var T4;
    (function (T4) {
        var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, update: update, render: render });
        function preload() {
            game.load.image('phaser', '/img/logo.png');
        }
        var sprite;
        function create() {
            game.physics.startSystem(Phaser.Physics.ARCADE);
            sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'phaser');
            sprite.anchor.setTo(0.5);
            game.physics.arcade.enable(sprite);
        }
        function update() {
            if (game.physics.arcade.distanceToPointer(sprite, game.input.activePointer) > 8) {
                game.physics.arcade.moveToPointer(sprite, 300);
            }
            else {
                sprite.body.velocity.set(0);
            }
        }
        function render() {
            game.debug.inputInfo(32, 32);
        }
    })(T4 = Tutorials.T4 || (Tutorials.T4 = {}));
})(Tutorials || (Tutorials = {}));
var Tutorials;
(function (Tutorials) {
    var T3;
    (function (T3) {
        var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });
        function preload() {
            game.load.image('einstein', '/img/tutorials/ra_einstein.png');
        }
        function create() {
            var image = game.add.sprite(0, 0, 'einstein');
            game.physics.enable(image, Phaser.Physics.ARCADE);
            image.body.velocity.x = 150;
        }
    })(T3 = Tutorials.T3 || (Tutorials.T3 = {}));
})(Tutorials || (Tutorials = {}));
var Tutorials;
(function (Tutorials) {
    var T2;
    (function (T2) {
        var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });
        var text;
        var counter = 0;
        function preload() {
            game.load.image('einstein', '/img/tutorials/ra_einstein.png');
        }
        function create() {
            var image = game.add.sprite(0, 0, 'einstein');
            // set image origin to it's center
            image.anchor.setTo(0.5);
            // move image to the middle of the screen
            image.position.set(400, 300);
            image.inputEnabled = true;
            text = game.add.text(250, 16, '', { fill: '#ffffff' });
            image.events.onInputDown.add(listener, this);
        }
        function listener() {
            counter++;
            text.text = 'You clicked ' + counter + ' times!';
        }
    })(T2 = Tutorials.T2 || (Tutorials.T2 = {}));
})(Tutorials || (Tutorials = {}));
var Tutorials;
(function (Tutorials) {
    var T1;
    (function (T1) {
        var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });
        function preload() {
            game.load.image('einstein', '/img/tutorials/ra_einstein.png');
        }
        function create() {
            game.add.sprite(0, 0, 'einstein');
        }
    })(T1 = Tutorials.T1 || (Tutorials.T1 = {}));
})(Tutorials || (Tutorials = {}));
window.onload = () => {
    var game = new PhaserGame.Game();
};
var PhaserGame;
(function (PhaserGame) {
    class Boot extends Phaser.State {
        preload() {
            // only load the resources needed for the 
            // loading bar.
            this.load.image('preloadBar', '../img/loader.png');
        }
        create() {
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
        }
    }
    PhaserGame.Boot = Boot;
})(PhaserGame || (PhaserGame = {}));
var PhaserGame;
(function (PhaserGame) {
    class DodgerLevel extends Phaser.State {
        create() {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.stage.backgroundColor = '#555555';
            this.player = new PhaserGame.Player(this.game, 512, 384, PhaserGame.MovementMode.KEYBOARD_WASD);
            this.enemies = [];
            for (var i = 0; i < 10; i++) {
                this.enemies.push(new PhaserGame.Enemy(this.game, Math.floor(Math.random() * this.game.width), Math.floor(Math.random() * this.game.height)));
            }
        }
        update() {
            for (var enemy in this.enemies) {
                this.game.physics.arcade.collide(this.player, enemy);
            }
        }
        render() {
            this.game.debug.inputInfo(32, 32);
            this.game.debug.body(this.player);
        }
    }
    PhaserGame.DodgerLevel = DodgerLevel;
})(PhaserGame || (PhaserGame = {}));
// http://www.photonstorm.com/phaser/advanced-phaser-and-typescript-projects
var PhaserGame;
(function (PhaserGame) {
    class Game extends Phaser.Game {
        constructor() {
            super(1024, 768, Phaser.AUTO, 'content', null);
            this.state.add('Boot', PhaserGame.Boot, false);
            this.state.add('Preloader', PhaserGame.Preloader, false);
            this.state.add('MainMenu', PhaserGame.MainMenu, false);
            this.state.add('Level1', PhaserGame.DodgerLevel, false);
            this.state.start('Boot');
        }
    }
    PhaserGame.Game = Game;
})(PhaserGame || (PhaserGame = {}));
var PhaserGame;
(function (PhaserGame) {
    class Level1 extends Phaser.State {
        create() {
            this.background = this.add.sprite(0, 0, 'level1');
            this.music = this.add.audio('music', 1, false);
            this.music.play();
            this.player = new PhaserGame.Player(this.game, 130, 284, PhaserGame.MovementMode.KEYBOARD_DIR);
            this.game.physics.enable(this.player);
        }
    }
    PhaserGame.Level1 = Level1;
})(PhaserGame || (PhaserGame = {}));
var PhaserGame;
(function (PhaserGame) {
    class MainMenu extends Phaser.State {
        create() {
            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;
            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);
            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
            // wire-up mouse click event
            this.input.onDown.addOnce(this.fadeOut, this);
        }
        fadeOut() {
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        }
        startGame() {
            this.game.state.start('Level1', true, false);
        }
    }
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
    class Player extends Phaser.Sprite {
        constructor(game, x, y, movemode) {
            super(game, x, y, 'player', 0);
            this.anchor.setTo(0.5, 0.5);
            this.MoveMode = movemode;
            this.DisableInertia = true;
            this.game.physics.enable(this);
            this.game.add.existing(this);
            this.MaxSpeed = 150;
        }
        update() {
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
        }
        move_to_mouse() {
            //  If the sprite is > 8px away from the pointer then let's move to it
            if (this.game.physics.arcade.distanceToPointer(this, this.game.input.activePointer) > 8) {
                //  Make the object seek to the active pointer (mouse or touch).
                this.game.physics.arcade.moveToPointer(this, 300);
            }
            else {
                //  Otherwise turn off velocity because we're close enough to the pointer
                this.body.velocity.set(0);
            }
        }
        keyboard_dir() {
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
        }
        keyboard_wasd() {
            // set movement speed by w, a, s and d keys
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
                // turn left
                this.rotation += 0.1;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                // turn right
                this.rotation -= 0.1;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
                // move forward
                this.game.physics.arcade.accelerationFromRotation(this.rotation, 5000, this.body.acceleration);
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
                // stop / move backwards
                this.body.velocity.y = -Math.sin(this.angle) * this.MaxSpeed;
                this.body.velocity.x = -Math.cos(this.angle) * this.MaxSpeed;
            }
        }
        radians_to_degrees(a) {
            return a * 180 / Math.PI;
        }
        mouse_and_keyboard() {
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
        }
    }
    PhaserGame.Player = Player;
})(PhaserGame || (PhaserGame = {}));
var PhaserGame;
(function (PhaserGame) {
    class Preloader extends Phaser.State {
        preload() {
            // use this function to load all the other resources 
            // we need for the game.
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            this.load.image('titlepage', '../img/titlepage.jpg');
            this.load.image('logo', '../img/logo.png');
            this.load.audio('music', '../img/title.mp3');
            this.load.image('player', '../img/01.dodger/player.png');
            this.load.image('enemy', '../img/01.dodger/enemy.png');
        }
        create() {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }
        startMainMenu() {
            // hand-off to the main menu
            this.game.state.start('MainMenu', true, false);
        }
    }
    PhaserGame.Preloader = Preloader;
})(PhaserGame || (PhaserGame = {}));
var PhaserGame;
(function (PhaserGame) {
    class Enemy extends Phaser.Sprite {
        constructor(game, x, y) {
            super(game, x, y, 'enemy', 0);
            this.anchor.setTo(0.5, 0.5);
            this.game.physics.enable(this);
            this.game.add.existing(this);
        }
        update() {
            // movement and action code goes in here
        }
    }
    PhaserGame.Enemy = Enemy;
})(PhaserGame || (PhaserGame = {}));
//# sourceMappingURL=output.js.map