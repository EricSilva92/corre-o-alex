document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideElements = slides.children;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    // Função para atualizar o deslocamento do slide
    function updateSlide() {
        const slideWidth = slides.offsetWidth; // Usar o offsetWidth da área visível
        console.log('Largura do slide:', slideWidth); // Debug

        // Impede o erro de deslocamento além dos slides
        if (currentIndex < 0) {
            currentIndex = slideElements.length - 1;
        } else if (currentIndex >= slideElements.length) {
            currentIndex = 0;
        }

        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Evento para avançar para o próximo slide
    nextButton.addEventListener('click', () => {
        currentIndex++;
        updateSlide();
    });

    // Evento para voltar ao slide anterior
    prevButton.addEventListener('click', () => {
        currentIndex--;
        updateSlide();
    });

    // Atualiza o slide na mudança de tamanho da janela
    window.addEventListener('resize', updateSlide);

    // Configuração inicial
    updateSlide();
});
