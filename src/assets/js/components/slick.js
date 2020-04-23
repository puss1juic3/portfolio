var contentSlider = $('.content-slider');
var scrollCount = null;
var scroll= null;

contentSlider.slick({
    arrows: false,
    dots: true,
    infinite: true,
    vertical: true,
    verticalScrolling: true,
    swipe:true,
    swipeToSlide:true,
});

contentSlider.on('wheel', (function(e) {
    e.preventDefault();

    clearTimeout(scroll);
    scroll = setTimeout(function(){scrollCount=0;}, 200);
    if(scrollCount) return 0;
    scrollCount=1;

    if (e.originalEvent.deltaY > 0) {
        $(this).slick('slickNext');
    } else {
        $(this).slick('slickPrev');
    }
}));