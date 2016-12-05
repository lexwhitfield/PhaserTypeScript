namespace Tutorials.T1 {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });

    function preload() {
        game.load.image('einstein', '/img/tutorials/ra_einstein.png');
    }

    function create() {
        game.add.sprite(0, 0, 'einstein');
    }
}