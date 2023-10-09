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

let screenBootm = document.querySelector('.screen-bottom')
screenBootm.addEventListener("mouseover", () => {
  screenBootm.classList.add('animation-started')
})
Array.prototype.forEach.call(
  document.querySelectorAll('.js-scroll'),
  (el) => new SimpleBar(el)
);

const mainPage = document.querySelector('.main-page')
const btns = document.querySelectorAll('.js-btn')
const screen = document.querySelectorAll('.js-screen')
const btnsBack = document.querySelectorAll('.js-btn-back')

btns.forEach((btn, btnInd) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    mainPage.classList.add('hidden')
    screen.forEach((item, itemInd) => {
      item.classList.add('hidden')
      if(btnInd === itemInd) {
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


// var leftItem = document.getElementById('item0'),
//     rightItem = document.getElementById('item1');

// ;(function(){

//   var throttle = function(type, name, obj){
//     var obj = obj || window;
//     var running = false;
//     var func = function(){
//       if (running){ return; }
//       running = true;
//       requestAnimationFrame(function(){
//         obj.dispatchEvent(new CustomEvent(name));
//         running = false;
//       });
//     };
//     obj.addEventListener(type, func);
//   };
  
//   throttle("scroll", "optimizedScroll");
// })();

// window.addEventListener("optimizedScroll", function(){
  
//   leftItem.style.transform = "rotate(-" + window.pageYOffset + "deg)";
//   rightItem.style.transform = "rotate(" + window.pageYOffset + "deg)";
// })

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

window.addEventListener('scroll', function() {
  // if(window.scrollY < 100) {
  //   butterfly.style.transform = `translate(${window.scrollY}px, -${window.scrollY - 10}px)rotate(-${window.scrollY - 5}deg)`
  // } if(window.scrollY < 200 && window.scrollY > 100) {
  //   butterfly.style.transform = `translate(${window.scrollY}px, -${window.scrollY - 10}px)rotate(-${window.scrollY - 170}deg)`
  // } if(window.scrollY < 300 && window.scrollY > 200) {
  //   butterfly.style.transform = `translate(${window.scrollY}px, -${window.scrollY - 230}px)rotate(-${window.scrollY - 410}deg)`
  // }

  let offsetFooter = document.querySelector('.screen-footer').offsetTop - 600

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

