namespace Tutorials.Display.T20 {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, update: update });

    var ball: Phaser.Sprite;
    var texture: Phaser.RenderTexture;

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

}