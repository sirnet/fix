var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:30,
    autoWidth:true,
    items:4
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

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
    let btnClose = document.getElementById("btn_click");
    let formAction = document.getElementById("form-action");
    let btnAction = document.getElementById("btn-action");
    let closeForm = document.getElementById("close-form");

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
})