var Tutorials;
(function (Tutorials) {
    var Display;
    (function (Display) {
        var T22;
        (function (T22) {
            var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, update: update });
            var star;
            var texture1;
            var texture2;
            var texture3;
            var stars = [];
            function preload() {
                game.load.image('star', '/img/tutorials/sprites/bullet.png');
            }
            function create() {
                star = game.make.sprite(0, 0, 'star');
                texture1 = game.add.renderTexture(800, 600, 'texture1');
                texture2 = game.add.renderTexture(800, 600, 'texture2');
                texture3 = game.add.renderTexture(800, 600, 'texture3');
                game.add.sprite(0, 0, texture1);
                game.add.sprite(0, 0, texture2);
                game.add.sprite(0, 0, texture3);
                var t = texture1;
                var s = 4;
                // each 100 stars sit on a seperate layer (t) with a different speed (s)
                for (var i = 0; i < 300; i++) {
                    if (i == 100) {
                        s = 6;
                        t = texture2;
                    }
                    else if (i == 200) {
                        s = 7;
                        t = texture3;
                    }
                    stars.push({
                        x: game.world.randomX, y: game.world.randomY, speed: s, texture: t
                    });
                }
            }
            function update() {
                for (var i = 0; i < 300; i++) {
                    stars[i].y += stars[i].speed;
                    if (stars[i].y > 600) {
                        // star has gone off the bottom of the screen, wrap it around to the top
                        stars[i].x = game.world.randomX;
                        stars[i].y = -32;
                    }
                    if (i == 0 || i == 100 || i == 200) {
                        // if we get to the first star of a layer we clear the texture
                        stars[i].texture.renderXY(star, stars[i].x, stars[i].y, true);
                    }
                    else {
                        stars[i].texture.renderXY(star, stars[i].x, stars[i].y, false);
                    }
                }
            }
        })(T22 = Display.T22 || (Display.T22 = {}));
    })(Display = Tutorials.Display || (Tutorials.Display = {}));
})(Tutorials || (Tutorials = {}));
//# sourceMappingURL=Game.js.map