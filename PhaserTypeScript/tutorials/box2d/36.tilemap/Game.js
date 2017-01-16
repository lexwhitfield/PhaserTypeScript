var Tutorials;
(function (Tutorials) {
    var Box2D;
    (function (Box2D) {
        var T36;
        (function (T36) {
            var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'content', { preload: preload, create: create, update: update, render: render });
            function preload() {
                game.load.tilemap('map', '/img/tutorials/tilemaps/maps/collision_test.json', null, Phaser.Tilemap.TILED_JSON);
                game.load.image('ground_1x1', '/img/tutorials/tilemaps/tiles/ground_1x1.png');
                game.load.image('walls_1x2', '/img/tutorials/tilemaps/tiles/walls_1x2.png');
                game.load.image('tiles2', '/img/tutorials/tilemaps/tiles/tiles2.png');
            }
            var map;
            var layer;
            var cursors;
            function create() {
                game.stage.backgroundColor = '#2d2d2d';
                map = game.add.tilemap('map');
                map.addTilesetImage('ground_1x1');
                map.addTilesetImage('walls_1x2');
                map.addTilesetImage('tiles2');
                layer = map.createLayer('Tile Layer 1');
                layer.resizeWorld();
                cursors = game.input.keyboard.createCursorKeys();
            }
            function update() {
                if (cursors.left.isDown) {
                }
                else if (cursors.right.isDown) {
                }
                else {
                }
                if (cursors.up.isDown) {
                }
                else if (cursors.down.isDown) {
                }
            }
            function render() {
            }
        })(T36 = Box2D.T36 || (Box2D.T36 = {}));
    })(Box2D = Tutorials.Box2D || (Tutorials.Box2D = {}));
})(Tutorials || (Tutorials = {}));
//# sourceMappingURL=Game.js.map