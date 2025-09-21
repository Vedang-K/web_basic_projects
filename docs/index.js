const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let guesses = 0;
const numberGuessed = document.getElementById("number_guessed");
const inputBtn = document.getElementById("input");
const submitBtn = document.getElementById("submit");

submitBtn.onclick = function() {
    const guess = inputBtn.value;
    guesses++;
    numberGuessed.textContent = guess;
    document.getElementById("guesses").textContent = `Guesses: ${guesses}`;

    document.getElementById("numbers_done").innerHTML += `<div>${guess}</div>`;

    if(guess > answer){
        document.getElementById("number_comparision").textContent = `Too High!!`;
    }

    else if(guess < answer){
        document.getElementById("number_comparision").textContent = `Too Low!!`;
    }

    else if(guess == answer){
        document.getElementById("number_comparision").textContent = `YOU WON!!!!!!`;
        submitBtn.disabled = true;
    }

    else{
         document.getElementById("number_comparision").textContent = `Please guess the number between 1 to 100.`;
    }

};