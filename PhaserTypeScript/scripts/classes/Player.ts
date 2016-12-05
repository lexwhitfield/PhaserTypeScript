import {PhaserCommon} from './scripts/common';
let Common = new PhaserCommon.Functions();

module PhaserGame {

    export enum MovementMode {

        MOVE_TO_MOUSE,
        KEYBOARD_DIR,
        KEYBOARD_WASD,
        MOUSE_AND_KEYBOARD

    }

    export class Player extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number, movemode: MovementMode) {

            super(game, x, y, 'player', 0);

            this.anchor.setTo(0.5, 0.5);

            this.MoveMode = movemode;
            this.DisableInertia = true;

            this.game.physics.enable(this);
            this.game.add.existing(this);

            this.MaxSpeed = 150;

        }

        MoveMode: MovementMode;
        DisableInertia: boolean;
        MaxSpeed: number;

        update() {

            if (this.DisableInertia) {
                this.body.velocity.x = 0;
                this.body.velocity.y = 0;
            }

            switch (this.MoveMode) {

                case MovementMode.MOVE_TO_MOUSE:
                    this.move_to_mouse();
                    break;

                case MovementMode.KEYBOARD_DIR:
                    this.keyboard_dir();
                    break;

                case MovementMode.KEYBOARD_WASD:
                    this.keyboard_wasd();
                    break;

                case MovementMode.MOUSE_AND_KEYBOARD:
                    this.mouse_and_keyboard();
                    break;

            }

        }

        move_to_mouse() {

            //  If the sprite is > 8px away from the pointer then let's move to it
            if (this.game.physics.arcade.distanceToPointer(this, this.game.input.activePointer) > 8) {
                //  Make the object seek to the active pointer (mouse or touch).
                this.game.physics.arcade.moveToPointer(this, 300);
            }
            else {
                //  Otherwise turn off velocity because we're close enough to the pointer
                this.body.velocity.set(0);
            }

        }

        keyboard_dir() {

            // set movement speed by directional arrow keys
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.velocity.x = -150;
                this.scale.x = (this.scale.x == 1) ? -1 : this.scale.x;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.velocity.x = 150;
                this.scale.x = (this.scale.x == -1) ? 1 : this.scale.x;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.body.velocity.y = 150;
                this.scale.y = (this.scale.y == -1) ? 1 : this.scale.y;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.body.velocity.y = -150;
                this.scale.y = (this.scale.y == 1) ? -1 : this.scale.y;
            }

        }

        keyboard_wasd() {

            // set movement speed by w, a, s and d keys
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
                // turn left
                this.rotation += 0.1;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                // turn right
                this.rotation -= 0.1;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
                // move forward
                this.game.physics.arcade.accelerationFromRotation(this.rotation, 5000, this.body.acceleration);
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
                // stop / move backwards
                this.body.velocity.y = -Math.sin(this.angle) * this.MaxSpeed;
                this.body.velocity.x = -Math.cos(this.angle) * this.MaxSpeed;
            }

        }

        mouse_and_keyboard() {

            // angleToPointer returns angle in radians (-1 to +1). this.angle expects angle in degrees
            // angleToPointer returns angle to the x-axis so -90 to offset 0 degrees to straight upwards
            this.angle = Common.PhaserCommon.Functions.radians_to_degrees(this.game.physics.arcade.angleToPointer(this)) - 90;

            //TODO: figure out the math for strafing

            // wasd keys
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
                // strafe left
                //this.body.velocity.x = -this.MaxSpeed;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                // strafe right
                //this.body.velocity.x = this.MaxSpeed;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
                // move forward
                this.body.velocity.y = Math.sin(this.angle) * this.MaxSpeed;
                this.body.velocity.x = Math.cos(this.angle) * this.MaxSpeed;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
                // stop / move backwards
                this.body.velocity.y = -Math.sin(this.angle) * this.MaxSpeed;
                this.body.velocity.x = -Math.cos(this.angle) * this.MaxSpeed;
            }

            // cap speed

        }

        

    }

}