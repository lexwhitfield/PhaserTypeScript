var PhaserGame;
(function (PhaserGame) {
    class Boot extends Phaser.State {
        preload() {
            // only load the resources needed for the 
            // loading bar.
            this.load.image('preloadBar', '../img/loader.png');
        }
        create() {
            // initialise core properties of the game
            // number of touch points
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
                this.scale.pageAlignHorizontally = true;
            }
            else {
            }
            // hand over to the Preloader
            this.game.state.start('Preloader', true, false);
        }
    }
    PhaserGame.Boot = Boot;
})(PhaserGame || (PhaserGame = {}));
//# sourceMappingURL=Boot.js.map