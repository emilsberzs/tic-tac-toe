//FACTORY
const Player = (name, symbol) => {

    const announce = () => console.log(`${name} plays with ${symbol}`);
    return { name, symbol, announce }
}

const playerOne = Player('emils', 'X')
const playerTwo = Player('rausis', 'O')

playerOne.announce()
playerTwo.announce()

let active_player = playerOne;

const square_1 = document.getElementById('square_1')
const square_2 = document.getElementById('square_2')
const square_3 = document.getElementById('square_3')
const square_4 = document.getElementById('square_4')
const square_5 = document.getElementById('square_5')
const square_6 = document.getElementById('square_6')
const square_7 = document.getElementById('square_7')
const square_8 = document.getElementById('square_8')
const square_9 = document.getElementById('square_9')


square_1.addEventListener('click', (event) => {
    if (active_player == playerOne) {
        square_1.innerHTML = active_player.symbol;
        active_player = playerTwo;
    }
    else if (active_player == playerTwo) {
        square_1.innerHTML = active_player.symbol;
        active_player = playerOne;
    }
});
square_2.addEventListener('click', (event) => square_2.innerHTML = 'O')
square_3.addEventListener('click', (event) => square_3.innerHTML = 'X')
square_4.addEventListener('click', (event) => square_4.innerHTML = 'O')
square_5.addEventListener('click', (event) => square_5.innerHTML = 'X')
square_6.addEventListener('click', (event) => square_6.innerHTML = 'O')
square_7.addEventListener('click', (event) => square_7.innerHTML = 'X')
square_8.addEventListener('click', (event) => square_8.innerHTML = 'O')
square_9.addEventListener('click', (event) => square_9.innerHTML = 'X')



//MODULE
const gameBoard = (() => {
    const squares = {
        1: { name: 'square_1', used: false, owner: undefined },
        2: square_2,
        3: square_3,
        4: square_4,
        5: square_5,
        6: square_6,
        7: square_7,
        8: square_8,
        9: square_9,
    }
    const populate = () => {
        for (value in squares) {
            squares[value]
            console.log(squares[value], value)
        }
    }
    const describe = () => console.log(squares);
    return { describe, populate };
})();

//gameBoard.describe()
gameBoard.populate()
