let tie = 0
let playerScore = 0
let computerScore = 0
let computerChoice = 'ROCK'
let playerName = prompt('Please Enter Your Name')
let playerChoice = 0

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

drawPlayers()

