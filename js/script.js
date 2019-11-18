//Scripts starts here

//Global Variables
const myDiceApp = {};
const $userMoneyIndicator = $('#userMoneyIndicator');
const $userScoreIndicator = $('#userScoreIndicator');
const $diceGrid = $('#diceGrid');
const dicesRolled = [];
let userMoney = 50;
let userBet = 0;
let userTotalScore = 0;
let computerTotalScore = 0;
let betPlaced = false;
let roundOver = false;

// Animates Start Screen Dices Function
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

// Controls the Instructions Menu Button Function
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

// Controls the Play Buttons Function
myDiceApp.buttonEvents = function() {

    const $start = $('#start');
    const $rollNewDice = $('#rollNewDice');
    const $stand = $('#stand');
    const $bet = $('#bet');
    const $playButtons = $('#playButtons');

    $start.on('click', function(){

        const $footer = $('#footer');

        $footer.css({
            'margin': '148px 0 0',
            'padding': '0',
            'position': 'initial'
        });
        $userMoneyIndicator.addClass('showUserMoneyIndicator');
        $rollNewDice.addClass('showPlayButton');
        $stand.addClass('showPlayButton');
        $bet.addClass('showPlayButton');
        $(this).addClass('hideStartButton');
        $diceGrid.empty();
    }); 

    $rollNewDice.on('click', function(){
        if (betPlaced === true && roundOver === false) {

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
        }
        else if (userMoney === 0 || roundOver === true) {
            Swal.fire(`Either you have no money or you have ended the round, please click the stand button to continue!`);
        }
        else {
            Swal.fire(`You haven't place a bet yet!`);
        }
    });

    $bet.on('click', function(){
        const $validationMessage = $('#swal2-validation-message');
        $validationMessage.attr({
            'margin-left': '0',
            'margin-right': '0'
        });

        if (betPlaced === false) {
            Swal.fire({
                title: 'Enter a bet in dollars',
                input: 'number',
                inputPlaceholder: 'Ex. 5, 10...',
                showCancelButton: true,
                inputValidator: (bet) => {
                    if (!bet || bet < 1 || bet === '.') {
                        return 'You need to write a whole number to bet!'
                    }
                    else if (bet > userMoney) {
                        return 'You do not have enough money to make that bet!'
                    }
                },
                showCancelButton: true,
                confirmButtonText: 'Bet'
            }).then((bet) => {
                if (bet.value) {
                    userBet = bet.value;
                    userMoney = userMoney - userBet; 
                    $userMoneyIndicator.html(`<p>you bet $${bet.value}</p> <p>current balance: $${userMoney}</p>`);
                    betPlaced = true;
                }
            });
        }    
        else {
            Swal.fire('You have already placed a bet!');
        }
    });

    $playButtons.on('submit', function(e){
        
        e.preventDefault();

        if (betPlaced === true) {
            roundOver = true;
            myDiceApp.roundResult();
        }
        else {
            Swal.fire(`You haven't placed a bet yet!`);
        }
    });  

}

// Controls the User's Dice roll Function
myDiceApp.rollDice = function() {
    
    const diceNum = this.randomNumGenerator();
    
    if (diceNum === 1) {
        $diceGrid.append(`<li>
                            <div class="dice diceFace1">
                                <span class="dot1"></span>
                            </div>
                          </li>`);
        userTotalScore = userTotalScore + 1;
        dicesRolled.push(1);
        $userScoreIndicator.html(`<p>your total score is ${userTotalScore}</p>`);
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
        $userScoreIndicator.html(`<p>your total score is ${userTotalScore}</p>`);
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
        $userScoreIndicator.html(`<p>your total score is ${userTotalScore}</p>`);
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
        $userScoreIndicator.html(`<p>your total score is ${userTotalScore}</p>`);
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
        $userScoreIndicator.html(`<p>your total score is ${userTotalScore}</p>`);
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
        $userScoreIndicator.html(`<p>your total score is ${userTotalScore}</p>`);
    };
}

// Generates a Random Number Function
myDiceApp.randomNumGenerator = function() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
}

// Controls the Dealer's Score Function
myDiceApp.computerScoreGenerator = function() {
    const computerDiceNum = this.randomNumGenerator();
  if ((computerTotalScore < 21 || computerTotalScore !== 21) && userTotalScore < 21) {
      computerTotalScore = computerTotalScore + computerDiceNum;
    }
}

// Determines the Score Results Function
myDiceApp.roundResult = function() {

    const userRolls = dicesRolled.join('+');
    const blackjackSound = new Audio('assets/blackjackSoundEffect.mp3');
    const winSound = new Audio('assets/winSoundEffect.mp3');
    const loseSound = new Audio('assets/loseSoundEffect.mp3');
    const trySound = new Audio('assets/trySoundEffect.mp3');
    const scores = `<p>Your dice numbers: ${userRolls}</p>
    <p>Your dice score: ${userTotalScore}</p>
    <p>Computer dice score: ${computerTotalScore}</p>`;
    const showResultAnimation = 'animated fadeInDown faster';
    const hideResultAnimation = 'animated fadeOutUp faster';

    if (userTotalScore === 21) {
        blackjackSound.play();
        userBet = userBet * 2;
        userMoney = userMoney + userBet;
        Swal.fire({
            title: 'Blackjack, You Win!!!',
            imageUrl: 'assets/nice.gif',
            imageWidth: 200,
            imageHeight: 200,
            html: `${scores} <p>You won $${userBet}!</p>`,
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
        userBet = userBet * 2;
        userMoney = userMoney + userBet;
        winSound.play();
        Swal.fire({
            title: 'You Win!!! :)',
            html: `${scores} <p>You won $${userBet}!</p>`,
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
        loseSound.play();
        Swal.fire({
            title: 'Busted, You Lose!!!',
            html: `${scores} <p>You lost $${userBet}!</p>`,
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
        loseSound.play();
        Swal.fire({
            title: 'Dealer Won, You Lose :(',
            html: `${scores} <p>You lost ${userBet}!</p>`,
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
        trySound.play();
        Swal.fire({
            title: 'Did you even try? :/!',
            html: `${scores} <p>You lost $${userBet}!</p>`,
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

// Clears the Board for a New Round Function
myDiceApp.newRound = function() {
    
    const gameOverSound = new Audio('assets/gameOverSoundEffect.mp3');
  
    if (userMoney !== 0) {
        $userMoneyIndicator.html(`<p>current balance: $${userMoney}</p>`);
        userTotalScore = 0;
        userBet = 0;
        betPlaced = false;
        computerTotalScore = 0;
        dicesRolled.length = 0;
        roundOver = false;
        $diceGrid.empty();
        $userScoreIndicator.empty();
    }
    else {
        gameOverSound.pause();
        gameOverSound.currentTime = 0;
        gameOverSound.play();
        Swal.fire({
            icon: 'error',
            title: `You ran out of money!!!`,
            html: '<p class="newGame">A new game will now begin</p>'
        });
        userMoney = 50;
        userBet = 0;
        betPlaced = false;
        $userMoneyIndicator.html(`<p>current balance: $${userMoney}</p>`);
        userTotalScore = 0;
        computerTotalScore = 0;
        dicesRolled.length = 0;
        roundOver = false;
        $diceGrid.empty();
        $userScoreIndicator.empty();
    }
}

myDiceApp.init = function() {
    
    myDiceApp.menuEvents();
    myDiceApp.buttonEvents();
    myDiceApp.startScreenDices();
}

$(function() {
    myDiceApp.init();
});
//Scripts ends here