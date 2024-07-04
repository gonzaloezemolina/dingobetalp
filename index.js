

// Configuración inicial del tiempo en segundos
let timeRemaining = (33 * 60) + 12; // 33 minutos y 12 segundos

// Función para actualizar el temporizador
function updateTimer() {
    // Calcula los minutos y segundos restantes
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;

    // Asegura que los segundos tengan dos dígitos
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Actualiza el contenido del temporizador
    document.getElementById('counter').innerText = `${minutes}:${seconds}`;
    document.getElementById('counter2').innerText = `${minutes}:${seconds}`;

    // Reduce el tiempo restante en 1 segundo
    timeRemaining--;

    // Si el tiempo se ha agotado, detiene el temporizador
    if (timeRemaining < 0) {
        clearInterval(timerInterval);
        alert("El tiempo ha terminado!");
    }
}

// Actualiza el temporizador cada segundo
let timerInterval = setInterval(updateTimer, 1000);









window.addEventListener("scroll",  function () {
    const header = document.getElementById('header');
    const producto = document.getElementById("producto");
    const getLocation = producto.getBoundingClientRect();
    
    if (getLocation.top <= 70 && getLocation.bottom >= 70) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove('scrolled');
    }
})