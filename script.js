document.addEventListener('DOMContentLoaded', function() {

    const navToggle = document.querySelector('.nav-toggle');
    const body = document.body;

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            body.classList.toggle('nav-open');
        });
    }

    const navLinksForMobileClose = document.querySelectorAll('#main-nav .nav-links a');
    navLinksForMobileClose.forEach(link => {
        link.addEventListener('click', (e) => {
    
            if (body.classList.contains('nav-open')) {
            
                body.classList.remove('nav-open');
            }
        });
    });

    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        scrollToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const navLinks = document.querySelectorAll('#main-nav .nav-links a');
    const currentPath = window.location.pathname.split('/').pop(); 

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();

        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active-link');
        }
    });

    function handleFormSubmission(formId, successMessage) {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault(); 

                let isValid = true;
                const requiredFields = form.querySelectorAll('[required]');
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.style.borderColor = 'red';
                    } else {
                        field.style.borderColor = 'var(--border-color)';
                    }
                });

                if (isValid) {
                    alert(successMessage);
                    form.reset();
                    requiredFields.forEach(field => field.style.borderColor = 'var(--border-color)');
                } else {
                    alert('Sila isi semua ruangan yang diperlukan.'); 
                }
            });
        }
    }

    handleFormSubmission('contactForm', 'Terima kasih! Mesej anda telah dihantar.');
    handleFormSubmission('feedbackForm', 'Terima kasih atas maklum balas anda!');

});