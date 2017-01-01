var Tutorials;
(function (Tutorials) {
    var Display;
    (function (Display) {
        var T20;
        (function (T20) {
            var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, update: update });
            var ball;
            var texture;
            function preload() {
                game.load.image('ball', '/img/tutorials/sprites/pangball.png');
            }
            function create() {
                ball = game.make.sprite(0, 0, 'ball');
                ball.anchor.setTo(0.5);
                texture = game.add.renderTexture(game.width, game.height, 'mousetrail');
                game.add.sprite(0, 0, texture);
            }
            function update() {
                texture.renderXY(ball, game.input.activePointer.x, game.input.activePointer.y, true);
                texture.renderXY(ball, game.input.activePointer.x, game.height - game.input.activePointer.y, false);
            }
        })(T20 = Display.T20 || (Display.T20 = {}));
    })(Display = Tutorials.Display || (Tutorials.Display = {}));
})(Tutorials || (Tutorials = {}));
//# sourceMappingURL=Game.js.map