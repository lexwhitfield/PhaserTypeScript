module PhaserGame {

    export class DodgerLevel extends Phaser.State {

        player: PhaserGame.Player;
        enemies: PhaserGame.Enemy[];

        create() {

            this.stage.backgroundColor = '#555555';

            this.player = new Player(this.game, 130, 284, MovementMode.MOUSE_AND_KEYBOARD);

            this.enemies = [];
            this.enemies.push(new Enemy(this.game, 70, 120));

        }

        update() {

        }

        render() {

            this.game.debug.inputInfo(32, 32);

        }

    }

}