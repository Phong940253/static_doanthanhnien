//slider for all page
$('#image-ioslider-1').iosSlider({
        snapToChildren: true,
        desktopClickDrag: true,
        keyboardControls: false,
        infiniteSlider: true,
        navPrevSelector: '#image-prevButton',
        navNextSelector: '#image-nextButton',
        scrollbarHeight: "2",
        scrollbarBorderRadius: "0",
        scrollbarOpacity: "0.5",
        autoSlide: true,
        autoSlideTimer: 2000,
        onSlideComplete: slideContentComplete,
        onSlideStart: slideStartedMoving
});
$('#image-ioslider').iosSlider({
        snapToChildren: true,
        desktopClickDrag: true,
        keyboardControls: false,
        infiniteSlider: true,
        navPrevSelector: '#image-prevButton',
        navNextSelector: '#image-nextButton',
        scrollbarHeight: "2",
        scrollbarBorderRadius: "0",
        scrollbarOpacity: "0.5",
        autoSlide: true,
        autoSlideTimer: 2000,
        onSlideComplete: slideContentComplete,
        onSlideStart: slideStartedMoving
});
$('#business-ioslider').iosSlider({
    snapToChildren: true,
    desktopClickDrag: true,
    keyboardControls: false,
    infiniteSlider: true,
    navPrevSelector: '#business-prevButton',
    navNextSelector: '#business-nextButton',
    scrollbarHeight: "2",
    scrollbarBorderRadius: "0",
    scrollbarOpacity: "0.5",
    autoSlide: true,
    autoSlideTimer: 2000,
    onSlideComplete: slideContentComplete,
    onSlideStart: slideStartedMoving
});
$('#bigbanner-ioslider').iosSlider({
    snapToChildren: true,
    desktopClickDrag: true,
    keyboardControls: true,
    infiniteSlider: true,
    navPrevSelector: '#bigbanner-prevButton',
    navNextSelector: '#bigbanner-nextButton',
    scrollbarHeight: "2",
    scrollbarBorderRadius: "0",
    scrollbarOpacity: "0.5",
    autoSlide: true,
    autoSlideTimer: 3000,
    onSlideComplete: slideContentComplete,
    onSlideStart: slideStartedMoving
});
$("#breakingnews1").BreakingNews({
    background: '#FFF',
    title: '<img src="static/images/pull-quote-left-white.png"/>',
    titlecolor: '#FFF',
    titlebgcolor: '#4db2ec',
    linkcolor: '#2c54aa',
    linkhovercolor: '#4db2ec',
    fonttextsize: 12,
    isbold: false,
    border: 'solid 1px #4db2ec',
    width: '100%',
    timer: 3500,
    autoplay: true,
    effect: 'fade'

});

$(document).ready(function () {
    //Article
        $(".td-paragraph-padding-1").html($(".td-paragraph-padding-1").text());
        $(".td-paragraph").html($(".td-paragraph").text());
      
    });
   
var handleCountdown = function () {
    $('.countdown').ClassyCountdown({
        theme: "flat-colors",
        end: $.now() + (1458952200000 - $.now()) / 1000,
        labels: true,
        labelsOptions: {
            lang: {
                days: 'Ngày',
                hours: 'Giờ',
                minutes: 'Phút',
                seconds: 'Giây'
            }
        },
        style: {
            element: "",
            textResponsive: .6,
            days: {
                textCSS: 'font-family:\'Roboto\';'
            },
            hours: {
                textCSS: 'font-family:\'Roboto\';'
            },
            minutes: {
                textCSS: 'font-family:\'Roboto\'; '
            },
            seconds: {
                textCSS: 'font-family:\'Roboto\';'
            }


        }
    });
}