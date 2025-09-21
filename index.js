onload = () => {
    // Elementos del DOM
    const startButton = document.getElementById('startButton');
    const initialPage = document.getElementById('initialPage');
    const flowersContent = document.getElementById('flowersContent');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    // Configurar tiempo de inicio de la canción (en segundos)
    const startTime = 12; // Inicia en el segundo 12
    
    // Función para mostrar las flores
    function showFlowers() {
        // Configurar el tiempo de inicio y reproducir la música
        backgroundMusic.currentTime = startTime;
        backgroundMusic.play().catch(error => {
            console.log('Error al reproducir música:', error);
            // En caso de error, continuar con la animación
        });
        
        // Ocultar página inicial con animación
        initialPage.classList.add('hide');
        
        // Después de la animación de salida, mostrar las flores
        setTimeout(() => {
            initialPage.style.display = 'none';
            flowersContent.classList.add('show');
            
            // Activar las animaciones de las flores
            document.body.classList.remove("container");
        }, 800); // Tiempo de la animación fadeOutPage
    }
    
    // Agregar evento al botón
    startButton.addEventListener('click', showFlowers);
    
    // También permitir activar con Enter o Espacio
    startButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showFlowers();
        }
    });
};
