'use strict';
 
function secret() {
    return  Math.trunc(Math.random() * 20 + 1);
}
let number = secret();

//document.querySelector('.number').textContent = number;
let score = 20;
let highscore = 0;

function message(mes){
    return document.querySelector('.message').textContent = mes;
}
document.querySelector('.check').addEventListener('click', function(){
    let guess =  Number(document.querySelector('.guess').value)
    if(!guess){
        //document.querySelector('.message').textContent = 'no number!';
        message('no number');
    } else if(guess !== number){
        if(score > 1) {
            document.querySelector('.message').textContent = guess > number ? 'too high!' : 'too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else if (score === 1){
            document.querySelector('.message').textContent = 'Game over';
            score--;
            document.querySelector('.score').textContent = score;
        } 
    } else {
        document.querySelector('.message').textContent = 'correct number';
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        } 
        document.querySelector('.number').textContent = number;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    number = secret();
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.highscore').textContent 
})