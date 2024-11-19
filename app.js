let randomNum = Math.floor(Math.random() * 10 + 1);

let index = 0;
let btnguess = document.getElementById("btnguess");
let txtHint = document.getElementById("text-hint");
let txtRound = document.getElementById("last-text");
let btnNewGame = document.getElementById("btnNew");
btnNewGame.disabled = true;
function guessNum() {
  let number = document.getElementById("number").value;
  
  if (number > randomNum) {
    index++;
    round(index);
    txtHint.innerHTML = " guess a lower one ..  ";
  } else if (number < randomNum) {
    index++;
    round(index);
    txtHint.innerHTML = " Guess a higher one ..  ";
  } else {
    index++;
    txtHint.innerHTML = "Congratulations..! You won the Game...  ";
    txtRound.innerHTML = " ";
    btnNewGame.disabled = false;
    btnguess.disabled = true;
  }
  console.log(index);
}

function reload() {
  location.reload();
}
function round(index) {
  if (index == 3) {
    txtRound.innerHTML = "Game over..You have No more Chances..!!";
    btnguess.disabled = true;
    btnNewGame.disabled = false;
  } else if (index < 3) {
    txtRound.innerHTML = "You have " + (3 - index) + " more Chances..!!";
  }
}
