document.getElementById("gastosForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita que el formulario se envíe de manera tradicional 

    // Obtiene los valores ingresados en el formulario
    const year = document.getElementById("year").value;  
    const month = document.getElementById("month").value;  
    const gastos = parseFloat(document.getElementById("gastos").value);  

    // Verifica que los valores sean válidos antes de continuar
    if (year && month && !isNaN(gastos)) {  
        saveData(year, month, gastos);  // Guarda los datos del gasto
        updateChart();  // Actualiza el gráfico con los nuevos datos
        updateAverage();  // Calcula y muestra el promedio de gastos
    }    
});
