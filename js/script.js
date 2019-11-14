//
const myDiceApp = {};

myDiceApp.menuEvents = function() {

    const $instructionsMenuIcon = $('.instructionsMenuIcon');
    const $instructionsMenu = $('.instructionsMenu');

    $instructionsMenuIcon.on('click', function(){
        let $closeMenuIcon = $(this).find('.fas');
        $closeMenuIcon.toggleClass('fas fa-bars fas fa-times');
        $instructionsMenu.toggleClass('showInstructionsMenu');
    });

}

myDiceApp.init = function() {
    myDiceApp.menuEvents();
}

$(document).ready(function() {
    myDiceApp.init();
});