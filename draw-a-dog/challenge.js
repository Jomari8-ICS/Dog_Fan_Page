var timeLeft = 30;
var elem = document.getElementById('Timer');
var startButton = document.getElementById('startButton');

startButton.addEventListener('click', function() {
  timerId = setInterval(countdown, 1000);
});

function countdown() {
  if (timeLeft == 0) {
    clearInterval(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}


function populateBoard(size){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;


let amount = size * size
for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
}
}

populateBoard(80);


function changeSize(input) {
    if (input >=2 && input <=100) {
        populateBoard(input)
    } else {
        console.log("too many squares")
    }
}

function colorSquare() {
    this.style.backgroundColor = "black";
}

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
}