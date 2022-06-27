// Code your solutions in this file
const person = [];
const msgCard = [];
let msg
let cardMsg

function writeCards(person, msg) {
    for (let i = 0; i < person.length; i++) {
        cardMsg = `Thank you, ${person[i]}, for the wonderful ${msg} gift!`;
        msgCard.push(cardMsg);
    }

    return msgCard;

}

function countDown() {
    let down = 10;
    while (down >= 0) {
        console.log(down--);
    }
}