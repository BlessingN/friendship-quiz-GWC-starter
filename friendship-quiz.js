//comment for pull request

// questions to be randomly asked on page load
var questionsList = ["What are your/your friend's favorite foods?", "What are your/your friend's favorite animals?", ];


//randomly chooses a question to display
function init() {
  var randomIndex = Math.floor(Math.random() * questionsList.length);
  document.getElementById("question").innerHTML = questionsList[randomIndex];
}

window.onload = init;

var answerList = []; //initialize answerList to be empty

/* ADD YOUR CODE BELOW */

//adds user-submitted answer to answerList
function submitAnswer() {
  var ans = document.getElementById("answerInput").value;
  answerList.push(ans);        //stores submitted answers into the answerList
  console.log(answerList);     //logs answers into console
}


//checks if user-submitted guess is in answerList
function checkGuess() {
    found = false
    var guess = document.getElementById("guessInput").value;
    console.log(guess)        // logs guesses into the console

for (var i = 0; i < answerList.length; i++) {   //checks each answer in console
  if (guess == answerList[i]) {
    alert("Correctomundo");
    found = true;
  }
}
  if (found == false) {       //If the guess does not match the answer, popup "Nah Bruh"
      alert("Nah bruh");
    }
}
