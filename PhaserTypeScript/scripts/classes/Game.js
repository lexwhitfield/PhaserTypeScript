// http://www.photonstorm.com/phaser/advanced-phaser-and-typescript-projects
var PhaserGame;
(function (PhaserGame) {
    class Game extends Phaser.Game {
        constructor() {
            super(1024, 768, Phaser.AUTO, 'content', null);
            this.state.add('Boot', PhaserGame.Boot, false);
            this.state.add('Preloader', PhaserGame.Preloader, false);
            this.state.add('MainMenu', PhaserGame.MainMenu, false);
            this.state.add('Level1', PhaserGame.DodgerLevel, false);
            this.state.start('Boot');
        }
    }
    PhaserGame.Game = Game;
})(PhaserGame || (PhaserGame = {}));
//# sourceMappingURL=Game.js.map