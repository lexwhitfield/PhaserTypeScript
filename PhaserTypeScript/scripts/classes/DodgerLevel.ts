namespace PhaserGame {

    export class DodgerLevel extends Phaser.State {

        player: PhaserGame.Player;
        enemies: PhaserGame.Enemy[];

        create() {

            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.stage.backgroundColor = '#555555';

            this.player = new Player(this.game, 512, 384, MovementMode.KEYBOARD_WASD);

            this.enemies = [];

            for (var i = 0; i < 10; i++) {

                this.enemies.push(new Enemy(this.game, Math.floor(Math.random() * this.game.width), Math.floor(Math.random() * this.game.height)));
            }

        }

        update() {

            for (var enemy in this.enemies) {
                this.game.physics.arcade.collide(this.player, enemy);
            }

        }

        render() {

            this.game.debug.inputInfo(32, 32);
            this.game.debug.body(this.player);

        }

    }

}