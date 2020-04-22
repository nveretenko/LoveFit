

/*******************Quiz******************************************************/

$('.quiz-list__btn-back').click(function() {
    var step = $(this).data('step');

    $('.quiz-list__item').css('display', 'none');
    $('.quiz-list__item_step-' + step).fadeIn();
});

/*******************endQuiz**************************************************************/

$('.quiz-list__btn').click(function () {
    var step = $(this).data('step');

    $('.quiz-list__item').css('display', 'none');
    $('.quiz-list__item_step-' + step).fadeIn(4);
});
