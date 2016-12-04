﻿module PhaserGame {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            this.load.image('titlepage', '../img/titlepage.jpg');
            this.load.image('logo', '../img/logo.png');
            this.load.audio('music', '../img/title.mp3');
            this.load.spritesheet('simon', '../img/simon.png', 58, 96, 5);
            this.load.image('level1', '../img/level1.png');
        }

        create() {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }

        startMainMenu() {
            this.game.state.start('MainMenu', true, false);
        }
    }

}