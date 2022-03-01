/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.getElementById('btn__reset');
const game = new Game();

startButton.addEventListener('click', () => {

    game.startGame();
    // console.log(game.activePhrase.checkLetter('a'))
    // console.log(game.activePhrase.showMatchedLetter('a'))
    // console.log(game.checkForWin())
    // game.removeLife();
    // game.checkForWin();

})

//event listener for the keyboard
const qwerty = document.getElementById('qwerty');

qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
  
});