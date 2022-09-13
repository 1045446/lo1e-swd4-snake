
document.getElementById('snake');

let canvas = document.getElementById("snake");
let ctx = canvas.getContext("2d");

let snakeX = 190;
let snakeY = 190;

function drawBackground(){
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 400, 400);
}
drawSnake();

function drawSnake() {
    ctx.fillStyle = "white";
    ctx.fillRect(snakeX, snakeY, 20, 20);
}


function update() {
snakeX= snakeX +20;

drawBackground();
drawSnake();
}

drawBackground();
drawSnake();
setInterval(update, 1000)

