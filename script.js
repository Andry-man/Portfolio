
var btnOne = document.getElementById('butt');
var btn = document.getElementById('element');
var a = document.getElementById('list-info');
btnOne.onclick = function(){
  if (btn.style.transform == 'rotate(90deg)')
  btn.style.transform = 'rotate(0deg)'
  else
    if (btn.style.transform =='rotate(0deg)')
    btn.style.transform = 'rotate(90deg)';
    if (a.style.opacity == '0')
    a.style.opacity = '1'
  else
    if (a.style.opacity == '1')
      a.style.opacity = '0';
}
// function myEducation() {
//   var a = document.getElementById('list-info');
//   if (a.style.opacity == '0')
//     a.style.opacity = '1'
//   else
//     if (a.style.opacity == '1')
//       a.style.opacity = '0';
// }

window.onload = function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true
  })
};
function list() {
  var a = document.getElementById('inf_one');
  if (a.style.display == 'none')
    a.style.display = 'block'
  else
    if (a.style.display == 'block')
      a.style.display = 'none';
};

function listTwo() {
  var a = document.getElementById('inform_two');
  if (a.style.display == 'none')
    a.style.display = 'block'
  else
    if (a.style.display == 'block')
      a.style.display = 'none';
}

var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,

  pagination: {
      el: '.swiper-pagination',
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  scrollbar: {
      el: '.swiper-scrollbar',
  },
})