$( document ).ready(function() {
    var setClock = 600;
    $('.clock').each(function() {
        var clock = $(this);
        clock.FlipClock(setClock, {
            clockFace: 'HourlyCounter',
            countdown: true,
            language: 'it',
            autoStart:true
        });
    });
    $('select').niceSelect();

    if (screen.width < 768) {
        $('.slick').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows:false,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    }


});
