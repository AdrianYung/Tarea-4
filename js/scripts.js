document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const startButton = document.getElementById('start-button');
    const proyectosLinks = document.querySelectorAll('.proyectos a');
    const detallesProyectos = document.querySelectorAll('.detalle-proyecto');
    
    startButton.addEventListener('click', () => {
        loader.style.display = 'none';
    });

    proyectosLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');
            detallesProyectos.forEach(detalle => {
                if (detalle.id === targetId) {
                    detalle.style.display = 'block';
                } else {
                    detalle.style.display = 'none';
                }
            });
        });
    });
});
