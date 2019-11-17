//scripts starts here
const myDiceApp = {};
const $diceGrid = $('#diceGrid');
const dicesRolled = [];
let userTotalScore = 0;
let computerTotalScore = 0;
let roundOver = false;

myDiceApp.startScreenDices = function() {

    const animateStartDice1 = function () {
        
        const $startDice1 = $('.startDice1');

        setTimeout(function() {
            $startDice1.addClass('showStartDiceFace6');
            setTimeout(function() {
                $startDice1.removeClass('showStartDiceFace6');
            }, 2000);
        }, 4000);
    }
    const animateStartDice2 = function () {

        const $startDice2 = $('.startDice2');

        setTimeout(function() {
            $startDice2.addClass('showStartDiceFace2');
            setTimeout(function() {
                $startDice2.removeClass('showStartDiceFace2');
            }, 2000);
        }, 2000);
        setTimeout(function() {
            $startDice2.addClass('showStartDiceFace5');
            setTimeout(function() {
                $startDice2.removeClass('showStartDiceFace5');
            }, 2000);
        }, 4000);
    }
    const animateStartDice3 = function () {

        const $startDice3 = $('.startDice3');

        setTimeout(function() {
            $startDice3.addClass('showStartDiceFace3');
            setTimeout(function() {
                $startDice3.removeClass('showStartDiceFace3');
            }, 2000);
        }, 2000);
        setTimeout(function() {
            $startDice3.addClass('showStartDiceFace4');
            setTimeout(function() {
                $startDice3.removeClass('showStartDiceFace4');
            }, 2000);
        }, 4000);
    }
    const animateStartDice4 = function () {

        const $startDice4 = $('.startDice4');

        setTimeout(function() {
            $startDice4.addClass('showStartDiceFace4');
            setTimeout(function() {
                $startDice4.removeClass('showStartDiceFace4');
            }, 2000);
        }, 2000);
        setTimeout(function() {
            $startDice4.addClass('showStartDiceFace3');
            setTimeout(function() {
                $startDice4.removeClass('showStartDiceFace3');
            }, 2000);
        }, 4000);
    }
    const animateStartDice5 = function () {

        const $startDice5 = $('.startDice5');

        setTimeout(function() {
            $startDice5.addClass('showStartDiceFace5');
            setTimeout(function() {
                $startDice5.removeClass('showStartDiceFace5');
            }, 2000);
        }, 2000);
        setTimeout(function() {
            $startDice5.addClass('showStartDiceFace2');
            setTimeout(function() {
                $startDice5.removeClass('showStartDiceFace2');
            }, 2000);
        }, 4000);
    }
    const animateStartDice6 = function () {

        const $startDice6 = $('.startDice6');

        setTimeout(function() {
            $startDice6.addClass('showStartDiceFace6');
            setTimeout(function() {
                $startDice6.removeClass('showStartDiceFace6');
            }, 2000);
        }, 2000);
    }

    animateStartDice1();
    animateStartDice2();
    animateStartDice3();
    animateStartDice4();
    animateStartDice5();
    animateStartDice6();
}

myDiceApp.menuEvents = function() {
    
    const $instructionsMenuIcon = $('#instructionsMenuIcon');
    const $instructionsMenu = $('#instructionsMenu');
    
    $instructionsMenuIcon.on('click', function(){
      
      let $closeMenuIcon = $(this).find('.fas');
      $closeMenuIcon.toggleClass('fas fa-bars fas fa-times');
      $instructionsMenu.toggleClass('showInstructionsMenu');
      const $expanded = $instructionsMenuIcon.attr('aria-expanded');

        if ($expanded === 'false') {
            $(this).attr('aria-expanded', 'true');
        } else {
            $(this).attr('aria-expanded', 'false');
        }
    });
}

myDiceApp.buttonEvents = function() {

    const $start = $('#start');
    const $playButtons = $('#playButtons');
    const $rollNewDice = $('#rollNewDice');
    const $stand = $('#stand');

    $start.on('click', function(){
        $rollNewDice.addClass('showPlayButton');
        $stand.addClass('showPlayButton');
        $(this).addClass('hideStartButton');
        $diceGrid.empty();
    }); 

    $rollNewDice.on('click', function(){
        const diceRollSound = new Audio('assets/diceRollSoundEffect.mp3');  

        if (userTotalScore === 21) {
            myDiceApp.roundResult();
        }
        else if (userTotalScore < 21 && roundOver === false) {
            myDiceApp.rollDice();
            myDiceApp.computerScoreGenerator();
            diceRollSound.play();
        }
        else {
            myDiceApp.roundResult();
        }
    });

    $playButtons.on('submit', function(e){
        e.preventDefault();
        roundOver = true;
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
    const computerDiceNum = this.randomNumGenerator();
  if ((computerTotalScore < 21 || computerTotalScore !== 21) && userTotalScore < 21) {
      computerTotalScore = computerTotalScore + computerDiceNum;
    }
}

myDiceApp.roundResult = function() {

    const userRolls = dicesRolled.join('+');
    const victorySound = new Audio('assets/victorySoundEffect.mp3');
    const scores = `<p>Your dice numbers: ${userRolls}</p>
    <p>Your dice score: ${userTotalScore}</p>
    <p>Computer dice score: ${computerTotalScore}</p>`;
    const showResultAnimation = 'animated fadeInDown faster';
    const hideResultAnimation = 'animated fadeOutUp faster';

    if (userTotalScore === 21) {
        victorySound.play();
        Swal.fire({
            title: 'Blackjack, You Win!!!',
            imageUrl: 'assets/nice.gif',
            imageWidth: 200,
            imageHeight: 200,
            html: `${scores}`,
            showClass: {
              popup: `${showResultAnimation}`
            },
            hideClass: {
              popup: `${hideResultAnimation}`
            },
            showCancelButton: true,
            confirmButtonText: 'Play again?'
        }).then((result) => {
            if (result.value) {
                myDiceApp.newRound();
            }
        });    
    }
    else if ((userTotalScore > computerTotalScore || computerTotalScore > 21) && userTotalScore < 21) {
        Swal.fire({
            title: 'You Win!!! :)',
            html: `${scores}`,
            showClass: {
              popup: `${showResultAnimation}`
            },
            hideClass: {
              popup: `${hideResultAnimation}`
            },
            showCancelButton: true,
            confirmButtonText: 'Play again?'
        }).then((result) => {
            if (result.value) {
                myDiceApp.newRound();
            }
        });
    }
    else if (userTotalScore > 21) {
        Swal.fire({
            title: 'Busted, You Lose!!!',
            html: `${scores}`,
            showClass: {
              popup: `${showResultAnimation}`
            },
            hideClass: {
              popup: `${hideResultAnimation}`
            },
            showCancelButton: true,
            confirmButtonText: 'Play again?'
        }).then((result) => {
            if (result.value) {
                myDiceApp.newRound();
            }
        });
    }
    else if ((userTotalScore < computerTotalScore || userTotalScore === computerTotalScore) && (computerTotalScore < 21 &&userTotalScore !== 0) || computerTotalScore === 21) {
        Swal.fire({
            title: 'Dealer Won, You Lose :(',
            html: `${scores}`,
            showClass: {
              popup: `${showResultAnimation}`
            },
            hideClass: {
              popup: `${hideResultAnimation}`
            },
            showCancelButton: true,
            confirmButtonText: 'Play again?'
        }).then((result) => {
            if (result.value) {
                myDiceApp.newRound();
            }
        });
    }
    else {
        Swal.fire({
            title: 'Did you even try? :/!',
            html: `${scores}`,
            showClass: {
              popup: `${showResultAnimation}`
            },
            hideClass: {
              popup: `${hideResultAnimation}`
            },
            showCancelButton: true,
            confirmButtonText: 'Play again?'
        }).then((result) => {
            if (result.value) {
                myDiceApp.newRound();
            }
        });
    }
}

myDiceApp.newRound = function() {

    const $userScoreIndicator = $('#userScoreIndicator');
  
    userTotalScore = 0;
    computerTotalScore = 0;
    dicesRolled.length = 0;
    roundOver = false;
    $diceGrid.empty();
    $userScoreIndicator.empty();
}

myDiceApp.init = function() {
    
    myDiceApp.menuEvents();
    myDiceApp.buttonEvents();
    myDiceApp.startScreenDices();
}

$(function() {
    myDiceApp.init();
});
//scripts ends here