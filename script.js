const hamburger = document.getElementById('hamburger');
        const navbarLinks = document.getElementById('navbar-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navbarLinks.classList.toggle('active');
        });