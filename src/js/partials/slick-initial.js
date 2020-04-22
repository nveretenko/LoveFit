$(".trainers .carousel").slick({

    // normal options...

    // the magic
    responsive: [{

        breakpoint: 3000,
        settings: {
            slidesToShow: 3
        }

    },
        {

        breakpoint: 1200,
        settings: {
            slidesToShow: 2
        }

    }, {

        breakpoint: 991,
        settings: {
            slidesToShow: 1
        }

    }, {

        breakpoint: 320,
        settings: "unslick" // destroys slick

    }]
});