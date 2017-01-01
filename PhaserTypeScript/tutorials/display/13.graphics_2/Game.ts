namespace Tutorials.Display.T13 {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: create });

    function create() {

        var graphics = game.add.graphics(100, 100);

        graphics.lineStyle(1, 0xFF0000, 1);
        graphics.moveTo(0, 0);
        graphics.lineTo(100, 0);

        graphics.lineStyle(1, 0x00FF00, 1);
        graphics.moveTo(100, 0);
        graphics.lineTo(100, 100);

        graphics.lineStyle(1, 0x0000FF, 1);
        graphics.moveTo(100, 100);
        graphics.lineTo(0, 100);

        graphics.lineStyle(1, 0xFF00FF, 1);
        graphics.moveTo(0, 100);
        graphics.lineTo(0, 0);

    }

}