var Tutorials;
(function (Tutorials) {
    var Display;
    (function (Display) {
        var T4;
        (function (T4) {
            var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: create });
            function create() {
                var graphics = game.add.graphics(0, 0);
                // graphics.lineStyle(2, 0xffd900, 1);
                graphics.beginFill(0xFF0000, 1);
                graphics.drawCircle(300, 300, 100);
            }
        })(T4 = Display.T4 || (Display.T4 = {}));
    })(Display = Tutorials.Display || (Tutorials.Display = {}));
})(Tutorials || (Tutorials = {}));
//# sourceMappingURL=Game.js.map