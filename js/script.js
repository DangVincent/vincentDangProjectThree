$(document).ready(function() {
    const $instructionsMenuIcon = $('.instructionsMenuIcon');

    $instructionsMenuIcon.on('click', function(){
        let closeMenu = $(this).find('.fas');
        closeMenu.toggleClass('fas fa-bars fas fa-times');
    });
});