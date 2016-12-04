﻿// http://www.photonstorm.com/phaser/advanced-phaser-and-typescript-projects

module PhaserGame {

    export class Game extends Phaser.Game {
        constructor() {
            super(800, 600, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Level1', DodgerLevel, false);

            this.state.start('Boot');
        }
    }

}