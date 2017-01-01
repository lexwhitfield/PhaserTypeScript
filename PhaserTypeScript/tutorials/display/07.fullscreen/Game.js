var Tutorials;
(function (Tutorials) {
    var Display;
    (function (Display) {
        var T7;
        (function (T7) {
            var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, render: render });
            function preload() {
                game.load.image('dragon', '/img/tutorials/assets/cougar_dragonsun.png');
                game.load.image('star', '/img/tutorials/assets/monika_krawinkel-amberstar_title.png');
                game.load.image('nanoha', '/img/tutorials/assets/nanoha_taiken_pink.png');
            }
            function create() {
                // game.add.image(0,0,'star');
                var i = game.add.image(game.world.centerX, game.world.centerY, 'nanoha');
                i.anchor.setTo(0.5);
                // var sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'dragon');
                // sprite.anchor.setTo(0.5);
                game.stage.backgroundColor = '#4d4d4d';
                // stretch to fill
                game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
                // keep original size
                // game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;
                // Maintain aspect ratio
                // game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
                game.input.onDown.add(gofull, this);
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
        })(T7 = Display.T7 || (Display.T7 = {}));
    })(Display = Tutorials.Display || (Tutorials.Display = {}));
})(Tutorials || (Tutorials = {}));
//# sourceMappingURL=Game.js.map