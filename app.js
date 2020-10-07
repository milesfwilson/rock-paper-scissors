let tie = 0
let playerScore = 0
let computerScore = 0
let computerChoice = 'ROCK'
let playerName = prompt('Please Enter Your Name')
let playerChoice = 0
let messages = "Hello World!"

let choices = [
  {
    choice: "ROCK",
    image: '<i class="fa fa-hand-rock-o fa-3x" aria-hidden="true"></i>'
  },
  {
    choice: "PAPER",
    image: '<i class="fa fa-hand-paper-o fa-3x" aria-hidden="true"></i>'
  }, {
    choice: "SCISSORS",
    image: '<i class="fa fa-hand-scissors-o fa-3x" aria-hidden="true"></i>'
  }
]



function play(playerChoice) {
  randomChoice()

  if (playerChoice === 'ROCK' && computerChoice === 'ROCK') {
    playerChoice = choices[0].image
    computerChoice = choices[0].image
    ++tie
  } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
    playerChoice = choices[0].image
    computerChoice = choices[2].image

    ++playerScore
  } else if (playerChoice === 'ROCK' && computerChoice === 'PAPER') {
    playerChoice = choices[0].image
    computerChoice = choices[1].image

    ++computerScore
  } else if (playerChoice === 'PAPER' && computerChoice === 'PAPER') {
    playerChoice = choices[1].image
    computerChoice = choices[1].image

    ++tie
  } else if (playerChoice === 'PAPER' && computerChoice === 'ROCK') {
    playerChoice = choices[1].image
    computerChoice = choices[0].image
    ++playerScore
  } else if (playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {
    playerChoice = choices[1].image
    computerChoice = choices[2].image

    ++computerScore
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'SCISSORS') {
    playerChoice = choices[2].image
    computerChoice = choices[2].image

    ++tie
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {
    playerChoice = choices[2].image
    computerChoice = choices[0].image
    ++computerScore
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {
    playerChoice = choices[2].image
    computerChoice = choices[1].image

    ++playerScore
  } else {
    alert('That\'s not a valid input')
  }

  if (playerScore >= 3) {
    drawMessage("You Win!")
    playerScore = 0
    computerScore = 0
    drawWinnerColor("player-box", "computer-box")
    disableButtons()
  } else if (computerScore >= 3) {
    drawMessage("You Lose!")
    computerScore = 0
    playerScore = 0
    drawWinnerColor("computer-box", "player-box")
    disableButtons()
  }

  drawScore()
  drawChoice(playerChoice)

}

function drawScore() {
  let playerScoreElem = document.getElementById("player-score")
  playerScoreElem.innerText = `${playerScore}`
  let computerScoreElem = document.getElementById("computer-score")
  computerScoreElem.innerText = `${computerScore}`
}

function drawChoice(playerChoice) {
  let playerChoiceElem = document.getElementById("player-choice")
  playerChoiceElem.innerHTML = `${playerChoice}`

  let computerChoiceElem = document.getElementById("computer-choice")
  computerChoiceElem.innerHTML = `${computerChoice}`
}

function drawPlayers() {
  let nameElem = document.getElementById("player-name")
  nameElem.innerText = `${playerName}`
}

function randomChoice() {
  return computerChoice = choices[Math.floor(Math.random() * choices.length)].choice
}

function drawMessage(message) {
  let messageElem = document.getElementById("message-board")
  messageElem.innerText = `${message}`
}

function drawWinnerColor(winner, loser) {
  let winnerBoxElem = document.getElementById(winner)
  winnerBoxElem.classList.add("winner-glow")
  let loserBoxElem = document.getElementById(loser)
  loserBoxElem.classList.add("loser-glow")
}

function resetGame() {
  let playerBox = document.getElementById('player-box')
  playerBox.classList.remove("winner-glow")
  playerBox.classList.remove("loser-glow")

  let computerBox = document.getElementById('computer-box')
  computerBox.classList.remove("loser-glow")
  computerBox.classList.remove("winner-glow")

  let rockButton = document.getElementById('rock')
  rockButton.classList.remove("hidden")

  let paperButton = document.getElementById('paper')
  paperButton.classList.remove("hidden")

  let scissorsButton = document.getElementById('scissors')
  scissorsButton.classList.remove("hidden")

  let playAgainButton = document.getElementById('reset-game')
  playAgainButton.classList.add("hidden")

  let messageElem = document.getElementById("message-board")
  messageElem.innerText = "Ready, Shoot!"
}


function disableButtons() {
  let playAgainButton = document.getElementById('reset-game')
  playAgainButton.classList.remove("hidden")

  let rockButton = document.getElementById('rock')
  rockButton.classList.add("hidden")

  let paperButton = document.getElementById('paper')
  paperButton.classList.add("hidden")

  let scissorsButton = document.getElementById('scissors')
  scissorsButton.classList.add("hidden")
}

drawPlayers()

