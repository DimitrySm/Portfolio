$(function() {

    /*NAV TOGGLE*/
    let nav = $('#nav');
    let navToggle = $('#navToggle');

    $("#navToggle").on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

});
