namespace Tutorials.Display.T17 {

    var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'content', { preload: preload, create: create, update: update });

    var renderTexture: Phaser.RenderTexture;
    var renderTexture2: Phaser.RenderTexture;
    var currentTexture: Phaser.RenderTexture;
    var outputSprite: Phaser.Sprite;
    var stuffContainer: Phaser.Group;
    var count: number = 0;

    function preload() {

        game.load.image('spin1', '/img/tutorials/sprites/spinObj_01.png');
        game.load.image('spin2', '/img/tutorials/sprites/spinObj_02.png');
        game.load.image('spin3', '/img/tutorials/sprites/spinObj_03.png');
        game.load.image('spin4', '/img/tutorials/sprites/spinObj_04.png');
        game.load.image('spin5', '/img/tutorials/sprites/spinObj_05.png');
        game.load.image('spin6', '/img/tutorials/sprites/spinObj_06.png');
        game.load.image('spin7', '/img/tutorials/sprites/spinObj_07.png');
        game.load.image('spin8', '/img/tutorials/sprites/spinObj_08.png');

    }

    function create() {

        renderTexture = game.add.renderTexture(800, 600, 'texture1');
        renderTexture2 = game.add.renderTexture(800, 600, 'texture2');
        currentTexture = renderTexture;

        outputSprite = game.add.sprite(400, 300, currentTexture);

        outputSprite.anchor.x = 0.5;
        outputSprite.anchor.y = 0.5;

        stuffContainer = game.add.group();
        stuffContainer.x = 800 / 2;
        stuffContainer.y = 600 / 2;

        for (var i = 0; i < 20; i++) {

            var item = stuffContainer.create(Math.random() * 400 - 200, Math.random() * 400 - 200, game.rnd.pick(game.cache.getKeys(Phaser.Cache.IMAGE)));
            item.anchor.setTo(0.5, 0.5);

        }

        count = 0;

    }

    function update() {

        stuffContainer.addAll('rotation', 0.1, false, false);

        count += 0.01;

        // switch textures
        var temp = renderTexture;
        renderTexture = renderTexture2;
        renderTexture2 = temp;

        outputSprite.setTexture(renderTexture);

        stuffContainer.rotation -= 0.01;
        outputSprite.scale.x = outputSprite.scale.y = 1 + Math.sin(count) * 0.2;

        renderTexture2.renderXY(game.stage, 0, 0, true);

    }

}