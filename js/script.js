var secretNumber = 4;
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

if(guess === secretNumber) {
    alert("You got it Right Buddy!!!!");
}
//check if guess is higher
else if(guess > secretNumber) {
    alert("Too High.Try another number buddy.");
}
//otherwise,check if loer
else {
    alert("Too Low.Try another number buddy.");
}