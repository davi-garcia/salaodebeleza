// Efeitos e funcionalidades extras
document.addEventListener('DOMContentLoaded', function() {
    // Animações ao scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .product-card, .gallery-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez ao carregar
    
    // Efeito neon em elementos com a classe
    const neonElements = document.querySelectorAll('.neon-text');
    neonElements.forEach(el => {
        setInterval(() => {
            el.classList.toggle('neon-text');
        }, 2000);
    });
    
    // Formulário de agendamento
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Agendamento enviado com sucesso! Entraremos em contato para confirmar.');
            this.reset();
        });
    }
});