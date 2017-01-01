var Tutorials;
(function (Tutorials) {
    var Display;
    (function (Display) {
        var T15;
        (function (T15) {
            var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: create });
            var graphics;
            function create() {
                graphics = game.add.graphics(300, 200);
                drawShape(0x027A71, 0x02FDEB);
                graphics.inputEnabled = true;
                graphics.input.useHandCursor = true;
                graphics.events.onInputDown.add(onDown, this);
                graphics.events.onInputUp.add(onUp, this);
                graphics.events.onInputOver.add(onOver, this);
                graphics.events.onInputOut.add(onOut, this);
            }
            function drawShape(fill, style) {
                graphics.clear();
                graphics.beginFill(fill);
                graphics.lineStyle(4, style, 1);
                graphics.moveTo(0, 0);
                graphics.lineTo(250, 0);
                graphics.lineTo(250, 200);
                graphics.lineTo(125, 100);
                graphics.lineTo(0, 200);
                graphics.lineTo(0, 0);
                graphics.endFill();
            }
            function onOver() {
                drawShape(0xAB3602, 0xEB6702);
            }
            function onDown() {
                drawShape(0x717A02, 0xEBFD02);
            }
            function onUp() {
                drawShape(0x027A71, 0x02FDEB);
            }
            function onOut() {
                drawShape(0x027A71, 0x02FDEB);
            }
        })(T15 = Display.T15 || (Display.T15 = {}));
    })(Display = Tutorials.Display || (Tutorials.Display = {}));
})(Tutorials || (Tutorials = {}));
//# sourceMappingURL=Game.js.map