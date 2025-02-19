// chartManager.js
let gastosChart;  // Variable global para almacenar la instancia del gráfico

// Función para crear o actualizar el gráfico
function createChart(data) {
    const ctx = document.getElementById("gastosChart").getContext("2d");  // Obtener el contexto 2D del lienzo donde se dibujará el gráfico

    // Destruir el gráfico existente antes de crear uno nuevo
    if (gastosChart) {
        gastosChart.destroy();  // Elimina el gráfico anterior si existe
    }

    // Crear un nuevo gráfico utilizando los datos proporcionados
    gastosChart = new Chart(ctx, {
        type: "bar",  // Tipo de gráfico: de barras
        data: {
            labels: data.map(item => item.month),  // Meses en el eje X (horizontal)
            datasets: [{
                label: "Gastos Mensuales",  // Etiqueta del gráfico
                data: data.map(item => item.gastos),  // Datos de los gastos en el eje Y (vertical)
                backgroundColor: "rgba(75, 192, 192, 0.2)",  // Color de fondo de las barras
                borderColor: "rgba(75, 192, 192, 1)",  // Color del borde de las barras
                borderWidth: 1  // Ancho del borde
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true  // El eje X comenzará desde 0
                },
                y: {
                    beginAtZero: true  // El eje Y comenzará desde 0
                }
            }
        }
    });
}

// Función para actualizar el gráfico con los datos más recientes
function updateChart() {
    const data = getData();  // Obtener los datos desde localStorage
    createChart(data);  // Crear o actualizar el gráfico con los datos obtenidos
}
