namespace Tutorials.Display.T14 {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });

    function preload() {

        game.load.image('atari', '/img/tutorials/demo/atari.png');

    }

    function create() {

        var graphics = game.add.graphics(260, 260);

        graphics.beginFill(0x027A71);
        graphics.lineStyle(4, 0x02FDEB, 1);

        graphics.moveTo(0, 0);
        graphics.lineTo(250, 0);
        graphics.lineTo(250, 200);
        graphics.lineTo(125, 100);
        graphics.lineTo(0, 200);
        graphics.lineTo(0, 0);
        graphics.endFill();

        var sprite = game.make.sprite(32, -48, 'atari');
        graphics.addChild(sprite);

    }

}