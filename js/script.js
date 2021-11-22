const options = document.querySelectorAll(".options");
    let playerScore = 0;
    let compScore = 0;

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const playerInput = this.value;

        const cOptions = ["Rock", "Paper", "Scissors"];
        const compInput = cOptions[Math.floor(Math.random() * 3)];
        
        updateMoves(playerInput, compInput);
        compareInputs(playerInput, compInput);
        updateScore();
        if(checkWinner()){
          playerScore = compScore= 0;
          updateScore();
        }
      });
    });

    function updateMoves(playerInput, compInput){
      document.getElementById("p-move").src = `img/${playerInput}.png`;
      document.getElementById("c-move").src = `img/${compInput}.png`;
    }


    function compareInputs(playerInput, compInput) {
      const currentMatch = `${playerInput} vs ${compInput}`;
      if (playerInput === compInput) {
        displayResult(currentMatch + " = We have a Tie!");
		changeBg("tie");
        return;
      }

      if (playerInput === "Rock") {
        if (compInput === "Scissors") {
          displayResult(`${currentMatch} = You Win!`);
          playerScore++;
		  changeBg("win");
        } else {
          displayResult(`${currentMatch} = Computer Wins`);
          compScore++;
		  changeBg("lose");
        }
      }
      //Check for Paper
      else if (playerInput === "Paper") {
        if (compInput === "Rock") {
          displayResult(`${currentMatch} = You Win!`);
          playerScore++;
		  changeBg("win");
        } else {
          displayResult(`${currentMatch} = Computer Wins`);
          compScore++;
		  changeBg("lose");
        }
      }
      //Check for Scissors
      else {
        if (compInput === "Paper") {
          displayResult(`${currentMatch} = You Win!`);
          playerScore++;
		  changeBg("win");
        } else {
          displayResult(`${currentMatch} = Computer Wins`);
          compScore++;
		  changeBg("lose");
        }
      }
    }

    function updateScore() {
      document.getElementById("player-score").textContent = playerScore;
      document.getElementById("comp-score").textContent = compScore;
    }

    function checkWinner() {
      if (playerScore === 5 || compScore === 5) {
        const winner =
          playerScore === 5
            ? "You are the champion! Woo Hoo!"
            : "You lose... Let's try again!";
        displayResult(winner);
		
        hideOptions();
		unhideRestart();
		return false;		
      }
      return false;
	  
    }
	
	/*Change BG */
	
	function changeBg(winnerStatus) {
		
		var el = document.getElementById("container-result");
		var elClasses = el.classList;
		
		el.classList.remove(elClasses);
		
		if(winnerStatus === "win"){
			el.classList.add("container-result-win");
		}
		
		if(winnerStatus === "lose"){
			el.classList.add("container-result-lose");
		}
		
		if(winnerStatus === "tie"){
			el.classList.add("container-result-default");
		}
			
	}
	
	
	/*
* @param {textDebugger} String
* Changes the inner text of a debugging element present
* in the template.
*/		 
function displayResult(textResult) {
    var resultEl = document.getElementById("result");
	resultEl.innerHTML=textResult;	  
}

/* Hide options when game ends */

function hideElement(el) {
	//Grab the classList of the element and add a new one
	el.classList.add("hiddenStyle");
}

function hideOptions(){
	
	var el = document.getElementById("options");
	hideElement(el);
}

function hideRestart(){
	var el = document.getElementById("restart-action");
	hideElement(el);
}

/* Unhide "Restart" <a> element to allow restarting the game */

function unhideElement(el){
	el.classList.remove("hiddenStyle");
	
}

function unhideOptions(){
	var el = document.getElementById("options");
	unhideElement(el);
}

function unhideRestart(){
	var el = document.getElementById("restart-action");
	unhideElement(el);
}


/* Restart button and reset values to default */

function restart(){
	playerScore=0;
	compScore=0;
	updateScore();
	hideRestart();
	unhideOptions();
}



