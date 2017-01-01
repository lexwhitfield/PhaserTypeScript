var Tutorials;
(function (Tutorials) {
    var Display;
    (function (Display) {
        var T19;
        (function (T19) {
            var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, update: update });
            var ball;
            var texture;
            function preload() {
                game.load.image('ball', '/img/tutorials/sprites/spinObj_01.png');
            }
            function create() {
                ball = game.make.sprite(0, 0, 'ball');
                texture = game.add.renderTexture(game.width, game.height);
                game.add.sprite(0, 0, texture);
            }
            function update() {
                if (!game.input.activePointer.position.isZero()) {
                    texture.renderXY(ball, game.input.activePointer.x, game.input.activePointer.y, true);
                }
            }
        })(T19 = Display.T19 || (Display.T19 = {}));
    })(Display = Tutorials.Display || (Tutorials.Display = {}));
})(Tutorials || (Tutorials = {}));
//# sourceMappingURL=Game.js.map