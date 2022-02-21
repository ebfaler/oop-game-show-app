/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // Displays phrase on game board
    addPhraseToDisplay() {

        const chosenPhrase = this.phrase.split('');
        const list = document.querySelector('#phrase ul');
        console.log(chosenPhrase);

        for (let i = 0; i < chosenPhrase.length; i++) {
            const item = document.createElement('li');
            //check for characters within the string
            if ((/[a-zA-Z]/).test(chosenPhrase[i])) {
                item.className = 'letter';
            } else {
                item.className = 'space';
            };
            item.textContent = chosenPhrase[i];
            list.append(item);
        }
    };

    // Checks to see if the letter selected by the player matches a letter
    // in the phrase. Returns true or false
    checkLetter(chosenLetter) {

        return this.phrase.includes(chosenLetter);

    };


    //Reveals the letter(s) on the board that matches the
    //player's selection.
    showMatchedLetter(chosenLetter) {

        const phraseLetters = document.querySelectorAll('#phrase li');

        for (let i = 0; i < phraseLetters.length; i++) {
            if (phraseLetters[i].textContent.toLowerCase() === chosenLetter.textContent) {
                phraseLetters[i].classList.add('show');
            }
        }
    }





};

