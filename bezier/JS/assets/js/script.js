// JavaScript to toggle the menu on click
  $(function() {
    $('#hamMenu').on('click', function() {
      var element = $('#nav-items');
      if (element.css('display') === 'none') {
        element.css('display', 'flex');
      } else {
        element.css('display', 'none');
      }
    });
  });
$(document).ready(function () {

    // toggle mobile menu
    /*$('[data-toggle="toggle-nav"]').on('click', function () {
        $(this).closest('nav').find($(this).attr('data-target')).toggleClass('nav-items');
        return false;
    });*/

    // feather icons
    feather.replace();

    // smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]');

    // tiny slider
    $('#slider-1').slick({
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    $('#slider-2').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        customPaging: function (slider, i) {
            return '<div class="bg-white br-round w-1 h-1 opacity-50 mt-5" id=' + i + '> </div>'
        },
        responsive: [{
            breakpoint: 960,
            settings: {
                slidesToShow: 1
            }
        }, ]
    });
});