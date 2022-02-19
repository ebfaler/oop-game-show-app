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

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
     */
   getRandomPhrase() {

    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[randomIndex];
    return randomPhrase;

    };
};

