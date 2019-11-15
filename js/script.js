//scripts starts here
const myDiceApp = {};

const dicesRolled = [];
let userTotalScore = 0;
let computerTotalScore = 0;

myDiceApp.menuEvents = function() {
    
    const $instructionsMenuIcon = $('#instructionsMenuIcon');
    const $instructionsMenu = $('#instructionsMenu');
    
    $instructionsMenuIcon.on('click', function(){
        let $closeMenuIcon = $(this).find('.fas');
        $closeMenuIcon.toggleClass('fas fa-bars fas fa-times');
        $instructionsMenu.toggleClass('showInstructionsMenu');
    });
    
}

myDiceApp.buttonEvents = function() {

    const $playButtons = $('#playButtons');
    const $rollNewDice = $('#rollNewDice');

    $rollNewDice.on('click', function(){
        if (userTotalScore === 21) {
            myDiceApp.roundResult();
        }
        else if (userTotalScore < 21) {
            myDiceApp.rollDice();
        }
        else {
            myDiceApp.roundResult();
        }
    });

    $playButtons.on('submit', function(e){
        e.preventDefault();
        myDiceApp.roundResult();
    });  

}

myDiceApp.rollDice = function() {
    
    const diceNum = this.randomNumGenerator();
    const $diceGrid = $('#diceGrid');
    const $userScoreIndicator = $('#userScoreIndicator');
    
    if (diceNum === 1) {
        $diceGrid.append(`<li>
                            <div class="dice diceFace1">
                                <span class="dot1"></span>
                            </div>
                          </li>`);
        userTotalScore = userTotalScore + 1;
        dicesRolled.push(1);
        $userScoreIndicator.html(`<p>Your total score is ${userTotalScore}.</p>`);
    }
    else if (diceNum === 2) {
        $diceGrid.append(`<li>
                            <div class="dice diceFace2">
                                <span class="dot1"></span>
                                <span class="dot2"></span>
                            </div>
                          </li>`);
        userTotalScore = userTotalScore + 2;
        dicesRolled.push(2);
        $userScoreIndicator.html(`<p>Your total score is ${userTotalScore}.</p>`);
    }
    else if (diceNum === 3) {
        $diceGrid.append(`<li>
                            <div class="dice diceFace3">
                                <span class="dot1"></span>
                                <span class="dot2"></span>
                                <span class="dot3"></span>
                            </div>
                          </li>`);
        userTotalScore = userTotalScore + 3
        dicesRolled.push(3);;
        $userScoreIndicator.html(`<p>Your total score is ${userTotalScore}.</p>`);
    }
    else if (diceNum === 4) {
        $diceGrid.append(`<li>
                            <div class="dice diceFace4">
                                <span class="dot1"></span>
                                <span class="dot2"></span>
                                <span class="dot3"></span>
                                <span class="dot4"></span>
                            </div>
                          </li>`);
        userTotalScore = userTotalScore + 4;
        dicesRolled.push(4);
        $userScoreIndicator.html(`<p>Your total score is ${userTotalScore}.</p>`);
    }
    else if (diceNum === 5) {
        $diceGrid.append(`<li>
                            <div class="dice diceFace5">
                                <span class="dot1"></span>
                                <span class="dot2"></span>
                                <span class="dot3"></span>
                                <span class="dot4"></span>
                                <span class="dot5"></span>
                            </div>
                          </li>`);
        userTotalScore = userTotalScore + 5;
        dicesRolled.push(5);
        $userScoreIndicator.html(`<p>Your total score is ${userTotalScore}.</p>`);
    }
    else if (diceNum === 6) {
        $diceGrid.append(`<li>
                            <div class="dice diceFace6">
                                <span class="dot1"></span>
                                <span class="dot2"></span>
                                <span class="dot3"></span>
                                <span class="dot4"></span>
                                <span class="dot5"></span>
                                <span class="dot6"></span>
                            </div>
                          </li>`);
        userTotalScore = userTotalScore + 6;
        dicesRolled.push(6);
        $userScoreIndicator.html(`<p>Your total score is ${userTotalScore}.</p>`);
    };
}

myDiceApp.randomNumGenerator = function() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
}

myDiceApp.computerScoreGenerator = function() {
    
}

myDiceApp.roundResult = function() {

    const userRolls = dicesRolled.join(' + ');
    const victorySound = new Audio('../assets/victorySoundEffect.mp3');

    if (userTotalScore === 21) {
        victorySound.play();
        Swal.fire({
          title: 'Blackjack, You Won!!!',
          imageUrl: '../assets/nice.gif',
          imageWidth: 250,
          imageHeight: 250,
          text: `Your dice score: ${userRolls} = ${userTotalScore}`,
          showClass: {
            popup: 'animated fadeInDown faster'
          },
          hideClass: {
            popup: 'animated fadeOutUp faster'
          }
        });    
    }
    else if (userTotalScore > 21) {
        Swal.fire({
          title: 'Busted, You Lose!!!',
          text: `Your dice score: ${userRolls} = ${userTotalScore}`,
          showClass: {
            popup: 'animated fadeInDown faster'
          },
          hideClass: {
            popup: 'animated fadeOutUp faster'
          }
        });
    }
    else if (userTotalScore >= 17 && userTotalScore < 21) {
        Swal.fire({
          title: 'Good job, You Won!!!',
          text: `Your dice score: ${userRolls} = ${userTotalScore}`,
          showClass: {
            popup: 'animated fadeInDown faster'
          },
          hideClass: {
            popup: 'animated fadeOutUp faster'
          }
        });
    }
    else if (userTotalScore > 13 && userTotalScore < 17) {
        Swal.fire({
          title: 'You did great :)',
          text: `Your dice score: ${userRolls} = ${userTotalScore}`,
          showClass: {
            popup: 'animated fadeInDown faster'
          },
          hideClass: {
            popup: 'animated fadeOutUp faster'
          }
        });
    }
    else {
        Swal.fire({
          title: 'Did you even try? :/!',
          text: `Your dice score: ${userRolls} = ${userTotalScore}`,
          showClass: {
            popup: 'animated fadeInDown faster'
          },
          hideClass: {
            popup: 'animated fadeOutUp faster'
          }
        });
    }

}

myDiceApp.finalScoreResult = function() {

}

myDiceApp.init = function() {
    
    myDiceApp.menuEvents();
    myDiceApp.buttonEvents();

}

$(function() {
    myDiceApp.init();
});
//scripts ends here