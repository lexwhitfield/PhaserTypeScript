var Tutorials;
(function (Tutorials) {
    var T2;
    (function (T2) {
        var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create });
        var text;
        var counter = 0;
        function preload() {
            game.load.image('einstein', '/img/tutorials/ra_einstein.png');
        }
        function create() {
            var image = game.add.sprite(0, 0, 'einstein');
            // set image origin to it's center
            image.anchor.setTo(0.5);
            // move image to the middle of the screen
            image.position.set(400, 300);
            image.inputEnabled = true;
            text = game.add.text(250, 16, '', { fill: '#ffffff' });
            image.events.onInputDown.add(listener, this);
        }
        function listener() {
            counter++;
            text.text = 'You clicked ' + counter + ' times!';
        }
    })(T2 = Tutorials.T2 || (Tutorials.T2 = {}));
})(Tutorials || (Tutorials = {}));
//# sourceMappingURL=Game.js.map