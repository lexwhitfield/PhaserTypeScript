var Tutorials;
(function (Tutorials) {
    var Display;
    (function (Display) {
        var T8;
        (function (T8) {
            var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, render: render });
            function preload() {
                game.load.image('dragon', '/img/tutorials/assets/cougar_dragonsun.png');
                game.load.spritesheet('button', '/img/tutorials/buttons/button_sprite_sheet.png', 193, 71);
            }
            var button;
            var sprite;
            function create() {
                // game.add.image(0,0,'star');
                //var i = game.add.image(game.world.centerX, game.world.centerY, 'nanoha');
                //i.anchor.setTo(0.5);
                sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'dragon');
                sprite.anchor.setTo(0.5);
                game.stage.backgroundColor = '#000';
                // stretch to fill
                game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
                // keep original size
                // game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;
                // Maintain aspect ratio
                // game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
                button = game.add.button(game.world.centerX - 95, 500, 'button', actionOnClick, this, 2, 1, 0);
                game.scale.onFullScreenChange.add(onFullScreenChanged);
                game.input.onDown.add(gofull, this);
            }
            function onFullScreenChanged(e) {
                var i = 0;
            }
            function actionOnClick() {
                sprite.tint = Math.random() * 0xFFFFFF;
            }
            function gofull() {
                if (game.scale.isFullScreen) {
                    game.scale.stopFullScreen();
                }
                else {
                    game.scale.startFullScreen(false);
                }
            }
            function render() {
                // game.debug.text('Click / Tap to go fullscreen', 270, 16);
                // game.debug.text('Click / Tap to go fullscreen', 0, 16);
                game.debug.inputInfo(32, 32);
                // game.debug.pointer(game.input.activePointer);
            }
        })(T8 = Display.T8 || (Display.T8 = {}));
    })(Display = Tutorials.Display || (Tutorials.Display = {}));
})(Tutorials || (Tutorials = {}));
//# sourceMappingURL=Game.js.map