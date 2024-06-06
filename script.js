const hamburger = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbar-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbarLinks.classList.toggle('active');
});


$(document).ready(function () {
  $('.center').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
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
          slidesToShow: 3
        }
      }
    ]
  });
});
AOS.init();
