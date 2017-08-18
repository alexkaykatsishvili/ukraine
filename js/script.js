;(function ($) {
    $(function () {

    });
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 1000);
        return false;
    });
    $('.parallax-window').parallax({imageSrc: 'images/kyiv.jpg'});
    $('.parallax-window-second').parallax({imageSrc: 'images/odessa.jpg'});
})(jQuery);