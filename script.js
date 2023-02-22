const square_1 = document.getElementById('square_1')
const square_2 = document.getElementById('square_2')
const square_3 = document.getElementById('square_3')
const square_4 = document.getElementById('square_4')
const square_5 = document.getElementById('square_5')
const square_6 = document.getElementById('square_6')
const square_7 = document.getElementById('square_7')
const square_8 = document.getElementById('square_8')
const square_9 = document.getElementById('square_9')

//FACTORY
const Player = (name, symbol) => {

    const announce = () => console.log(`${name} plays with ${symbol}`);
    return { name, symbol, announce }
}

//Initialize two players
const playerOne = Player('emils', 'X')
const playerTwo = Player('rausis', 'O')

//Set initial active player
let active_player = playerOne;


//Function to mark a square
function markSquare(square) {
    square.addEventListener('click', (event) => {
        if (square.innerHTML == '') {

            if (active_player == playerOne) {
                square.innerHTML = active_player.symbol;
                active_player = playerTwo;
            }
            else if (active_player == playerTwo) {
                square.innerHTML = active_player.symbol;
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


