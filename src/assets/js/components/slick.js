//Content slider
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
        var items = [
            "Home",
            "Works",
            "About",
            "Contacts",
            "Hire us",
        ];
        return '<span class="nav__item-dot"></span><span class="nav__numbers">' + '0' + (index + 1) + '</span>' + '<span class="nav__text">' + items[index]+ '</span><span class="nav__dot-1"></span><span class="nav__dot-2"></span><span class="nav__dot-3"></span>';
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

//Home slider
var homeSlider = $('.home-slider');

homeSlider.slick({
    arrows: false,
    dots: true,
    infinite: true,
    swipe: false,
    swipeToSlide:false,

    customPaging: function(slick,index) {
        var title = [
            "Metiew & Smith",
            "Fantasy interactive",
            "Paul & shark",
        ];
        var text = [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        ];
        return '<div class="home-slider__tab">' +
            '<h2 class="home-slider__tab-heading">' + title[index] + '</h2>' +
            '<p class="home-slider__tab-text">' + text[index] + '</p>' +
            '</div>';
    }
});

//TODO Center for pages content
//homeSlider.css('height', $('.content-slider').height() + 'px');

//Works slider
var worksSlider = $('.works-slider');

var ws__prev = $('.works-slider__prev');
var ws__next = $('.works-slider__next');

worksSlider.slick({
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    infinite:true,
});

ws__prev.appendTo('.works-slider>.slick-list');
ws__next.appendTo('.works-slider>.slick-list');

ws__prev.click(function () {
    worksSlider.slick('slickPrev');
});

ws__next.click(function () {
    worksSlider.slick('slickNext');
});







