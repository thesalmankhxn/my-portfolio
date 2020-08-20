window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

let home = document.querySelectorAll('.home-menu');

let about = document.querySelectorAll('.home-menu');

let skills = document.querySelectorAll('.home-menu');

let portfolio = document.querySelectorAll('.home-menu');

let contact = document.querySelectorAll('.home-menu');

