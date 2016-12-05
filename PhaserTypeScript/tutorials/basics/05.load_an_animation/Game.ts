namespace Tutorials.T5 {
    var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });

    function preload() {
        game.load.atlasJSONHash('bot', '/img/tutorials/sprites/running_bot.png', '/img/tutorials/sprites/running_bot.json');
    }

    function create() {
        var bot: Phaser.Sprite = game.add.sprite(200, 200, 'bot');

        bot.animations.add('run');

        bot.animations.play('run', 15, true);
    }
}