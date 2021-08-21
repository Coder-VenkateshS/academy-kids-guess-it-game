const submitButton = document.getElementById("submit");
console.log(submitButton);

const message = document.getElementById("message");
console.log(message);

const lives=document.getElementById("lives");
console.log(lives);
// generate a number to guess
var guessNumber = Math.round(Math.random()*100);

console.log(guessNumber);

var text;
var live = 10;

submitButton.onclick = ()=>{
    console.log(guessNumber);
    let userInput = document.getElementById("number-input").value;
    live--;
    // console.log(userInput);
    if(userInput==guessNumber){
        location.href="./win.html";
    }
    else if(live==0){
        location.href = "./lost.html";
    }
    else if(userInput > guessNumber){
        text = "oops! your guess is too high";
    }
    else if(userInput < guessNumber){
        text = "oops! your guess is too low";
    }
    message.style.display = "inherit";
    message.innerHTML = text;
    lives.innerHTML = live;
}