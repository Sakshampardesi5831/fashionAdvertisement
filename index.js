//Initiation of Swiper js
var mySwiper= new Swiper('.swiper',{
    effect:"",
    loop:true,
    speed:800,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    pagination:{
        el:".swiper-pagination",
        type:"bullets",
        clickable:true
    }
});

//transitions for all alides 
 var btnPrev=document.querySelector(".swiper-button-prev"),
     btnNext=document.querySelector(".swiper-button-next"),
     sliderText=document.querySelectorAll(".slide-text"),
     slides=document.querySelectorAll(".swiper-slide .number");
btnNext.addEventListener("click",transitionSlideNext);
btnPrev.addEventListener("click",transitionSlidePrev);

function transitionSlideNext(){
    var slideActiveText=document.querySelector(".swiper-slide-active .slide-text"),
      slidePrevText=document.querySelector(".swiper-slide-prev .slide-text");

      slidePrevText.classList.remove("playText");
      slideActiveText.classList.add("playText");
}
function transitionSlidePrev(){
    var slideActiveText=document.querySelector(".swiper-slide-active .slide-text"),
      slidePrevText=document.querySelector(".swiper-slide-next .slide-text");
      slidePrevText.classList.remove("playText");
      slideActiveText.classList.add("playText");
}