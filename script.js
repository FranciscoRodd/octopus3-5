const hamburger = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbar-links');
const overlay = document.getElementById('overlay');
const body = document.body;
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbarLinks.classList.toggle('active');
    overlay.style.display = navbarLinks.classList.contains('active') ? 'block' : 'none';
    body.classList.toggle('no-scroll', navbarLinks.classList.contains('active'));
});

overlay.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
    hamburger.classList.remove('active');
    overlay.style.display = 'none';
    body.classList.remove('no-scroll');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});



$(document).ready(function () {
  $('.center').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    arrows: false,
    centerPadding: '60px',
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3
        }
      }
    ]
  });
});
AOS.init();


// JavaScript to handle dynamic insertion of <br> if needed
function adjustBreaks() {
  const desktopBreaks = document.querySelectorAll('.desktop-break');
  const mobileBreaks = document.querySelectorAll('.mobile-break');

  if (window.innerWidth <= 768) {
      desktopBreaks.forEach(bp => bp.style.display = 'none');
      mobileBreaks.forEach(bp => bp.style.display = 'inline');
  } else {
      desktopBreaks.forEach(bp => bp.style.display = 'inline');
      mobileBreaks.forEach(bp => bp.style.display = 'none');
  }
}

// Initial check
adjustBreaks();

// Add event listener to check on resize
window.addEventListener('resize', adjustBreaks);