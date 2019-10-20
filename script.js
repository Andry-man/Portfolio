function down() {
  var a = document.getElementById('dropdown');
  if (a.style.display == 'none')
    a.style.display = 'block'
  else
    if (a.style.display == 'block')
      a.style.display = 'none';
}

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