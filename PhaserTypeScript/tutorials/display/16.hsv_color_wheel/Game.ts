﻿namespace Tutorials.Display.T16 {

    // painting won't work unless Phaser.Canvas is used
    var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'content', { create: create });

    var i = 0;
    var bmd: Phaser.BitmapData;
    var colors: Phaser.ColorComponents[];

    function create() {

        bmd = game.add.bitmapData(800, 600);

        game.add.sprite(0, 0, bmd);

        colors = Phaser.Color.HSVColorWheel();

        game.input.addMoveCallback(paint, this);
        game.input.addMoveCallback(paint2, this);
        game.input.addMoveCallback(paint3, this);
        game.input.addMoveCallback(paint4, this);
        game.input.addMoveCallback(paint5, this);

        game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.addOnce(remove, this);

    }

    function remove() {

        game.input.deleteMoveCallback(paint3, this);

    }

    function paint(pointer: Phaser.Pointer, x: number, y: number) {

        if (pointer.isDown) {

            bmd.circle(x, y, 16, colors[i].rgba);

            i = Phaser.Math.wrapValue(i, 1, 359);

        }

    }

    function paint2(pointer: Phaser.Pointer, x: number, y: number) {

        if (pointer.isDown) {

            bmd.circle(x, y + 64, 8, colors[i].rgba);

        }

    }

    function paint3(pointer: Phaser.Pointer, x: number, y: number) {

        if (pointer.isDown) {

            bmd.circle(x, y - 64, 8, colors[i].rgba);

        }

    }

    function paint4(pointer: Phaser.Pointer, x: number, y: number) {

        if (pointer.isDown) {

            bmd.circle(x - 64, y, 8, colors[i].rgba);

        }

    }

    function paint5(pointer: any, x: number, y: number) {

        if (pointer.isDown) {

            bmd.circle(x + 64, y, 8, colors[i].rgba);

        }

    }

}