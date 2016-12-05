module PhaserGame {

    export class Enemy extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'enemy', 0);

            this.anchor.setTo(0.5, 0.5);

            this.game.physics.enable(this);
            this.game.add.existing(this);

        }

        update() {

            // movement and action code goes in here

        }

    }

}