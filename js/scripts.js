var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


$(function(){
    let arrch = $('[data-services]');
    let model = $('[data-model]');
    let inputModel1 = document.getElementById('model-services1')
    let inputModel2 = document.getElementById('model-services2')
    let perID = 0;
    arrch.on('click', function(){
        let services = $(this).data("services");
        let war = $('.services__item--active')
        
        war.removeClass("services__item--active");
        $(this).addClass('services__item--active');

        if (services == 'apple'){
            $('.drugii__list').removeClass('model__list--active');
            $('.apple__list').addClass('model__list--active');

            /* for (var i = 0; i < marks.length; i++) marks[i].onclick = function () {
                ratevalue.value = this.innerHTML;
                ratedisplay.className = "rate" + this.innerHTML
                } */
                


            let elementUL = document.getElementById('ml-1').getElementsByTagName('li');
            for(var j =0; j< elementUL.length; j++) elementUL[j].onclick = function(){
                let h = elementUL[j];
                $('.model__item').removeClass('model__item--active');
                inputModel1.value ='iphone ' + this.innerHTML;
                inputModel2.value = 'iphone ' + this.innerHTML;
                $(this).addClass('model__item--active');
                $('.table_btn').addClass('table_btn--active');
            }

            
        }

        if (services == 'samsung'){
            $('.apple__list').removeClass('model__list--active');
            $('.drugii__list').removeClass('model__list--active');


        }

        if (services == 'xaomi'){
            $('.apple__list').removeClass('model__list--active');
            $('.drugii__list').removeClass('model__list--active');
        }

        if(services == "drugii"){
            $('.apple__list').removeClass('model__list--active');
            $('.drugii__list').addClass('model__list--active');

            let elementUL = document.getElementById('ml-2').getElementsByTagName('li');
            for(var j =0; j< elementUL.length; j++) elementUL[j].onclick = function(){
                let h = elementUL[j];
                $('.model__item').removeClass('model__item--active');
                inputModel1.value ='iphone ' + this.innerHTML;
                inputModel2.value = 'iphone ' + this.innerHTML;
                $(this).addClass('model__item--active');
                console.log(j);
                $('.table_btn').addClass('table_btn--active');
            }

            
        }

        $('.table_btn').on('click', function(){
            $('.modal__services').addClass('modal__services--active');
            document.body.style.overflow = "hidden";
            
            destination = $('.modal__services').height();
            document.getElementById('modal__services').style.top = destination + 'px';
            $('html').animate({scrollTop: destination}, 1000);
        })

        $('.service__close').on('click', function(){
            $('.modal__services').removeClass('modal__services--active');
            document.body.style.overflow = "unset";
            
        });

    })

    var delay = false;

  
});

var anchors = [];
var currentAnchor = -1;
var isAnimating  = false;

$(function(){
    
    function updateAnchors() {
        anchors = [];
        $('.anchor').each(function(i, element){
            anchors.push( $(element).offset().top );
        });
    }
    
    $('body').on('mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        if( isAnimating ) {
            return false;
        }
        isAnimating  = true;
        // Increase or reset current anchor
        if( e.originalEvent.wheelDelta >= 0 ) {
            currentAnchor--;
        }else{
            currentAnchor++;
        }
        if( currentAnchor > (anchors.length - 1) 
           || currentAnchor < 0 ) {
            currentAnchor = 0;
        }
        isAnimating  = true;
        $('html, body').animate({
            scrollTop: parseInt( anchors[currentAnchor] )
        }, 500, 'swing', function(){
            isAnimating  = false;
        });
    });

    updateAnchors();   
    
});


/* var Arrt = $('[data-scroll]');
//var scrollArrt = Arrt.data("scroll");
var scrollArrt = Arrt[1];
console.log(scrollArrt);
var scrollPos = scrollArrt.clientHeight;
console.log(scrollPos);
function onScroll(event){
    var scroll = $(document).scrollTop();
    console.log(scroll);
    var refElement = $(currLink.attr("href"));
         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
             $('#menu-center ul li a').removeClass("scroll-active");
             currLink.addClass("scroll-active");
         }
         else{
             currLink.removeClass("scroll-active");
         }
} */



    
    

// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('#menu-center a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('#menu-center ul li a').removeClass("scroll-active");
//             currLink.addClass("scroll-active");
//         }
//         else{
//             currLink.removeClass("scroll-active");
//         }
//     });
// }



/* $(function(){
    let clickApple = document.getElementById("click-apple");
    let clickSamsung = document.getElementById("click-samsung");
    let clickXiaomi = document.getElementById("click-xiaomi");
    let clickDrugii = document.getElementById("click-drugii");

    let modList = document.getElementById("ml-1");

    clickApple.onclick = function(){
        clickApple.classList.add("services__item--active")
        modList.classList.add("model__list--active")
    }

    clickSamsung.onclick = function(){
        clickSamsung.classList.add("services__item--active")
        modList.classList.add("model__list--active")
    }

    clickXiaomi.onclick = function(){
        clickXiaomi.classList.add("services__item--active")
        modList.classList.add("model__list--active")
    }

    clickDrugii.onclick = function(){
        clickDrugii.classList.add("services__item--active")
        modList.classList.add("model__list--active")
    }
}); */