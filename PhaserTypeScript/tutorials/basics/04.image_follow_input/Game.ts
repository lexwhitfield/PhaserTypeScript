namespace Tutorials.T4 {
    var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, update: update, render: render });

    function preload() {
        game.load.image('phaser', '/img/logo.png');
    }

    var sprite: Phaser.Sprite;

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'phaser');
        sprite.anchor.setTo(0.5);

        game.physics.arcade.enable(sprite);
    }

    function update() {
        if (game.physics.arcade.distanceToPointer(sprite, game.input.activePointer) > 8) {
            game.physics.arcade.moveToPointer(sprite, 300);
        } else {
            sprite.body.velocity.set(0);
        }
    }

    function render() {
        game.debug.inputInfo(32, 32);
    }
}