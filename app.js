let min =1,
    max = 10,
    winningNum = Math.floor(Math.random() * 10 + 1),
    guessesLeft = 3;
    

const subBtn = document.querySelector('#guess-value');
const msg = document.querySelector('.message');
const game = document.querySelector('.game');


function clearFields() {
    document.querySelector('.guess-input').value = '';
}
function lose() {
    if(guessesLeft <= 0) {
        msg.innerHTML = `Game over u lose!`;
        subBtn.value = 'Play again';
        subBtn.className += 'play-again';
        return;
    }
}
function won(input) {
    if(input === winningNum) {
        const border = document.querySelector('.guess-input');
        border.classList.remove('lose');
        border.classList.add('win');
        msg.innerHTML = 'Game over u Win';
        msg.classList.remove('text-lose');
        msg.classList.add('text-won');
        subBtn.value = 'Play again';
        subBtn.className += 'play-again';
        return;
    }
}
subBtn.addEventListener('click', e => {
    e.preventDefault();

    const input = document.querySelector('.guess-input').value;
    
    if(input > 10 || input < 1 || !input.length) {
        msg.innerHTML = 'Please enter numbers between 1 and 10';
        msg.classList.add('text-lose');
        clearFields();
        return;
    }
    if(input !== winningNum) {
        guessesLeft--;
        const border = document.querySelector('.guess-input');
        border.classList.add('lose');
        msg.innerHTML = `u have ${guessesLeft} more guess left`;
        msg.classList.add('text-lose');
        lose();
    }
    else {
        won(input);
    }

    
    clearFields();
});

game.addEventListener('mousedown', e => {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})