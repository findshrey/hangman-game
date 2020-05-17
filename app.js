const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game

const startGame = async () => {
    const puzzle = await generatePuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

const render = () => {
    puzzleEl.textContent = game.getPuzzle()
    guessesEl.textContent = game.getStatusMessage()
}

window.addEventListener('keypress', function (e) {
    game.makeGuess(e.key)
    render()
})

document.querySelector('#reset').addEventListener('click', () => {
    startGame()
})

startGame()