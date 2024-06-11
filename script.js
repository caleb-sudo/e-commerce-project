var slides = document.getElementsByClassName("pic");
let dots = document.getElementsByClassName("dot");
var showed = document.getElementsByClassName("active").a;

//search function
function search() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("Search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("searchMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

//addes the product to the cart
function atc() {
  alert("succesfully added to your cart")
}

//changes the picture shown on the product page
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//inlarges the pictures
function inlarge() {
  
}