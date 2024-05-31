const hamburger = document.getElementById('hamburger');
        const navbarLinks = document.getElementById('navbar-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navbarLinks.classList.toggle('active');
        });


    // Importar jQuery y Slick Carousel
import $ from 'jquery';
import 'slick-carousel';

// Código para inicializar Slick Carousel
$(document).ready(function(){
  $('.your-class').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });