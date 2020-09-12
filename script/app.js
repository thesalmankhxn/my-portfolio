window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// loading animation START

let spinner = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => spinner.parentElement.removeChild(spinner));

// loading animation END


// smooth scroll START

const scroll = new SmoothScroll('a[href*="#"]',{
  speed: 800
});

// smooth scroll END