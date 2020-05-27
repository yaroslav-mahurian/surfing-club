$(document).ready(function(){

const softScroll = function (id) {
    $(id).click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
};

    softScroll("a[href^='#stories");
    softScroll("a[href^='#events");
    softScroll("a[href^='#places");
    softScroll("a[href^='#boards");
});