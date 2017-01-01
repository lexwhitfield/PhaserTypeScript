var Tutorials;
(function (Tutorials) {
    var Display;
    (function (Display) {
        var T21;
        (function (T21) {
            var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, update: update });
            var sprite;
            var sprite2;
            var conair;
            var texture;
            function preload() {
                game.load.image('diver', '/img/tutorials/sprites/treasure_trap.png');
                game.load.image('ball', '/img/tutorials/sprites/spinObj_01.png');
            }
            function create() {
                texture = game.add.renderTexture(game.width, game.height);
                game.add.sprite(0, 0, texture);
                conair = game.add.group();
                sprite = conair.create(256, 256, 'diver');
                sprite.anchor.setTo(0.5);
                sprite2 = game.make.sprite(200, 200, 'ball');
                sprite2.anchor.setTo(0.5);
                game.add.tween(sprite.scale).to({ x: 0.2, y: 0.2 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 500, -1, true);
                game.input.onDown.add(drawSprite, this);
                game.add.text(32, 32, 'CLick to draw sprite', { font: "24px Arial", fill: "#FFFFFF" });
            }
            function update() {
                sprite.rotation += 0.01;
                sprite2.rotation += 0.01;
                sprite.x = game.input.activePointer.x;
                sprite.y = game.input.activePointer.y;
            }
            function drawSprite() {
                texture.render(conair);
                texture.renderXY(sprite2, sprite.x, sprite.y, false);
            }
        })(T21 = Display.T21 || (Display.T21 = {}));
    })(Display = Tutorials.Display || (Tutorials.Display = {}));
})(Tutorials || (Tutorials = {}));
//# sourceMappingURL=Game.js.map