const cartButton = document.querySelector("#cart-btn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const FooterBtnClose = document.querySelector(".model__footer__btn__close");


cartButton.addEventListener('click', function (event){
    modal.classList.add('is__open');
});
close.addEventListener('click', function (event){
    modal.classList.remove('is__open');
});
FooterBtnClose.addEventListener('click', function (event){
    modal.classList.remove('is__open');
});

new WOW().init();
// Это краткая версия кода выше, сделаная через функцию
//
// cartButton.addEventListener('click', toggeModel);
// close.addEventListener('click', toggeModel);
// function toggeModel(){
//     modal.classList.toggle("is__open");
// }

