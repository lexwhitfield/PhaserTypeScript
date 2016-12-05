var PhaserGame;
(function (PhaserGame) {
    class Enemy extends Phaser.Sprite {
        constructor(game, x, y) {
            super(game, x, y, 'enemy', 0);
            this.anchor.setTo(0.5, 0.5);
            this.game.physics.enable(this);
            this.game.add.existing(this);
        }
        update() {
            // movement and action code goes in here
        }
    }
    PhaserGame.Enemy = Enemy;
})(PhaserGame || (PhaserGame = {}));
//# sourceMappingURL=Enemy.js.map