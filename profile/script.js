console.log('personal profolio');

document.querySelector('.cross').style.display='none';
document.querySelector('.ham').addEventListener('click' , () =>{
            document.querySelector('.navbar').classList.toggle('sidego')

            document.querySelector('.ham').style.display='none';
            setTimeout(() => {
                document.querySelector('.cross').style.display='block';
            }, 400); 
                
})
document.querySelector('.cross').addEventListener('click' , () =>{
    document.querySelector('.navbar').classList.toggle('sidego')
    document.querySelector('.cross').style.display='none';
    document.querySelector('.ham').style.display='block'
})


// manual slideshow

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("box");
    var dots = document.getElementsByClassName("dots");
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
  
// Automatic slideshow
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides =document.getElementsByClassName('box');
//     var dots = document.getElementsByClassName('dots');
//     for(i = 0; i< slides.length;i++){
//         slides[i].style.length = 'none';
//     }
//     slideIndex++;
//     if(slideIndex > slides.length){slideIndex = 1}
//     for(i = 0;i< dots.length;i++){
//         dots[i].className = dots[i].className.replace('active' , "");

//     }
//     slides[slideIndex-1].style.display = 'block';
//     dots[slideIndex-1].className +=' active';
//     setTimeout(showSlides , 1000);
// }

