namespace Tutorials.Display.T22 {

    var game = new Phaser.Game(800, 600, Phaser.WEBGL, 'content', { preload: preload, create: create, update: update });

    var map: Phaser.Tilemap;
    var texture: Phaser.RenderTexture;
    var stamp: Phaser.Sprite;
    var tx = 0;
    var ty = 0;
    var cursors: Phaser.CursorKeys;
    var sprite: Phaser.Sprite;
    var emitter: Phaser.Particles.Arcade.Emitter;

    function preload() {

        game.load.tilemap('level3', '/img/tutorials/tilemaps/maps/cybernoid.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.spritesheet('tiles', '/img/tutorials/tilemaps/tiles/cybernoid.png', 16, 16);
        game.load.image('phaser', '/img/tutorials/sprites/phaser-ship.png');
        game.load.image('chunk', '/img/tutorials/sprites/chunk.png');

    }

    function create() {

        map = game.add.tilemap('level3');
        map.setCollisionByExclusion([7, 32, 35, 36, 47]);

        game.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        stamp = game.add.sprite(0, 0, 'tiles', 3);

        texture = game.add.renderTexture(game.width, game.height);

        var rtMap = game.add.sprite(0, 0, texture);
        rtMap.fixedToCamera = true;

        cursors = game.input.keyboard.createCursorKeys();

        emitter = game.add.emitter(0, 0, 200);

        emitter.makeParticles('chunk');
        emitter.minRotation = 0;
        emitter.maxRotation = 0;
        emitter.gravity = 150;
        emitter.bounce.setTo(0.5, 0.5);

        sprite = game.add.sprite(300, 90, 'phaser');
        sprite.anchor.setTo(0.5);

        game.physics.enable(sprite);

        sprite.body.tilePadding.setTo(32, 32);

        game.camera.follow(sprite);

        renderMap();

    }

    function update() {

        if (game.camera.x !== tx || game.camera.y !== ty) {

            renderMap();

        }

        sprite.body.velocity.set(0);

        if (cursors.up.isDown) {

            sprite.body.velocity.y = -200;
            particleBurst();

        } else if (cursors.down.isDown) {

            sprite.body.velocity.y = 200;
            particleBurst();

        }

        if (cursors.left.isDown) {

            sprite.body.velocity.x = -200;
            sprite.scale.x = -1; // flips sprite
            particleBurst();

        } else if (cursors.right.isDown) {

            sprite.body.velocity.x = 200;
            sprite.scale.x = 1; // flips sprite
            particleBurst();

        }

    }

    function renderMap() {

        var cx = Phaser.Math.snapToFloor(game.camera.x, 16) / 16;
        var cy = Phaser.Math.snapToFloor(game.camera.y, 16) / 16;

        var tile: Phaser.Tile = null;

        var w = cx + 50;
        var h = cy + 38;
        var dx = 0;
        var dy = 0;
        var cls = true;

        for (var y = cy; y < h; y++) {

            for (var x = cx; x < w; x++) {

                tile = map.getTile(x, y);

                if (tile) {

                    stamp.frame = tile.index - 1;
                    texture.renderXY(stamp, dx, dy, cls);
                    cls = false;

                }

                dx += 16;

            }

            dx = 0;
            dy += 16;

        }

        tx = game.camera.x;
        ty = game.camera.y;

    }

    function particleBurst() {

        emitter.x = sprite.x;
        emitter.y = sprite.y;
        emitter.start(true, 2000, null, 1);

    }

}