$(document).ready(function() {
    $('.header__item').click(function() {
        $('.header__item').removeClass('active1');
        $(this).addClass('active1');
        $(this).location.href = url.value;
        return false;
    });
});



