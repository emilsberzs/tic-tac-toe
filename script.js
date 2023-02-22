
//Initialize game board
const square_1 = document.getElementById('1')
const square_2 = document.getElementById('2')
const square_3 = document.getElementById('3')
const square_4 = document.getElementById('4')
const square_5 = document.getElementById('5')
const square_6 = document.getElementById('6')
const square_7 = document.getElementById('7')
const square_8 = document.getElementById('8')
const square_9 = document.getElementById('9')


//Initialize player square displays
const pOneSquares = document.getElementById('playerOneSquares');
const pTwoSquares = document.getElementById('playerTwoSquares');


//Winning combinations
const winCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
//winCombos[0].forEach(element => console.log(element))
//Check if player has winning combo
function checkWin() {
    for (let i = 0; i <= playerOneSquares.length; i++) {

    }
}
//FACTORY
const Player = (name, symbol) => {

    const announce = () => console.log(`${name} plays with ${symbol}`);
    return { name, symbol, announce }
}

//Initialize two players
const playerOne = Player('emils', 'X');
const playerOneSquares = [];
const playerTwo = Player('rausis', 'O');
const playerTwoSquares = [];
console.log(playerOneSquares.length)

//Set initial active player
let active_player = playerOne;

//Function to check if there is a winner


//Function to mark a square
function markSquare(square) {
    square.addEventListener('click', (event) => {
        if (square.innerHTML == '') {
            if (active_player == playerOne) {
                square.innerHTML = active_player.symbol;
                playerOneSquares.push(square.id)
                pOneSquares.innerHTML = playerOneSquares;
                checkWin()
                active_player = playerTwo;
                //console.log(playerOneSquares)
            }
            else if (active_player == playerTwo) {
                square.innerHTML = active_player.symbol;
                playerTwoSquares.push(square.id);
                pTwoSquares.innerHTML = playerTwoSquares;
                checkWin()
                active_player = playerOne;
                //console.log(playerTwoSquares)
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


