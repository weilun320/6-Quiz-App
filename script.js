function checkAnswer1() {
  const answer = document.getElementById("answer-input-1").value;

  if (answer.toLowerCase() === "paris") {
    document.getElementById("result-1").innerHTML = "Correct!";
  }
  else {
    document.getElementById("result-1").innerHTML = "Incorrect";
  }
}

function checkAnswer2() {
  const answer = document.getElementById("answer-input-2").value;

  if (answer.toLowerCase() === "blue") {
    document.getElementById("result-2").innerHTML = "Correct!";
  }
  else {
    document.getElementById("result-2").innerHTML = "Incorrect";
  }
}