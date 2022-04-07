var canvas, background;

//Vars de base de datos
var gameState = 0;
var playerCount = 0;
var distance = 0;
var allPlayers;
var database;

var form, player, game;


//Imágenes
function setup() {
    canvas = createCanvas(1250, 600);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

//Indicar que el juego empiece 
function draw() {

    //Cambia estado al haber 2 jugadores
    if (playerCount == 2) {
        game.update(1);
    }

    //Si está en 1, inicia
    if (gameState == 1) {
        game.play();
    }

}