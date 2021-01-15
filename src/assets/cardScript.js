
$('.butt').click(function () {
    var element = $(this);
    var tmpClass = element.attr('class');
    element.removeClass();
    setTimeout(function () {
        element.offsetWidth = element.offsetWidth;
        element.addClass(tmpClass).addClass('start-now');
    }, 10);
});