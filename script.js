// Rules button functionality

let rulesBtn = document.querySelector(".rules-btn");
let showRules = document.querySelector(".rules-box");
let cancelRules = document.querySelector(".cancel-btn");

function show() {
  showRules.style.display = "block";
}
cancelRules.addEventListener("click", () => {
  showRules.style.display = "none";
});

let rock = document.querySelector(".rock-circle1");
let paper = document.querySelector(".paper-circle1");
let scissors = document.querySelector(".scissor-circle1");

let cScore = document.querySelector("#c-score");
let uScore = document.querySelector("#h-score");
let gameBox = document.querySelector(".game-box");
let gameBox1 = document.querySelector(".game-box1");
let rockCircleU = document.querySelector(".rock-circle-u");
let paperCircleU = document.querySelector(".paper-circle-u");
let scissorCircleU = document.querySelector(".scissor-circle-u");
let rockCirclePc = document.querySelector(".rock-circle-pc");
let paperCirclePc = document.querySelector(".paper-circle-pc");
let scissorCirclePc = document.querySelector(".scissor-circle-pc");
let replayBtn = document.querySelector(".replay-btn");
let gameStatus = document.querySelector(".game-status");
let againstPc = document.querySelector(".against-pc");
let ecllipseU = document.querySelector(".ecllipse-u");
let ecllipsePc = document.querySelector(".ecllipse-pc");
let computerScore = 0;
let userScore = 0;
function computer() {
  let options = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
}

function pcPicked(a) {
  if (a === "rock") {
    rockCirclePc.style.display = "block";
    paperCirclePc.style.display = "none";
    scissorCirclePc.style.display = "none";
  } else if (a === "paper") {
    rockCirclePc.style.display = "none";
    paperCirclePc.style.display = "block";
    scissorCirclePc.style.display = "none";
  } else if (a === "scissors") {
    rockCirclePc.style.display = "none";
    paperCirclePc.style.display = "none";
    scissorCirclePc.style.display = "block";
  }
}

function game(userSelection) {
  let computerSelection = computer();
  pcPicked(computerSelection);
  if (userSelection === computerSelection) {
    replayBtn.textContent = "REPLAY";
    gameStatus.textContent = "TIE UP";
    againstPc.style.display = "none";
    ecllipseU.style.display = "none";
    ecllipsePc.style.display = "none";
    return;
  }
  if (userSelection === "rock") {
    // checking for rock
    if (computerSelection === "scissors") {
      ecllipseU.style.display = "block";
      ecllipsePc.style.display = "none";
      rulesBtn.style.left = "950px";
      replayBtn.textContent = "PLAY AGAIN";
      gameStatus.textContent = "YOU WIN";
      userScore++;
      updateScore();
      return;
    } else {
      ecllipseU.style.display = "none";
      ecllipsePc.style.display = "block";

      gameStatus.textContent = "YOU LOST";
      replayBtn.textContent = "PLAY AGAIN";
      computerScore++;
      updateScore();
      return;
    }
  }
  if (userSelection === "paper") {
    // checking for paper
    if (computerSelection === "scissors") {
      ecllipseU.style.display = "none";
      ecllipsePc.style.display = "block";

      gameStatus.textContent = "YOU LOST";
      replayBtn.textContent = "PLAY AGAIN";
      computerScore++;
      updateScore();
      return;
    } else {
      ecllipseU.style.display = "block";
      ecllipsePc.style.display = "none";

      rulesBtn.style.left = "950px";
      gameStatus.textContent = "YOU WIN";
      replayBtn.textContent = "PLAY AGAIN";
      userScore++;
      updateScore();
      return;
    }
  }
  if (userSelection === "scissors") {
    // checking for scissors
    if (computerSelection === "rock") {
      ecllipseU.style.display = "none";
      ecllipsePc.style.display = "block";
      replayBtn.textContent = "PLAY AGAIN";
      gameStatus.textContent = "YOU LOST";
      computerScore++;
      updateScore();
      return;
    } else {
      ecllipseU.style.display = "block";
      ecllipsePc.style.display = "none";

      gameStatus.textContent = "YOU WIN";
      rulesBtn.style.left = "950px";
      replayBtn.textContent = "PLAY AGAIN";
      userScore++;
      updateScore();
      return;
    }
  }
}
function gamebox1() {
  gameBox.style.display = "none";
  gameBox1.style.display = "block";
}
function playAgain() {
  rulesBtn.style.left = "1100px";
  gameBox.style.display = "block";
  gameBox1.style.display = "none";
  againstPc.style.display = "block";
}
function rock1() {
  rockCircleU.style.display = "block";
  paperCircleU.style.display = "none";
  scissorCircleU.style.display = "none";
  gamebox1();
  return game("rock");
}

function paper1() {
  paperCircleU.style.display = "block";
  scissorCircleU.style.display = "none";
  rockCircleU.style.display = "none";
  gamebox1();
  return game("paper");
}
function scissors1() {
  scissorCircleU.style.display = "block";
  paperCircleU.style.display = "none";
  rockCircleU.style.display = "none";

  gamebox1();
  return game("scissors");
}

function updateScore() {
  localStorage.setItem("computer", computerScore);
  localStorage.setItem("user", userScore);
  uScore.textContent = window.localStorage.getItem("user");
  cScore.textContent = window.localStorage.getItem("computer");
}
uScore.textContent = window.localStorage.getItem("user");
cScore.textContent = window.localStorage.getItem("computer");
