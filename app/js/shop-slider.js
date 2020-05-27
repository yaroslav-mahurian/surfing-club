$(document).ready(function(){
    
    const shopSlider =  $("#shopSlider");

    shopSlider.owlCarousel({
        loop: true,
        dots: false,
        smartSpeed: 500,
        margin: 2,
        responsive: {
            //breakpoint from 0 up
            0: {
                items: 1,
            },
            //breakpoint from 1254 up
            1254: {
                items: 3,
            }
        }
    });
    
    $('#shopSliderRight').click(function() {
        shopSlider.trigger('next.owl.carousel');
        
    })

    $('#shopSliderLeft').click(function() {
        shopSlider.trigger('prev.owl.carousel');
    })
    
});