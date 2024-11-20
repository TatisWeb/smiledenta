// JavaScript change text on modal

document.getElementById('feedback_btn').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('text_modal').innerHTML = "Вы можете оставить отзыв, будем очень признательны!";
});

document.getElementById('modal_btn').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('text_modal').innerHTML = "Оставьте заявку и мы <br> вам перезвоним";
});


// pure JavaScript
//menu nav background-color if scrolled

document.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
    document.querySelector('.header-menu-pc').classList.add('nav__color');
  } else {
    document.querySelector('.header-menu-pc').classList.remove('nav__color');
  }
});

// button intro
const menuBtn = document.querySelector('.menu-btn');
if (menuBtn) {
  menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.menu').classList.toggle('menu_active');
    document.querySelector('.content').classList.toggle('content_active');
    this.classList.toggle('menu-btn_active');
  });
}

//button menu main
const menuCloseBtn = document.querySelector('.menu-close-btn');
if (menuCloseBtn) {
  menuCloseBtn.addEventListener('click', function(u) {
    u.preventDefault();
    document.querySelector('.menu').classList.remove('menu_active');
    document.querySelector('.content').classList.remove('content_active');
    document.querySelector('.menu-btn').classList.remove('menu-btn_active');
  });
}

//button want bay
const btnNeon = document.querySelector('.btn-neon');
if (btnNeon) {
  btnNeon.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.modal-s__main').classList.toggle('show');
  });
}

//button want bay design
const btnDesign = document.querySelector('.btn-design');
if (btnDesign) {
  btnDesign.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.modal-s__main').classList.toggle('show');
  });
}

// modal button
const modalButton = document.querySelector('._modal');
if (modalButton) {
  modalButton.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.modal-s__main').classList.add('show');
  });
}

// modal close button
const modalBtn = document.querySelector('.modal-btn');
if (modalBtn) {
  modalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.modal-s__main').classList.remove('show');
    //document.body.classList.remove('no-scroll');
  });
}



//first slider owl corusel 2
$(document).ready(function() {

 $(function() {
  // Owl Carousel
 $(".owl-carousel").owlCarousel({
   items: 1,
   margin: 0,
   loop: true,
   nav: false,
   navSpeed: 500,
   dots: false
  });
  
  var owl = $(".anim");
  owl.owlCarousel();
  $('.js-owl-prev').click(function() {
   owl.trigger('next.owl.carousel');
  });
  $('.js-owl-next').click(function() {
   owl.trigger('prev.owl.carousel');
  });
 });
});


// first slider animation

$(document).ready(function() {

 // Declare Carousel jquery object
 var owl = $('.anim');

 // Carousel initialization
 
 // add animate.css class(es) to the elements to be animated
 function setAnimation(_elem, _InOut) {
  // Store all animationend event name in a string.
  // cf animate.css documentation
  var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  _elem.each(function() {
   var $elem = $(this);
   var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

   $elem.addClass($animationType).one(animationEndEvent, function() {
    $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
   });
  });
 }

 // Fired before current slide change
 owl.on('change.owl.carousel', function(event) {
  var $currentItem = $('.owl-item', owl).eq(event.item.index);
  var $elemsToanim = $currentItem.find("[data-animation-out]");
  setAnimation($elemsToanim, 'out');
 });

 // Fired after current slide has been changed
 owl.on('changed.owl.carousel', function(event) {

  var $currentItem = $('.owl-item', owl).eq(event.item.index);
  var $elemsToanim = $currentItem.find("[data-animation-in]");
  setAnimation($elemsToanim, 'in');
 })

});

// second slider owl carousel 2

 $(function() {
  // Owl Carousel 2
 $('.slider-2').owlCarousel({
 loop: true,
 margin: 10,
 nav: false,
 items: 1,
 dots: false,
 autoplay: true,
 autoplayTimeout: 15000,
 smartSpeed: 3000,
 responsive: { //Адаптация в зависимости от разрешения экрана
   0: {
     items: 1
   },
   800: {
     items: 2
   },
   2500: {
     items: 3
   }
 }
 });
 
 });
