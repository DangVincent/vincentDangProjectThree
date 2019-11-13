const myDiceApp = {};

myDiceApp.events = function() {

    const $instructionsMenuIcon = $('.instructionsMenuIcon');
    const $instructionsMenu = $('.instructionsMenu');

    $instructionsMenuIcon.on('click', function(){
        let $closeMenuIcon = $(this).find('.fas');
        $closeMenuIcon.toggleClass('fas fa-bars fas fa-times');
        $instructionsMenu.toggleClass('showInstructionsMenu');
    });

}

myDiceApp.init = function() {
    myDiceApp.events();
}

$(document).ready(function() {
    myDiceApp.init();
});