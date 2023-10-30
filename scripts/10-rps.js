let score = JSON.parse(localStorage.getItem('score'));
      stringScore = `Wins: ${score.Wins}, Losses: ${score.Loses}, Ties: ${score.Ties}`;
      updateScore(stringScore);

function playGame(playerMove){
  let computerMove = pickComputerMove();
  let result = '';
  if (playerMove === 'Scissor'){
    if (computerMove === 'Scissor'){
      score.Ties++;
      result = "It's a Tie";
    }
    if (computerMove === 'Rock'){
      score.Loses++;
      result = 'You lose';
    }
    if (computerMove === 'Paper'){
      score.Wins++;
      result = 'You Win';
    }
  } else if (playerMove === 'Rock'){
    if (computerMove === 'Rock'){
      score.Ties++;
      result = "It's a Tie";
    }
    if (computerMove === 'Scissor'){
      score.Wins++;
      result = 'You Won';
    }
    if (computerMove === 'Paper'){
      score.Loses++;
      result = 'You Lose';
    }
  } else {
    if (computerMove === 'Paper'){
      score.Ties++;
      result = "It's a Tie";
    }
    if (computerMove === 'Scissor'){
      score.Loses++;
      result = 'You lose';
    }
    if (computerMove === 'Rock'){
      score.Wins++;
      result = 'You Win';
    }
  }

  showResult(result);
  showMoves(playerMove, computerMove);

  let stringScore = `Wins: ${score.Wins}, Losses: ${score.Loses}, Ties: ${score.Ties}`;
  updateScore(stringScore);
  localStorage.setItem('score', JSON.stringify(score));
}

function pickComputerMove(){
  let randomNumber = Math.floor((Math.random() * 3) + 1);
  let computerMove = '';
  if (randomNumber === 1) computerMove = 'Rock';
  if (randomNumber === 2) computerMove = 'Paper';
  if (randomNumber === 3) computerMove = 'Scissor';
  return computerMove;
}

function resetScore(){
  localStorage.removeItem('score');
  score = {
    Wins : 0,
    Loses: 0,
    Ties: 0,
  }
  stringScore = `Wins: ${score.Wins}, Losses: ${score.Loses}, Ties: ${score.Ties}`;
  updateScore(stringScore);
  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-moves').innerHTML = '';
}

function updateScore(stringScore){
  document.querySelector('.js-rps-scores').innerHTML = stringScore;
}

function showResult(result){
  document.querySelector('.js-result').innerHTML = result;
}

function showMoves(playerMove, computerMove){
  playerMove = (playerMove + '-emoji.png').toLowerCase();
  computerMove = (computerMove + '-emoji.png').toLowerCase();

  document.querySelector('.js-moves').innerHTML = 
  `<p class="js-moves">You<img src=${playerMove} 
    class="move-icon"><img src=${computerMove} class="move-icon">Computer</p>`;
  
}

let intervalID;
function automatePlay(){
  buttonElement = document.querySelector('.js-play-button');
  if(buttonElement.innerText === 'Play'){
    intervalID = setInterval(function(){
      let autoPlayerMove = pickComputerMove();
      console.log(autoPlayerMove);
      playGame(autoPlayerMove);
    }, 2000)
    buttonElement.innerText = 'Stop';
  } else {
    clearInterval(intervalID);
    buttonElement.innerText = 'Play';
  }
  console.log(`interval ID: ${intervalID}`)
}