let randomNum = Math.floor(Math.random() * 10 + 1);
console.log(randomNum);
let index = 0;
let btnguess = document.getElementById("btnguess");
let number = document.getElementById("number").value;
let txtHint = document.getElementById("text-hint");
let txtRound = document.getElementById("last-text");
let btnNewGame= document.getElementById("btnNew");
btnNewGame.disabled=true;
function guessNum() {
  if (number > randomNum) {
    index++;
    txtHint.innerHTML = " guess a lesser one ..  ";
  } else if (number < randomNum) {
    index++;
    txtHint.innerHTML = " Guess a larger one ..  ";
  } else {
    index++;
    txtHint.innerHTML = "Congratulations..! You won the Game...  ";
  }
  console.log(index);
  if (index == 3) {
    txtRound.innerHTML = "You have No more Chances..!!";
    btnguess.disabled = true;
    btnNewGame.disabled=false;
  } else if (index < 3) {
    txtRound.innerHTML = "You have " + (3 - index) + " more Chances..!!";
  }
}

function reload() {
  location.reload();
}
