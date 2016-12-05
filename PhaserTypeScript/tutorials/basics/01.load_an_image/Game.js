var Tutorials;
(function (Tutorials) {
    var T1;
    (function (T1) {
        var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });
        function preload() {
            game.load.image('einstein', '/img/tutorials/ra_einstein.png');
        }
        function create() {
            game.add.sprite(0, 0, 'einstein');
        }
    })(T1 = Tutorials.T1 || (Tutorials.T1 = {}));
})(Tutorials || (Tutorials = {}));
//# sourceMappingURL=Game.js.map