﻿namespace Tutorials.Display.T1 {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: create });

    function create() {
        var graphics: Phaser.Graphics = game.add.graphics(game.world.centerX, game.world.centerY);

        graphics.lineStyle(8, 0xffd900);

        graphics.arc(0, 0, 135, 0, Math.PI / 2, false);

        // move graphics cursor
        //graphics.moveTo(-100, -100);

        // resets the line style
        graphics.lineStyle(0);

        // to draw solid shapes, need to start and end fill as if it were a spritebatch
        graphics.beginFill(0xff3300);

        graphics.arc(0, 0, 135, 0, Math.PI / 2, true);

        graphics.endFill();
    }
}