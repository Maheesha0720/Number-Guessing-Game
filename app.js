let randomNum = Math.floor(Math.random() * 10 + 1);
console.log(randomNum);

let index = 0;
let btnguess = document.getElementById("btnguess");
let txtHint = document.getElementById("text-hint");
let txtRound = document.getElementById("last-text");
let btnNewGame = document.getElementById("btnNew");
btnNewGame.disabled = true;

function guessNum() {
  let number = document.getElementById("number").value;
  
  if (number > randomNum) {
    if (number>10) {
      alert("Please try a lower number than 11.");
    }
    index++;
    round(index);
    txtHint.innerHTML = " guess a lower one ..  ";
  } else if (number < randomNum) {
    if (number<0) {
      alert("Please try a higher number than 0.");
    }
    index++;
    round(index);
    txtHint.innerHTML = " Guess a higher one ..  ";
  } else {
    index++;
    txtHint.innerHTML = "🎉Congratulations🎉..! You won the Game...🏆  ";
  
    txtRound.innerHTML = " ";
    btnNewGame.disabled = false;
    btnguess.disabled = true;
    document.body.style.backgroundImage="url(assets/firework-7791.gif)"
  }
  console.log(index);
}

function reload() {
  location.reload();
}

function round(index) {
  if (index == 3) {
    txtRound.innerHTML = "Game over..You have No more Chances..The hidden number is "+randomNum;
    
    btnguess.disabled = true;
    btnNewGame.disabled = false;
  } else if (index < 3) {
    txtRound.innerHTML = "You have " + (3 - index) + " more Chances..!!";
  }
}
