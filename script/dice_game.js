//Define variables
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const dice4 = document.getElementById('dice4');
const dempty1 = document.getElementById('dempty1');
const dempty2 = document.getElementById('dempty2');
const dempty3 = document.getElementById('dempty3');
const dempty4 = document.getElementById('dempty4');
var rollCount = 0;
var playerOneTotal = 0;
var playerTwoTotal = 0;
var playerOneRoundTotal = 0;
var playerTwoRoundTotal = 0;
var dice = [];
for (i = 0; i < 6; i++) {
  dice[i] = {
    value: i + 1,
    src: '../img/dice-game/dice-' + (i + 1) + '.png'
  }
}

function rollDice() {

  //Roll the dice
  var diceRoll = [];
  for (i = 1; i <= 4; i++) {
    diceRoll[i] = {
      img: dice[rollDie()]
    }

    document.getElementById('dice' + i).setAttribute('src', diceRoll[i].img.src)
  }
  //Calculate Round Score for player
  playerOneRoundTotal = calculateScore(diceRoll[1].img.value, diceRoll[2].img.value);
  //Calculate Round Score for computer
  playerTwoRoundTotal = calculateScore(diceRoll[3].img.value, diceRoll[4].img.value);

  return (playerOneRoundTotal, playerTwoRoundTotal);
}

//Roll One Die
function rollDie() {
  var roll = Math.floor(Math.random() * 6);
  return roll;
}

//Add sound effect to dice
function diceSoundEffect() {
  var audio = document.getElementById("dice__audio");
  audio.play();
}

// Calculate score function
function calculateScore(value1, value2) {
  //Check to see if die have the value of 1
  if (value1 == 1 || value2 == 1) {
    return roundScore = 0;
  } else {
    if (value1 == value2) {
      return roundScore = (value1 + value2) * 2;
    } else {
      return roundScore = value1 + value2;
    }
  }
}
//Play the game
document.getElementById('buttonRoll').addEventListener('click', function () {
  rollCount++;
  rollDice();

  //Set player totals
  playerOneTotal = playerOneTotal + playerOneRoundTotal;
  playerTwoTotal = playerTwoTotal + playerTwoRoundTotal;
  //Display output data
  document.getElementById('playerOneRound').innerText = playerOneRoundTotal;
  document.getElementById('playerTwoRound').innerText = playerTwoRoundTotal;
  document.getElementById('playerOneTotal').innerText = playerOneTotal;
  document.getElementById('playerTwoTotal').innerText = playerTwoTotal;
  document.getElementById('rollNumber').innerText = rollCount;
  document.getElementById('rollNumber2').innerText = rollCount;

  dice1.style.display = "block";
  dice2.style.display = "block";
  dice3.style.display = "block";
  dice4.style.display = "block";
  dempty1.style.display = "none";
  dempty2.style.display = "none";
  dempty3.style.display = "none";
  dempty4.style.display = "none";

  //Check to see if game is complete
  if (rollCount == 3) {
    //Display game results
    if (playerOneTotal > playerTwoTotal) {
      document.getElementById('winner').innerHTML = "The <span>Player</span> has won the game"
    } else if (playerOneTotal == playerTwoTotal) {
      document.getElementById('winner').innerHTML = "This game has ended in a tie"
    } else {
      document.getElementById('winner').innerHTML = "The <span>Computer</span> has won the game"
    }
    document.getElementById('playerScore').innerText = playerOneTotal;
    document.getElementById('computerScore').innerText = playerTwoTotal;
    //toggle visibility of popup
    setTimeout(function () {
      document.getElementById('popUp').hidden = false;
    }, 300);
  }
  //play audio
  diceSoundEffect();

});
//Event listeners to start new game
document.getElementById('newGame').addEventListener('click', function () {
  location.reload();
});
document.getElementById('playAgain').addEventListener('click', function () {
  location.reload();
});


