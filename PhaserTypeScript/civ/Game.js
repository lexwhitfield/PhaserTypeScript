var Civ;
(function (Civ) {
    var game = new Phaser.Game(800, 600, Phaser.WEBGL, 'content', { preload: preload, create: create, update: update });
    var map;
    var texture;
    var stamp;
    var tx = 0;
    var ty = 0;
    var cursors;
    function preload() {
        game.load.tilemap('map', '/img/civ/civ.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.spritesheet('tiles', '/img/civ/overworld.png', 16, 16);
    }
    function create() {
        map = game.add.tilemap('map');
        map.setCollisionByExclusion([7, 32, 35, 36, 47]);
        game.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        stamp = game.add.sprite(0, 0, 'tiles', 3);
        texture = game.add.renderTexture(game.width, game.height);
        var rtMap = game.add.sprite(0, 0, texture);
        rtMap.fixedToCamera = true;
        cursors = game.input.keyboard.createCursorKeys();
        renderMap();
    }
    function generateMap(width, height) {
        // WATER = [70,171,172]
        // GRASS = [22,45,46]
        /*
            0   1   2
            21  22  23
            42  43  44
        */
        // perlin/simplex or diamond square
        var heightMap = new Array(width);
        for (var i = 0; i < width; i++) {
            heightMap[i] = new Array(height);
            for (var j = 0; j < height; j++) {
                if (i < 5 || i > width - 6 || j < 5 || j > height - 6) {
                    heightMap[i][j] = 70;
                }
                else {
                    heightMap[i][j] = 22;
                }
            }
        }
        var tileArray = new Array(width * height);
        for (var i = 0; i < width; i++) {
            for (var j = 0; j < height; j++) {
                tileArray[i * width + height] = heightMap[i][j];
            }
        }
        var json = {
            height: height,
            layers: [
                {
                    data: tileArray,
                    height: 32,
                    name: "Tile Layer 1",
                    opacity: 1,
                    type: "tilelayer",
                    visible: true,
                    width: 32,
                    x: 0,
                    y: 0
                }],
            orientation: "orthogonal",
            tileheight: 16,
            tilesets: [
                {
                    firstgid: 1,
                    image: "..\/Downloads\/overworld.png",
                    imageheight: 144,
                    imagewidth: 336,
                    margin: 0,
                    name: "overworld",
                    spacing: 0,
                    tileheight: 16,
                    tilewidth: 16
                }],
            tilewidth: 16,
            version: 1,
            width: 32
        };
    }
    function update() {
        if (game.camera.x !== tx || game.camera.y !== ty) {
            renderMap();
        }
        if (cursors.up.isDown) {
        }
        else if (cursors.down.isDown) {
        }
        if (cursors.left.isDown) {
        }
        else if (cursors.right.isDown) {
        }
    }
    function renderMap() {
        var cx = Phaser.Math.snapToFloor(game.camera.x, 16) / 16;
        var cy = Phaser.Math.snapToFloor(game.camera.y, 16) / 16;
        var tile = null;
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
})(Civ || (Civ = {}));
//# sourceMappingURL=Game.js.map