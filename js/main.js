var owl = $('.owl-carousel');
owl.owlCarousel({
    nav:false,
    dots:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
        960:{
            items:3
        },
        1200:{
            items:3
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

var visibilitychangeLogEl = document.querySelector('.vector-line');
anime({
  targets: '.vector-line path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine', 
  duration: 3000, 
  delay: function(el, i) { return i * 10 }, 
  direction: 'alternate',
  loop: true, 
});

// let screenBootm = document.querySelector('.screen-bottom')
// screenBootm.addEventListener("mouseover", () => {
//   screenBootm.classList.add('animation-started')
// })
// Array.prototype.forEach.call(
//   document.querySelectorAll('.js-scroll'),
//   (el) => new SimpleBar(el)
// );

const mainPage = document.querySelector('.main-page')
const btns = document.querySelectorAll('.js-btn')
const screen = document.querySelectorAll('.js-screen')
const btnsBack = document.querySelectorAll('.js-btn-back')

btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    mainPage.classList.add('hidden')
    let btnsData = btn.getAttribute('data-screen')
    screen.forEach((item) => {
      item.classList.add('hidden')
      let screenId = item.getAttribute("id")
      if(btnsData === screenId) {
        item.classList.remove('hidden')
      }
      
    })
  })
})

btnsBack.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    mainPage.classList.remove('hidden')
    screen.forEach((item) => {
      item.classList.add('hidden')
    })
    window.scrollTo({
      top: document.body.scrollHeight - (document.querySelector('.screen-footer').scrollHeight / 1.5),
      behavior: "smooth"
    })
  })
})

const butterfly = document.querySelector('.js-butterfly')
const arm = document.querySelector('.js-arm')
const textParalax = document.querySelector('.js-plax')

// load
const jsLoad = document.querySelector('.js-load')
const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    el.style.display = 'none';
  }, timeout);
};
window.onload = function() {
  fadeOut(jsLoad, 2000);
  
}

// scroll
;(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function(){
  let offsetBottom = document.querySelector('.screen-bottom').offsetTop - 150
  let offsetMiddle = document.querySelector('.screen-middle').offsetTop - 300
  let offsetFooter = document.querySelector('.screen-footer').offsetTop - 650
  let screenBootm = document.querySelector('.screen-bottom')

  if(window.scrollY >= 1) {
    butterfly.style.transform = `translate(${window.scrollY}px, -${window.scrollY - 5}px)rotate(-${window.scrollY - 2}deg)`
  } if(window.scrollY >= 80 && window.scrollY < 200) {
    butterfly.style.transform = `translate(${window.scrollY}px, -${window.scrollY}px)rotate(-${window.scrollY / 2}deg)`
  } if(window.scrollY >= 200 && window.scrollY < 400) {
    butterfly.style.transform = `translate(${window.scrollY}px, -200px)rotate(-20deg)`
  } if(window.scrollY <= 0) {
    butterfly.style.transform = `translate(0, 0)rotate(0)`
  }
  

  if(window.scrollY > offsetBottom) {
    screenBootm.classList.add('animation-started')
  }
  

  if(window.scrollY > offsetMiddle){
    if(((window.scrollY - offsetMiddle) / 2) <= textParalax.offsetHeight){
      textParalax.style.transform = `translateY(${(window.scrollY - offsetMiddle) / 2}px)`
    }
  }

  if(window.scrollY > offsetFooter){
    arm.style.transform = `translateX(-${window.scrollY - offsetFooter}px)`
  }
  
})

document.addEventListener('click', modalWindow);

function modalWindow(evt) {
  evt.preventDefault()
  const modalBtnOpen = evt.target.closest('.js-modal');
  if (modalBtnOpen) {
    const modalSelector = modalBtnOpen.dataset.modal;
    showModal(document.querySelector(modalSelector));
  }

  const modalBtnClose = evt.target.closest('.js-modal-close');
  if (modalBtnClose) {
    evt.preventDefault();
    hideModal(modalBtnClose.closest('.modal'));
  }
}

function showModal(modalElem) {
  modalElem.classList.add('show');
}

function hideModal(modalElem) {
  modalElem.classList.remove('show');
}

