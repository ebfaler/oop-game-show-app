/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {

        this.missed = 0;   //keps track of the number of missed guesses
        this.phrases = [

            new Phrase('Beat around the bush'),
            new Phrase('Every cloud has a silver lining'),
            new Phrase('Break a leg'),
            new Phrase('Better late than never'),
            new Phrase('The only way is up')
        ];
        // console.log(this.phrases.length);
        this.activePhrase = 'null'; //this is the phrase object currently in play
    }

    // * Selects random phrase from phrases property
    // * @return {Object} Phrase object chosen to be used
    getRandomPhrase() {

        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomIndex];
        return randomPhrase;

    };

    //Begins game by selecting a random phrase and displaying it to user
    startGame() {

        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }

    //This method checks to see if the player has revealed all of the
    //letters in the active phrase. Checks if length of phrase 'letter' class is the same as 'show' class
    checkForWin() {

        const showClass = document.querySelectorAll(".show");
        const letterClass = document.querySelectorAll(".letter");

        if (letterClass.length === showClass.length) {
            return true;
        }
        else {
            return false;
        }
    }


    /* Increases the value of the missed property
    * Removes a life from the scoreboard by replacing the live heart with lost heart
    * Checks if player has remaining lives and ends game if player is out*/

    removeLife() {

        const liveHearts = document.querySelectorAll('.tries img');
        liveHearts[this.missed].src = 'images/lostHeart.png';
        this.missed ++;
        if (this.missed > 4) {
            this.gameOver("lose");
            
        }
    }

    /* Displays game over message
       @param {boolean} gameWon - Whether or not the user won the game*/
    gameOver(result) {

        const startOverlay = document.getElementById('overlay');
        startOverlay.style.display = "flex";
        const gameOverMessage = document.getElementById('game-over-message');


        if (result === "win") {
            gameOverMessage.innerHTML = "Congratulations. You have Won!";
            startOverlay.className= 'win';
            this.resetGame();


        }
        else if (result === "lose") {
            gameOverMessage.innerHTML = "Unfortunately, you haven't won this time!";
            startOverlay.className= 'lose';
            this.resetGame();

        }

    }




    /* Remove all `li` elements from the Phrase `ul` element.
     * Enable all of the onscreen keyboard buttons and update each to use the `key` CSS
      class, and not use the `chosen` or `wrong` CSS classes.
     * Reset all of the heart images in the scoreboard at the bottom of
      the gameboard to display the `liveHeart.png` image. */
    resetGame() {
        this.missed = 0;
        startButton.textContent = "Reset Game";
        const list = document.querySelector('#phrase ul');
        list.textContent = '';

        const chosenLetters = document.querySelectorAll('.chosen');
        const wrongLetters = document.querySelectorAll('.wrong');

        for (let i = 0; i < chosenLetters.length; i++) {
            chosenLetters[i].classList.remove('chosen');
            chosenLetters[i].disabled = false;
        }

        for (let i = 0; i < wrongLetters.length; i++) {
            wrongLetters[i].classList.remove('wrong');
            wrongLetters[i].disabled = false;
        }

        const hearts = document.querySelectorAll('.tries img');

        for (let i = 0; i < hearts.length; i++) {
            hearts[i].src = 'images/liveHeart.png';

        }
    }


    /*
    Handles onscreen keyboard button clicks
    
    This method controls most of the game logic. It checks to see if the onscreen
    keyboard button clicked by the player matches a letter in the phrase
    and then directs the game based on a correct or incorrect guess.
    */

    handleInteraction(button) {

        //disables the button after it's clicked
        button.disabled = true;
        const checkLetter = this.activePhrase.checkLetter(button.textContent)

        /* If the phrase includes the guessed letter, add the `chosen` CSS class to the selected
        letter's keyboard button, call the `showMatchedLetter()` method on the phrase, and
        then call the `checkForWin()` method. If the player has won the game, also call the
        `gameOver()` method.*/
        if (checkLetter) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);

            if (this.checkForWin()) {
                this.gameOver("win");
                
            }
        }

        /* If the phrase does not include the guessed letter, add the `wrong` CSS class to the
        selected letter's keyboard button and call the `removeLife()` method.*/
        else {

            button.classList.add('wrong');
            this.removeLife();

        }


    }

};

