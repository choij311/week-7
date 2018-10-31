$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.subnav').slideDown(300);
        },
        function(){
            $(this).children('.subnav').slideUp(300);
        }
    );
}); // end ready