(function(){
    initialSwiper();
    clickHamburger();

    var controller = new ScrollMagic.Controller();
  
  var tween1 = TweenMax.to('.bg-img img', 0.5, {
    scale: 1.2,
    y:-'140px'
  });
  
    
  var tween2 = TweenMax.to('.main .scroll-down', 0.5, {
    opacity:0
  });


  var tween3 = TweenMax.to('.bg-area img', 0.5, {
    scale: 1.1
  });

  var tween4 = TweenMax.to('.roller-top', 0.5, {
    x:'20%'
  });

  var tween5 = TweenMax.to('.roller-bottom', 0.5, {
    x:'-20%'  

  });


  
  var scene = new ScrollMagic.Scene({
    triggerElement: ".main",
    duration: "100%"
  })
  .setTween(tween1)
  .addTo(controller)

  var scene2 = new ScrollMagic.Scene({
    triggerElement :".main",
    duration : "100%",
    offset: 300
})
  .setTween(tween2)
  .addTo(controller)

  var scene3 = new ScrollMagic.Scene({
    triggerElement :".bottom-section",
    duration : "100%",
})
  .setTween(tween4)
  .addTo(controller)
  var scene4 = new ScrollMagic.Scene({
    triggerElement :".bottom-section",
    duration : "100%",
})
  .setTween(tween5)
  .addTo(controller)
})();

function initialSwiper(){
    var mainSwiper = new Swiper('.slide-section .container > .swiper-container', {
        slidesPerView:1,
        pagination: {
        el: '.slide-section .swiper-pagination',
        clickable:true
    },    
    });

    $('.slide-section .swiper-pagination span').append('<div class="circle-arrow"><svg class="circle-container" viewBox="0 0 50 50" width="50" height="50"><circle class="circle" cx="25" cy="25" r="14" stroke="#b51f1f" stroke-width="2px" fill="transparent"></circle></svg></div>')

    var threeSwiper = new Swiper('.three-sections .sections-slides > .swiper-container', {
        slidesPerView:'auto',
        spaceBetween:15,
        freeMode:true,
        mousewheel:false,
        pagination: {
        el: '.three-sections .swiper-pagination',
        clickable:true
    },    
    breakpoints:{
        768:{
    spaceBetween:50,
    mousewheel:true
        }
    }
    });
}


function clickHamburger(){
    var header = document.querySelector('.header')
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('.menu');
    hamburger.addEventListener('click',function(){
        menu.classList.toggle('on');
        hamburger.classList.toggle('on');
        if(menu.classList.contains('on')){
            document.body.style.overflowY = 'hidden';
        }else{
            document.body.style.overflowY = 'auto';
        }
    })
}