var contentSlider = $('.content-slider');
var scrollCount = null;
var scroll= null;

contentSlider.slick({
    arrows: false,
    dots: true,
    infinite: false,
    vertical: true,
    verticalScrolling: true,
    swipe:true,
    swipeToSlide:true,
    customPaging: function(slick,index) {
        switch (index) {
            case 0:
                return '<span class="nav__item-dot"></span><span class="nav__numbers">' + '0' + (index + 1) + '</span>' + '<span class="nav__text">Home</span>';
            case 1:
                return '<span class="nav__item-dot"></span><span class="nav__numbers">' + '0' + (index + 1) + '</span>' + '<span class="nav__text">Works</span>';
            case 2:
                return '<span class="nav__item-dot"></span><span class="nav__numbers">' + '0' + (index + 1) + '</span>' + '<span class="nav__text">About</span>';
            case 3:
                return '<span class="nav__item-dot"></span><span class="nav__numbers">' + '0' + (index + 1) + '</span>' + '<span class="nav__text">Contacts</span>';
            case 4:
                return '<span class="nav__item-dot"></span><span class="nav__numbers">' + '0' + (index + 1) + '</span>' + '<span class="nav__text">Hire us</span>';
        }
    }
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