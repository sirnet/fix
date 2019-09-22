var owl = $('.owl-carousel-gallery');
owl.owlCarousel({
    loop:true,
    margin:30,
    autoWidth:true,
    items:1
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});





    
     
    
     
