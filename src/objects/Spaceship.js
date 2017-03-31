class PlayerSpaceship extends Phaser.Sprite {

let upKey, downKey, leftKey, rightKey, spaceKey;
        constructor(game) {

                super(this, game, 100, 100, 'spaceship');

                //  Register the keys.
                this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
                this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
                this.upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
                this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
                this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

                //  Stop the following keys from propagating up to the browser
                game.input.keyboard.addKeyCapture([Phaser.Keyboard.A, Phaser.Keyboard.D, Phaser.Keyboard.W, Phaser.Keyboard.S, Phaser.Keyboard.SPACEBAR]);

                this.anchor.setTo(0.5, 0.5);

                game.add.existing(this);
        }

        update() {
                if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                        console.log("w pressed");
                        this.frame = 1;
                        this.y -= 5;
                }
                else
                        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                                console.log("s pressed");
                                this.frame = 4;
                                this.y += 5;
                        }
                        else
                                if ((game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))) {
                                        this.x += 5;
                                }
                                else
                                        if ((game.input.keyboard.isDown(Phaser.Keyboard.LEFT))) {
                                                this.x -= 5;
                                        }
                                        else {
                                                this.frame = 0;
                                        }
        }

        fireBullet = function () {
                if (game.time.now > bulletTime) {
                        bullet = bullets.getFirstExists(false);

                        if (bullet) {
                                bullet.reset(sprite.body.x + 16, sprite.body.y + 16);
                                bullet.lifespan = 2000;
                                bullet.rotation = sprite.rotation;
                                game.physics.arcade.velocityFromRotation(sprite.rotation, 400, bullet.body.velocity);
                                bulletTime = game.time.now + 50;
                        }
                }
        }
        //Spaceship = function (game) {
        //Phaser.Sprite.call(this, game, 100, 100, 'spaceship');
}

export default PlayerSpaceship;
//Spaceship.prototype = Object.create(Phaser.Sprite.prototype);
//Spaceship.prototype.constructor = Spaceship;

// Spaceship.prototype.update = function () {

// };

//Spaceship.prototype.

//};