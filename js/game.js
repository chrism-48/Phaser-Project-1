// create a new scene
let gameScene = new Phaser.Scene('Game');


// Load assets
gameScene.preload = function() {
    this.load.image('road', 'assets/background-1_2.png');
    this.load.image('car', 'assets/car-top_view.png');

};



// Called once after preload ends
gameScene.create = function() {
    // Create bg sprite
    this.add.image(318, 50, 'road');
    this.add.image(380, 275, 'car');



};


// set the configuration of the game
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
};


//create a new game, pass the configuration
let game = new Phaser.Game(config);