var owl = $('.owl-carousel-gallery');
owl.owlCarousel({
    loop:true,
    margin:30,
    autoWidth:true,
    items:1
});


$(function(){
    var burgerList = document.getElementById("burger__List");
    var firstItem = document.getElementById("first");
    var secondItem = document.getElementById("second");
    var thirdItem = document.getElementById("third");
    var fourthItem = document.getElementById("fourth");
    var i=0;
    burgerList.onclick =  function(){
        if (i ==0) {
            firstItem.classList.add("visually-hidden");
            secondItem.classList.add("second--active");
            thirdItem.classList.add("third--active");
            fourthItem.classList.add("visually-hidden");
            i=1;
        }
        else {
            firstItem.classList.remove("visually-hidden");
            secondItem.classList.remove("second--active");
            thirdItem.classList.remove("third--active");
            fourthItem.classList.remove("visually-hidden");
            i=0;
        }
    }

    let btnPosition = document.getElementById("btn-position");
    let formAction = document.getElementById("form-action");
    let btnAction = document.getElementById("btn-action");
    let closeForm = document.getElementById("close-form");
    let btnClose = document.getElementById("btn_click");


    btnPosition.onclick =  function(){
        btnPosition.classList.add("btn-action");
        formAction.classList.add("form__main-action")
    }

    btnAction.onclick =  function(){
        btnPosition.classList.add("btn-action");
        formAction.classList.remove("form__main-action")
    }
    closeForm.onclick = function() {
        formAction.classList.remove("form__main-action")
        btnPosition.classList.remove("btn-action");
    }
    
    btnClose.onclick =  function(){
        btnClose.classList.add("btn-action");
        formAction.classList.add("form__main-action")
    }

    btnAction.onclick =  function(){
        btnClose.classList.add("btn-action");
        formAction.classList.remove("form__main-action")
    }
    closeForm.onclick = function() {
        formAction.classList.remove("form__main-action")
        btnClose.classList.remove("btn-action");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
    } else {
    $('.scrollup').fadeOut();
    }
    });

$('a[href*="#"]').click(function(){
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    
        $('html').animate({scrollTop: destination}, 1000);
    return false;
});

 $(document).on("click", ".scrollup", function(e) {
    e.preventDefault();
    $('body, html').animate({scrollTop: 0}, 800);
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('scroll-active');
        })
        $(this).addClass('scroll-active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("scroll-active");
            currLink.addClass("scroll-active");
        }
        else{
            currLink.removeClass("scroll-active");
        }
    });
}

$(function(){
    let modalBack = document.getElementById("modal__back");
    let mainWrap = document.getElementById("mainWrap");
    let mainGallery = document.getElementById("mainGallery");
    let btnClick = document.getElementById("btn_click");

    

    modalBack.onclick = function(){
        mainWrap.classList.remove("main__wrap--active");
        mainGallery.classList.add("main__modal-gallery--active");
        btnClick.classList.remove("visually-hidden");
    }

    let serviceModal = $("[data-app]");
    serviceModal.on("click", function(){
        mainWrap.classList.add("main__wrap--active");
        mainGallery.classList.remove("main__modal-gallery--active");
        btnClick.classList.add("visually-hidden");
    });
});

$(function(){
    var boxes=[],els,i,l;
    if(document.querySelectorAll){
    els=document.querySelectorAll('a[rel=simplebox]');	
    Box.getStyles('simplebox_css','js/assets/simplebox/simplebox.css');
    Box.getScripts('simplebox_js','js/assets/simplebox/simplebox.js',function(){
    simplebox.init();
    for(i=0,l=els.length;i<l;++i)
    simplebox.start(els[i]);
    simplebox.start('a[rel=simplebox_group]');			
    });
    }
    });