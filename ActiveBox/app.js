$(function() {

   /* FIXID HEADER */

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();






    $(window).on("scroll load resize", function(){
        let introH = intro.innerHeight();

        scrollPos = $(this).scrollTop();

        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });



    /* SMOOTH SCROLL */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();


        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('show');


        $("html, body").animate ({
            scrollTop: elementOffset - 70
        }, 700);

    });


    /*NAV TOGGLE*/
    let nav = $('#nav');
    let navToggle = $('#navToggle');

    $("#navToggle").on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });



    /*Reviews https://kenwheeler.github.io/slick/ */

    let slider = ("#reviewsSlider");


    slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });








});
