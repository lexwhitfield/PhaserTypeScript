var Tutorials;
(function (Tutorials) {
    var T5;
    (function (T5) {
        var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });
        function preload() {
            game.load.atlasJSONHash('bot', '/img/tutorials/sprites/running_bot.png', '/img/tutorials/sprites/running_bot.json');
        }
        function create() {
            var bot = game.add.sprite(200, 200, 'bot');
            bot.animations.add('run');
            bot.animations.play('run', 15, true);
        }
    })(T5 = Tutorials.T5 || (Tutorials.T5 = {}));
})(Tutorials || (Tutorials = {}));
//# sourceMappingURL=Game.js.map