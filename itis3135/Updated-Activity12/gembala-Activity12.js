$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        randomStart: true,
        moveSlides: 1,
        captionsL: true,
        speed: 3000,
        pager: true,
        pageSelector: "#id_pager",
        pagerType: "short"
    });
});