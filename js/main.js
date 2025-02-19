document.addEventListener("DOMContentLoaded", function() {
    updateChart();  // Inicializa el gráfico cuando la página se carga
    updateAverage(); // Actualiza el promedio de gastos

    // Agrega un 'listener' para el evento de clic en el botón de reinicio
    document.getElementById("resetButton").addEventListener("click", function() {
        clearData();  // Borra los datos de 'gastos' de localStorage
        updateChart();  // Actualiza el gráfico (que estará vacío después de reiniciar)
        updateAverage(); // Reinicia el promedio de gastos a 0
    });
});

// Función para actualizar el promedio de gastos en la interfaz
function updateAverage() {
    // Actualiza el contenido del elemento con el id "averagegastos" con el valor calculado del promedio
    document.getElementById("averagegastos").textContent = calculateAverage();
}
