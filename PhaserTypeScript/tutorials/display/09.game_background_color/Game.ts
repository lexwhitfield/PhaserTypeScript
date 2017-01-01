
namespace Tutorials.Display.T9 {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });

    function preload() {

        game.load.image('hotdog', '/img/tutorials/sprites/hotdog.png');

    }

    function create() {

        game.stage.backgroundColor = '#4488AA';
        game.stage.backgroundColor = 0x4488aa;
        game.stage.backgroundColor = 'rgb(68, 136, 170)';
        game.stage.backgroundColor = 'rgba(68, 136, 170, 0.5)';

        game.add.image(game.world.centerX, game.world.centerY, 'hotdog').anchor.setTo(0.5);

        // click to change background color
        game.input.onDown.add(changeColor, this);

    }

    function changeColor() {

        var c = Phaser.Color.getRandomColor(50, 255, 255);

        game.stage.backgroundColor = c;
        
    }

}