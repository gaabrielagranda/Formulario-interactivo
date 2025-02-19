// Guardar datos en localStorage
function saveData(year, month, gastos) {
    const gastosData = JSON.parse(localStorage.getItem("gastosData")) || []; // Obtener los datos existentes o inicializar un arreglo vacío
    gastosData.push({ year, month, gastos: parseFloat(gastos) }); // Convertir gastos a número y agregar el nuevo registro
    localStorage.setItem("gastosData", JSON.stringify(gastosData)); // Guardar el arreglo actualizado en localStorage
}

// Obtener datos desde localStorage
function getData() {
    return JSON.parse(localStorage.getItem("gastosData")) || []; // Recuperar los datos almacenados o devolver un arreglo vacío si no hay datos
}

// Borrar todos los datos en localStorage
function clearData() {
    localStorage.removeItem("gastosData"); 
}

// Calcular el promedio de gastos
function calculateAverage() {
    const data = getData(); // Obtener los datos almacenados
    if (data.length === 0) {
        return 0; // Si no hay datos, el promedio es 0
    }

    const totalGastos = data.reduce((sum, item) => sum + item.gastos, 0); // Sumar todos los gastos almacenados
    return (totalGastos / data.length).toFixed(2); 
}
