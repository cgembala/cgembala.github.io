let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function slide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function current(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
$(document).ready(function() {
function submitForm() 
            {
                $('form[name="myform"]').submit();
                $('input[type="text"], textarea').val('');
            }
          });
$(document).ready(function() 
{
$( function ()
{
  $("#datepicker").datepicker();
});
});
