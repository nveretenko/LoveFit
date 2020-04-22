
/*********************Carousel-trainers*******************************************/

$(document).ready(function () {
    (function () {
        var next = $('.carousel-next');
        var prev = $('.carousel-prev');
        var carouselItems = $('.carousel-items');

        next.click(function () {
            var carousel = $(this).parents('.carousel');
            next_carousel(carousel);
            return false;
        });

        prev.click(function () {
            var carousel = $(this).parents('.carousel');
            prev_carousel(carousel);
            return false;
        });

        function prev_carousel(carousel){
            var block_width = $(carousel).find('.carousel__item').outerWidth();
            $(carousel).find('.carousel__item').eq(-1).clone().prependTo($(carousel).find(carouselItems));
            $(carousel).find(carouselItems).css({"left":"-"+block_width+"px"});
            $(carousel).find('.carousel__item').eq(-1).remove();
            $(carousel).find(carouselItems).animate({left: "0px"}, 200);

        }
        function next_carousel(carousel){
            var block_width = $(carousel).find('.carousel__item').outerWidth();
            $(carousel).find(carouselItems).animate({left: "-"+ block_width +"px"}, 200, function(){
                $(carousel).find('.carousel__item').eq(0).clone().appendTo($(carousel).find(carouselItems));
                $(carousel).find('.carousel__item').eq(0).remove();
                $(carousel).find(carouselItems).css({"left":"0px"});
            });
        }
    })();
    /****************Popup Carousel-trainers********************************************/

    (function () {

        var overlay = $('.overlayPopup');
        var close = $('.modal-close, .overlayPopup');
        var modal = $('#trainerPopup');


        $('.js-open-modal').click(function (event) {
            var name = $(this).data('name');
            $('.trainers').addClass('fixed');

            $('.subtitle').text(name);
            $.merge( modal, overlay).css('display', 'block');
        });

        close.click(function (event) {
            $('.trainers').removeClass('fixed');

            $(this).css('display', 'none');
            modal.css('display', 'none');
            $('.modal-close').css('display', 'block');
        });
    })();


    /*********************Carousel-comments*********************************************/

    $(document).ready(function () {

        var carouselComments = $('.carousel__comments'),
            carouselComment = $('.carousel__comment'),
            next = $('.carousel__button_action_next'),
            prev = $('.carousel__button_action_prev'),
            i = carouselComment.length,
            offset = 100;

        carouselComment.eq(0).addClass('carousel__comment_state_active');

        var innerFn = function (pole) {
            var index = carouselComment.filter('.carousel__comment_state_active').index();
            carouselComment.eq(index+pole).addClass('carousel__comment_state_active').siblings().removeClass('carousel__comment_state_active');
            carouselComment.eq(index+pole).next().addClass('carousel__comment_state_next').siblings().removeClass('carousel__comment_state_next');
            carouselComment.eq(index+pole).prev().addClass('carousel__comment_state_prev').siblings().removeClass('carousel__comment_state_prev');
            offset -= 100*pole;
            carouselComments.css('margin-left', offset+'%');
        };

        next.click(function () {
            var index = carouselComment.filter('.carousel__comment_state_active').index();
            innerFn(1);
            if (index == i-2) {
                carouselComment.removeClass('carousel__comment_state_next');
                $(this).prop('disabled', true).addClass('disabled');
            }
            prev.prop('disabled', false).removeClass('disabled');
        });

        prev.click(function () {
            var index = carouselComment.filter('.carousel__comment_state_active').index();
            innerFn(-1);
            if (index == 1) {
                carouselComment.removeClass('carousel__comment_state_prev');
                $(this).prop("disabled", true).addClass('disabled');
            }
            next.prop('disabled', false).removeClass('disabled');
        });
    });
});