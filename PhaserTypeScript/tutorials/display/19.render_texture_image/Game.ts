namespace Tutorials.Display.T19 {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, update: update });

    var ball: Phaser.Sprite;
    var texture: Phaser.RenderTexture;

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

}