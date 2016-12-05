namespace Tutorials.T3 {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });

    function preload() {
        game.load.image('einstein', '/img/tutorials/ra_einstein.png');
    }

    function create() {
        var image = game.add.sprite(0, 0, 'einstein');

        game.physics.enable(image, Phaser.Physics.ARCADE);

        image.body.velocity.x = 150;
    }
}