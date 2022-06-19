// Declarar variables de elemntos del juego
var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');

background = new Image();
background.src = '../assets/background.png';

bomb = new Image();
bomb.src = '../assets/bomb.png';
var bombX = 310;
var bombY = 10;

var bombWeight = 40; 


// adds event listener for keys
window.onkeydown = function(e) { keyDown(e) };


// this should run once everything is loaded
background.onload = function(){
  var interval = setInterval( function () {
    moveBomb();
    if (bombY == 250){
      clearInterval(interval);
      gameOver();
    }
  }, bombWeight);

}
// ciclo de dibujar
function drawAll(){
  console.log("iniciando ciclo de dibujar");
    context.drawImage(background, 0, 0);
    context.drawImage(bomb, bombX, bombY, 40, 80);
}


// mostrar texto


// reconocer eventos del teclado
function keyDown(e){
  bombY -= 40;
  console.log(bombY);
}

// movimiento de la bomba
function moveBomb(direction=null){
  bombY += 5;
  drawAll();
}

// explotar bomba
function gameOver(){
  alert("the game is over, everyone is dead, starting with the blind guy!");
}


// calificacion 
