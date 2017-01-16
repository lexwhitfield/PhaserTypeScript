/// <reference path="SimplexNoise.ts" />

namespace Civ {

    var game = new Phaser.Game(800, 600, Phaser.WEBGL, 'content', { preload: preload, create: create, update: update });

    var map: Phaser.Tilemap;
    var layer: Phaser.TilemapLayer;
    var tx = 0;
    var ty = 0;
    var cursors: Phaser.CursorKeys;
    var mapWidth: number = 50;
    var mapHeight: number = 35;
    var tileSize: number = 16;

    export function preload() {

        game.load.tilemap('map', '/img/civ/civ.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('overworld', '/img/civ/overworld.png');

    }

    export function create() {

        game.stage.backgroundColor = '#333333';

        map = game.add.tilemap();
        map.tileHeight = tileSize;
        map.tileWidth = tileSize;
        map.addTilesetImage('overworld');

        layer = map.createBlankLayer('layer1', mapWidth, mapHeight, tileSize, tileSize);

        generateMap(mapWidth, mapHeight);

        layer.resizeWorld();

        cursors = game.input.keyboard.createCursorKeys();

    }

    export function generateMap(width: number, height: number) {

        // perlin/simplex or diamond square

        var sn = new Civ.SimplexNoise();

        var heightMap = new Array(width + 1);
        for (var i = 0; i < width + 1; i++) {

            heightMap[i] = new Array(height + 1)

            for (var j = 0; j < height + 1; j++) {

                heightMap[i][j] = sn.noise2D(i, j);

            }

        }

        var tileArray = new Array(width);

        for (var i = 0; i < width; i++) {

            tileArray[i] = new Array(height);

            for (var j = 0; j < height; j++) {

                //calc the neighbours
                var total: number = 0;

                if (heightMap[i][j] === 1) {
                    total += 1;
                }

                if (heightMap[i + 1][j] === 1) {
                    total += 2;
                }

                if (heightMap[i + 1][j + 1] === 1) {
                    total += 4;
                }

                if (heightMap[i][j + 1] === 1) {
                    total += 8;
                }

                // set the tile

                if (total === 0) {
                    // all ocean
                    tileArray[i][j] = 70;
                } 
                else if (total === 1) {
                    tileArray[i][j] = 44;
                }
                else if (total === 2) {
                    tileArray[i][j] = 42;
                }
                else if (total === 3) {
                    tileArray[i][j] = 43;
                }
                else if (total === 4) {
                    tileArray[i][j] = 0;
                }
                else if (total === 6) {
                    tileArray[i][j] = 21;
                }
                else if (total === 7) {
                    tileArray[i][j] = 4;
                }
                else if (total === 8) {
                    tileArray[i][j] = 2;
                }
                else if (total === 9) {
                    tileArray[i][j] = 23;
                }
                else if (total === 11) {
                    tileArray[i][j] = 3;
                }
                else if (total === 12) {
                    tileArray[i][j] = 1;
                }
                else if (total === 13) {
                    tileArray[i][j] = 24;
                }
                else if (total === 14) {
                    tileArray[i][j] = 25;
                }
                else if (total === 15) {
                    // all grass
                    tileArray[i][j] = randomGrassTile();
                }
                
                map.putTile(tileArray[i][j], i, j, layer);

            }

        }

        //var json = {
        //    height: height,
        //    layers: [
        //        {
        //            data: tileArray,
        //            height: 32,
        //            name: "Tile Layer 1",
        //            opacity: 1,
        //            type: "tilelayer",
        //            visible: true,
        //            width: 32,
        //            x: 0,
        //            y: 0
        //        }],
        //    orientation: "orthogonal",
        //    tileheight: 16,
        //    tilesets: [
        //        {
        //            firstgid: 1,
        //            image: "..\/Downloads\/overworld.png",
        //            imageheight: 144,
        //            imagewidth: 336,
        //            margin: 0,
        //            name: "overworld",
        //            spacing: 0,
        //            tileheight: 16,
        //            tilewidth: 16
        //        }],
        //    tilewidth: 16,
        //    version: 1,
        //    width: 32
        //};

    }

    function randomGrassTile() {
        var n = Math.floor(Math.random() * 6);

        if (n > 1) {
            return 22;
        }
        else if (n === 0) {
            return 45;
        }
        else if (n === 1) {
            return 46;
        }
    }

    function randomWaterTile() {
        var n = Math.floor(Math.random() * 3);

        if (n === 0) {
            return 70;
        }
        else if (n === 1) {
            return 171;
        }
        else if (n === 2) {
            return 172;
        }
    }

    export function update() {

        if (cursors.up.isDown) {


        } else if (cursors.down.isDown) {


        }

        if (cursors.left.isDown) {


        } else if (cursors.right.isDown) {


        }

    }

}