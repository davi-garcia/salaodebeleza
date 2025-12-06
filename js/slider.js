document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider');
    const sliderNav = document.querySelector('.slider-nav');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    // Dados dos slides
    const slidesData = [
        {
            image: 'imagens/slides/1.webp',
            title: '',
            text: 'CORTE FEMININO LONGO'
        },
        {
            image: 'imagens/slides/8.webp',
            title: '',
            text: 'CORTE FEMININO LOIRO ONDULADO'
        },
        {
            image: 'imagens/slides/3.webp',
            title: '',
            text: 'ESCOVA CABELO FEMININO ONDULADO'
        },
        {
            image: 'imagens/slides/4.webp',
            title: '',
            text: 'CORTE COM TINTA'
        },
        {
            image: 'imagens/slides/7.webp',
            title: '',
            text: 'CORTE CURTO FEMININO'
        }
    ];

    // Criar slides dinamicamente
    slidesData.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
        slideElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.image}')`;
        
        slideElement.innerHTML = `
            <div class="slide-content">
                <h2>${slide.title}</h2>
                <p>${slide.text}</p>
            </div>
        `;
        
        sliderContainer.insertBefore(slideElement, sliderNav);
    });

    // Controle do slider
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let slideInterval;

    // Função para mostrar slide
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        currentSlide = index;
    }

    // Slide anterior
    function prevSlide() {
        let newIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newIndex);
        resetInterval();
    }
    
    // Próximo slide
    function nextSlide() {
        let newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex);
        resetInterval();
    }

    // Reiniciar intervalo do auto-slide
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Event listeners
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    // Iniciar auto-slide
    function startSlider() {
        if (slides.length > 0) {
            slideInterval = setInterval(nextSlide, 5000);
        }
    }

    // Pausar ao interagir
    sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
    sliderContainer.addEventListener('mouseleave', startSlider);

    // Inicializar
    startSlider();
});