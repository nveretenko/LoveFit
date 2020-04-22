
$(document).ready(function() {
    (function () {
        var overlay = $('.img-overlay');
        overlay.click(function () {

            var imgContainer = $(this).parent('.img-container');
            var imgInner = $(this).siblings('.img-container__item').find('.img-inner');

            $(this).removeClass('img-overlay').parent().addClass('activate').parent().addClass('z-index');

            imgInner.mouseout(function(){
                imgContainer.removeClass('activate').parent().removeClass('z-index');
                overlay.addClass('img-overlay');
            });
        });
    })()
});
