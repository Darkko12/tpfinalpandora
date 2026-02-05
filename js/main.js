// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetPosition - navbarHeight;
            
            window.scrollTo({
                top: target.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
            
            // Cerrar el navbar en mobile después de hacer click
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Cambiar el navbar al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(13, 10, 21, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(138, 98, 180, 0.3)';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(13, 10, 21, 0.95), rgba(13, 10, 21, 0.85))';
        navbar.style.boxShadow = '0 2px 20px rgba(138, 98, 180, 0.1)';
    }
});

// Highlight del nav item activo
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animación fade-in para elementos cuando entran en viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.team-card, .accordion-item, .card');
    elementsToAnimate.forEach(el => observer.observe(el));
});
