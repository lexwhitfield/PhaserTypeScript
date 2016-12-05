var Tutorials;
(function (Tutorials) {
    var T3;
    (function (T3) {
        var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });
        var tween;
        var prev = -400;
        var t = Date.now();
        var sprite;
        function preload() {
            game.forceSingleUpdate = true;
            game.load.image('einstein', '/img/tutorials/assets/ra_einstein.png');
        }
        function create() {
            sprite = game.add.sprite(-400, 0, 'einstein');
            tween = game.add.tween(sprite);
            tween.to({ x: 800 }, 5000, Phaser.Easing.Linear.None, true, 0);
        }
    })(T3 = Tutorials.T3 || (Tutorials.T3 = {}));
})(Tutorials || (Tutorials = {}));
//# sourceMappingURL=Game.js.map