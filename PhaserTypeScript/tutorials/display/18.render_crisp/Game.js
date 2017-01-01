var Tutorials;
(function (Tutorials) {
    var Display;
    (function (Display) {
        var T18;
        (function (T18) {
            var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });
            var boss;
            var melon;
            var button;
            function preload() {
                game.load.image('boss', '/img/tutorials/misc/boss1.png');
                game.load.image('melon', '/img/tutorials/sprites/melon.png');
                game.load.spritesheet('button', '/img/tutorials/buttons/button_sprite_sheet.png', 193, 71);
            }
            function create() {
                boss = game.add.sprite(game.world.centerX, game.world.centerY, 'boss');
                boss.anchor.setTo(0.5, 0.5);
                melon = game.add.sprite(500, game.world.centerY, 'melon');
                melon.anchor.setTo(0.5, 0.5);
                // turn off smoothing on single sprites
                boss.smoothed = false;
                // or for the whole stage
                // game.stage.smoothed = false;
                button = game.add.button(32, 32, 'button', clickedIt, this, 2, 1, 0);
            }
            function clickedIt() {
                boss.scale.x += 0.5;
                boss.scale.y += 0.5;
                melon.scale.x += 0.5;
                melon.scale.y += 0.5;
            }
        })(T18 = Display.T18 || (Display.T18 = {}));
    })(Display = Tutorials.Display || (Tutorials.Display = {}));
})(Tutorials || (Tutorials = {}));
//# sourceMappingURL=Game.js.map