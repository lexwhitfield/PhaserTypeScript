$(document).ready(function () {
    var game = new Phaser.Game(1280, 800, Phaser.AUTO, 'gameContainer');
    game.state.add('main', new mainState(game));
    game.state.start('main');
});

var mainState = function (game) {
    this.player;
};

//TODO: add simple moving enemies, 1 direction
//TODO: wrap enemy movement around screen, like in asteroids
//TODO: improve enemy behaviour to track player
//TODO: switch movement controls to arrow keys and have mouse as weapon pointer
//TODO: add bullets and allow attacking
//TODO: rotate player sprite to face pointer

mainState.prototype = {
    preload: function () {
        // load resources
        this.game.load.image('player', 'img/01.Dodger/cockpitRed_2.png');
        this.game.load.image('enemy', 'img/01.Dodger/cockpitYellow_0.png');
        this.enemyCount = 10;
    },
    create: function () {
        // initialise data structures, etc

        this.scale.pageAlignHorizontally = true;

        this.player = this.game.add.sprite(400, 320, 'player');
        this.player.anchor.setTo(0.5, 0.5); // set pivot to the middle
        
        //  And enable the Sprite to have a physics body:
        this.game.physics.arcade.enable(this.player);

        this.enemies = [];

        for (var i = 0; i < this.enemyCount; i++) {
            this.enemies[i] = this.game.add.sprite(Math.round(Math.random() * 1280), Math.round(Math.random() * 800), 'enemy');
            this.enemies[i].anchor.setTo(0.5, 0.5);
            this.game.physics.arcade.enable(this.enemies[i]);
        }
    },
    update: function () {
        // poll for inputs
        //  If the sprite is > 8px away from the pointer then let's move to it
        if (this.game.physics.arcade.distanceToPointer(this.player, this.game.input.activePointer) > 8) {
            //  Make the object seek to the active pointer (mouse or touch).
            this.game.physics.arcade.moveToPointer(this.player, 300);
        }
        else {
            //  Otherwise turn off velocity because we're close enough to the pointer
            this.player.body.velocity.set(0);
        }        
    },
    render: function () {
        this.game.debug.inputInfo(32, 32);
    }
};
