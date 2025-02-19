# Gestor de Gastos Mensuales

## Descripción
Este proyecto es una aplicación web que permite a los usuarios registrar, visualizar y gestionar sus gastos mensuales de manera interactiva. La aplicación cuenta con un formulario para ingresar datos, un gráfico para visualizar los gastos y almacenamiento en localStorage para mantener la información persistente.

## Características
- **Ingreso de datos:** Los usuarios pueden ingresar los gastos mensuales a través de un formulario.
- **Visualización de datos:** Los datos ingresados se representan en un gráfico de barras interactivo usando Chart.js.
- **Persistencia de datos:** Los gastos se almacenan en localStorage, asegurando que no se pierdan al recargar la página.
- **Reinicio de datos:** Se incluye un botón para borrar todos los datos y reiniciar el gráfico.
- **Cálculo del promedio de gastos:** Se muestra el promedio de gastos registrado.

## Estructura del Proyecto
```
/gastos-mensuales
│── index.html  # Estructura de la página
│── /css
│   └── styles.css  # Estilos de la aplicación
│── /js
│   ├── main.js  # Lógica principal
│   ├── formHandler.js  # Manejo del formulario
│   ├── chartManager.js  # Configuración del gráfico
│   ├── storage.js  # Manejo de localStorage
└── README.md  # Documentación del proyecto
```

## Instalación y Ejecución
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu_usuario/gastos-mensuales.git
   ```
2. **Abrir el archivo `index.html` en un navegador:**
   - Puedes hacerlo directamente o utilizar un servidor local como Live Server en VS Code.

## Uso
1. Selecciona un año y un mes.
2. Ingresa el monto del gasto y envía el formulario.
3. Observa los datos reflejados en el gráfico.
4. Puedes resetear los datos con el botón correspondiente.

## Tecnologías Usadas
- **HTML, CSS, JavaScript**
- **Chart.js** para la visualización de datos
- **localStorage** para el almacenamiento persistente

##Screenshots
![{0C90F855-C76F-4931-8756-0D11BA56338B}](https://github.com/user-attachments/assets/45ed6c36-1691-45ae-b9f9-f4c370d57ede)
![{CEACE7F6-BE38-4BEB-9C16-8C3231327B5A}](https://github.com/user-attachments/assets/5701f500-4fa2-460f-b78d-9c325c2348ca)

## Contribución
Si deseas mejorar este proyecto:
1. Haz un fork del repositorio.
2. Crea una rama con tus cambios (`git checkout -b mejora-feature`).
3. Realiza un commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin mejora-feature`).
5. Abre un pull request.
