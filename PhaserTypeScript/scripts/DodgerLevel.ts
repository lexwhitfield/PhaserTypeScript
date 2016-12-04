module PhaserGame {

    export class DodgerLevel extends Phaser.State {

        player: PhaserGame.Player;

        create() {

            this.stage.backgroundColor = '#555555';

            this.player = new Player(this.game, 130, 284);
            this.game.physics.enable(this.player);

        }

        update() {

        }

    }

}