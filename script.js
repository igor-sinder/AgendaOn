document.addEventListener('DOMContentLoaded', () => {
    // Adiciona rolagem suave ao clicar em links internos (como o botão "Ver Programação")
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});