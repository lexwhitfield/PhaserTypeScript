namespace PhaserGame {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {
            // use this function to load all the other resources 
            // we need for the game.

            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            this.load.image('titlepage', '../img/titlepage.jpg');
            this.load.image('logo', '../img/logo.png');
            this.load.audio('music', '../img/title.mp3');
            this.load.image('player', '../img/01.dodger/player.png');
            this.load.image('enemy', '../img/01.dodger/enemy.png')
        }

        create() {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }

        startMainMenu() {
            // hand-off to the main menu
            this.game.state.start('MainMenu', true, false);
        }

    }

}