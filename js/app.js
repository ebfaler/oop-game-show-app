/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.getElementById('btn__reset');
let game;

startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
  
})

//event listener for clicking the keyboard
const qwerty = document.getElementById('qwerty');

qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
  
});

// keydown event listener
const keyboard = document.querySelectorAll('.key');
document.addEventListener('keydown', (e) => {

    for(let i=0; i< keyboard.length; i++) {

    if (e.key.toLowerCase() === keyboard[i].textContent && keyboard[i].disabled === false) {
        game.handleInteraction(keyboard[i]);
    }
    // console.log(e.key);
}
  
});