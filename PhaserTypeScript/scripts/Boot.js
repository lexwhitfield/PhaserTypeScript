var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PhaserGame;
(function (PhaserGame) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', '../img/loader.png');
        };
        Boot.prototype.create = function () {
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
        };
        return Boot;
    }(Phaser.State));
    PhaserGame.Boot = Boot;
})(PhaserGame || (PhaserGame = {}));
//# sourceMappingURL=Boot.js.map