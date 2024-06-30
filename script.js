

function nextStep(step) {
  const currentStep = document.querySelectorAll('.form-step')[step - 1];
  const nextStep = document.querySelectorAll('.form-step')[step];
  
  let isValid = true;
  
  // Validaciones
  if (currentStep.querySelector('textarea[name="consulta"]')) {
      const consulta = currentStep.querySelector('textarea[name="consulta"]');
      if (!consulta.value.trim()) {
          consulta.nextElementSibling.textContent = "El campo de consulta no debe estar vacío.";
          consulta.nextElementSibling.style.display = 'block';
          isValid = false;
      } else {
          consulta.nextElementSibling.style.display = 'none';
      }
  }

  if (currentStep.querySelector('input[name="telefono"]')) {
      const telefono = currentStep.querySelector('input[name="telefono"]');
      const telefonoRegex = /^[0-9]+$/;
      if (!telefonoRegex.test(telefono.value)) {
          telefono.nextElementSibling.textContent = "El campo de teléfono solo debe contener números.";
          telefono.nextElementSibling.style.display = 'block';
          isValid = false;
      } else {
          telefono.nextElementSibling.style.display = 'none';
      }
  }

  if (currentStep.querySelector('input[name="email"]')) {
      const email = currentStep.querySelector('input[name="email"]');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
          email.nextElementSibling.textContent = "Por favor, ingresa un correo electrónico válido.";
          email.nextElementSibling.style.display = 'block';
          isValid = false;
      } else {
          email.nextElementSibling.style.display = 'none';
      }
  }

  if (isValid) {
      currentStep.classList.remove('active');
      nextStep.classList.add('active');
  }
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const form = event.target;
  const consulta = form.querySelector('textarea[name="consulta"]');
  const telefono = form.querySelector('input[name="telefono"]');
  const email = form.querySelector('input[name="email"]');

  // Limpiar mensajes de error
  form.querySelectorAll('.error-message').forEach(span => {
      span.style.display = 'none';
  });

  let isValid = true;

  // Validaciones
  if (!consulta.value.trim()) {
      consulta.nextElementSibling.textContent = "El campo de consulta no debe estar vacío.";
      consulta.nextElementSibling.style.display = 'block';
      isValid = false;
  }

  const telefonoRegex = /^[0-9]+$/;
  if (!telefonoRegex.test(telefono.value)) {
      telefono.nextElementSibling.textContent = "El campo de teléfono solo debe contener números.";
      telefono.nextElementSibling.style.display = 'block';
      isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
      email.nextElementSibling.textContent = "Por favor, ingresa un correo electrónico válido.";
      email.nextElementSibling.style.display = 'block';
      isValid = false;
  }

  if (!isValid) {
      return;
  }

  const formData = new FormData(form);

  fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          document.getElementById('popup').classList.add('active');
          setTimeout(() => {
              document.getElementById('popup').classList.remove('active');
              document.querySelectorAll('.form-step').forEach((step) => {
                  step.classList.remove('active');
              });
              document.querySelectorAll('.form-step')[0].classList.add('active');
              form.reset();
          }, 8000);
      } else {
          response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                  alert(data["errors"].map(error => error["message"]).join(", "));
              }
          });
      }
  }).catch(error => {
      alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Definir variables después de que el DOM esté completamente cargado
  const hamburger = document.getElementById('hamburger');
  const navbarLinks = document.getElementById('navbar-links');
  const overlay = document.getElementById('overlay');
  const body = document.body;
  const navbar = document.querySelector('.navbar');

  // Función para cerrar el menú
  function closeMenu() {
      navbarLinks.classList.remove('active');
      hamburger.classList.remove('active');
      overlay.style.display = 'none';
      body.classList.remove('no-scroll');
  }

  // Event listener para el botón de hamburguesa
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navbarLinks.classList.toggle('active');
      overlay.style.display = navbarLinks.classList.contains('active') ? 'block' : 'none';
      body.classList.toggle('no-scroll', navbarLinks.classList.contains('active'));
  });

  // Event listener para el overlay
  overlay.addEventListener('click', closeMenu);

  // Event listeners para los enlaces del menú
  document.querySelectorAll('.navbar-links a').forEach(anchor => {
      anchor.addEventListener('click', closeMenu);
  });

  // Manejo del scroll para cambiar la apariencia de la navbar
  window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
          navbar.classList.add('navbar-scrolled');
      } else {
          navbar.classList.remove('navbar-scrolled');
      }
  });

  // Configuración inicial del carrusel
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

  // JavaScript para manejar la inserción dinámica de <br> si es necesario
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

  // Revisión inicial
  adjustBreaks();

  // Añadir event listener para revisar en el cambio de tamaño
  window.addEventListener('resize', adjustBreaks);
});
