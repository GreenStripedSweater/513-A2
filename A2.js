// Creating variables I need for the js file 
var DEBUG = true;
var timer;
var minutes = 0, seconds = 0;
var secondsLeft = 300;

var leftPressed = false, 
    rightPressed = false,
    upPressed = false,
    downPressed = false;
var speed = 2.5;
var gameTimer;
var interval;

var LEFT = 65,
    RIGHT = 68,
    UP = 87,
    DOWN = 83;


// Where I will make the walls for the maze 
var wallData = [];

// Drawing th walls using pop
function drawWalls() {}

// This is where we are appending the walls (creating them)
function createWalls() {}

// Spawn the walls using jQuery maybe?
function spawnWalls() {}

// Where the treasures (that float will go)
var treasureData = [];

// Drawing the Treasure
function drawTreasure() {}

// Creating the Treasure
function createTreasure() {}

// Spawn Treasure - will use jQuery maybe?
function spawnTreasure() {}

// Where the time will go:
function makeTimer() {}

// Updating the player's movements and handling collisions
function update() {}

// Processing the players running into obstacles
function processCollisions() {}

// Chekcing what the collisions are between
function isCollisionBetween(a,b) {}

// Updating the players movements from where they are on the screen 
function updateMovement() {}

// Creating button functions 
