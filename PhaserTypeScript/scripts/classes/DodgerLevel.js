var PhaserGame;
(function (PhaserGame) {
    class DodgerLevel extends Phaser.State {
        create() {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.stage.backgroundColor = '#555555';
            this.player = new PhaserGame.Player(this.game, 512, 384, PhaserGame.MovementMode.KEYBOARD_WASD);
            this.enemies = [];
            for (var i = 0; i < 10; i++) {
                this.enemies.push(new PhaserGame.Enemy(this.game, Math.floor(Math.random() * this.game.width), Math.floor(Math.random() * this.game.height)));
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
    PhaserGame.DodgerLevel = DodgerLevel;
})(PhaserGame || (PhaserGame = {}));
//# sourceMappingURL=DodgerLevel.js.map