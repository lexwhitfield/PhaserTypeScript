var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    SimpleGame.prototype.preload = function () {
        //this.game.load.image('logo', 'phaser2.png');
    };
    SimpleGame.prototype.create = function () {
    };
    return SimpleGame;
}());
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map