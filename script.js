
//Initialize reset button
const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', (event) => resetField());
//Initialize board
const board = document.getElementById('board');
//Initialize squares
const square_1 = document.getElementById('1')
const square_2 = document.getElementById('2')
const square_3 = document.getElementById('3')
const square_4 = document.getElementById('4')
const square_5 = document.getElementById('5')
const square_6 = document.getElementById('6')
const square_7 = document.getElementById('7')
const square_8 = document.getElementById('8')
const square_9 = document.getElementById('9')

//Create array with all squares
const allSquares = [
    square_1,
    square_2,
    square_3,
    square_4,
    square_5,
    square_6,
    square_7,
    square_8,
    square_9
]


//Initialize player square displays
const pOneSquares = document.getElementById('playerOneSquares');
const pTwoSquares = document.getElementById('playerTwoSquares');


//Reset field
function resetField() {
    allSquares.forEach(square => square.innerHTML = '')
}


//Check if player has winning combo (brutal but works)
function checkWin() {
    if (square_1.innerHTML != "" && square_1.innerHTML == square_2.innerHTML && square_2.innerHTML == square_3.innerHTML) {
        console.log("Game over")
        resetField()
        alert('Game Over!')
    }
    else if (square_4.innerHTML != "" && square_4.innerHTML == square_5.innerHTML && square_5.innerHTML == square_6.innerHTML) {
        console.log("Game over")
        resetField()
        alert('Game Over!')
    }
    else if (square_7.innerHTML != "" && square_7.innerHTML == square_8.innerHTML && square_8.innerHTML == square_9.innerHTML) {
        console.log("Gamer over")
        resetField()
        alert('Game Over!')
    }
    else if (square_1.innerHTML != "" && square_1.innerHTML == square_4.innerHTML && square_4.innerHTML == square_7.innerHTML) {
        console.log("Gamer over")
        resetField()
        alert('Game Over!')
    }
    else if (square_2.innerHTML != "" && square_2.innerHTML == square_5.innerHTML && square_5.innerHTML == square_8.innerHTML) {
        console.log("Gamer over")
        resetField()
        alert('Game Over!')
    }
    else if (square_3.innerHTML != "" && square_3.innerHTML == square_6.innerHTML && square_6.innerHTML == square_9.innerHTML) {
        console.log("Gamer over")
        resetField()
        alert('Game Over!')
    }
    else if (square_1.innerHTML != "" && square_1.innerHTML == square_5.innerHTML && square_5.innerHTML == square_9.innerHTML) {
        console.log("Gamer over")
        resetField()
        alert('Game Over!')
    }
    else if (square_3.innerHTML != "" && square_3.innerHTML == square_5.innerHTML && square_5.innerHTML == square_7.innerHTML) {
        console.log("Gamer over")
        resetField()
        alert('Game Over!')
    }
}
//FACTORY
const Player = (name, symbol) => {
    const announce = () => console.log(`${name} plays with ${symbol}`);
    return { name, symbol, announce }
}

//Initialize two players
const playerOne = Player('emils', 'X');
const playerTwo = Player('rausis', 'O');

//Set initial active player
let active_player = playerOne;


//Function to mark a square
function markSquare(square) {
    square.addEventListener('click', (event) => {
        if (square.innerHTML == '') {
            if (active_player == playerOne) {
                square.innerHTML = active_player.symbol;
                checkWin()

                active_player = playerTwo;
            }
            else if (active_player == playerTwo) {
                square.innerHTML = active_player.symbol;
                checkWin()

                active_player = playerOne;
            }
        }
    });
}

//Asign markSquare to all squares
markSquare(square_1)
markSquare(square_2)
markSquare(square_3)
markSquare(square_4)
markSquare(square_5)
markSquare(square_6)
markSquare(square_7)
markSquare(square_8)
markSquare(square_9)



//MODULE
const gameBoard = (() => {
    const squares = {

    }
})();


