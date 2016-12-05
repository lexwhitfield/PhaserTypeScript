var PhaserGame;
(function (PhaserGame) {
    class Level1 extends Phaser.State {
        create() {
            this.background = this.add.sprite(0, 0, 'level1');
            this.music = this.add.audio('music', 1, false);
            this.music.play();
            this.player = new PhaserGame.Player(this.game, 130, 284, PhaserGame.MovementMode.KEYBOARD_DIR);
            this.game.physics.enable(this.player);
        }
    }
    PhaserGame.Level1 = Level1;
})(PhaserGame || (PhaserGame = {}));
//# sourceMappingURL=Level1.js.map