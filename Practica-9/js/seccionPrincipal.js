// seccionPrincipal.js

// Variables para almacenar las selecciones
let fichaSeleccionada = "X";
let modoJuegoSeleccionado = null;

// Función para inicializar la sección principal
export function inicializarSeccionPrincipal() {
  // Configurar la selección inicial (X seleccionada por defecto)
  seleccionarFicha("X");

  // Agregar event listeners a los botones de selección de ficha
  document.getElementById("cruz-principal").addEventListener("click", () => {
    seleccionarFicha("X");
  });

  document.getElementById("circulo-principal").addEventListener("click", () => {
    seleccionarFicha("O");
  });

  // Agregar event listeners a los botones de modo de juego
  document.getElementById("VS-CPU-principal").addEventListener("click", () => {
    seleccionarModoJuego("CPU");
  });

  document
    .getElementById("VS-jugador-principal")
    .addEventListener("click", () => {
      seleccionarModoJuego("Jugador");
    });
}

// Función para seleccionar ficha (X u O)
function seleccionarFicha(ficha) {
  fichaSeleccionada = ficha;

  const contenedorCruz = document.getElementById("contenedor-cruz");
  const contenedorCirculo = document.getElementById("contenedor-circulo");
  const svgCruz = document.querySelector("#cruz-principal svg");
  const svgCirculo = document.querySelector("#circulo-principal svg");

  if (ficha === "X") {
    // Seleccionar X
    contenedorCruz.classList.add("bg-[#a9bfc9]");
    contenedorCirculo.classList.remove("bg-[#a9bfc9]");
    contenedorCirculo.classList.add("bg-[#182b32]");
    svgCruz.classList.remove("text-[#a9bfc9]");
    svgCruz.classList.add("text-[#182b32]");
    svgCirculo.classList.remove("text-[#182b32]");
    svgCirculo.classList.add("text-[#a9bfc9]");
  } else {
    // Seleccionar O
    contenedorCirculo.classList.add("bg-[#a9bfc9]");
    contenedorCruz.classList.remove("bg-[#a9bfc9]");
    contenedorCruz.classList.add("bg-[#182b32]");
    svgCirculo.classList.remove("text-[#a9bfc9]");
    svgCirculo.classList.add("text-[#182b32]");
    svgCruz.classList.remove("text-[#182b32]");
    svgCruz.classList.add("text-[#a9bfc9]");
  }
}

// Función para seleccionar modo de juego
function seleccionarModoJuego(modo) {
  modoJuegoSeleccionado = modo;
  console.log(`Modo seleccionado: ${modo}, Ficha: ${fichaSeleccionada}`);
}

// Exportar las selecciones para uso en otros módulos
export function obtenerSelecciones() {
  return {
    ficha: fichaSeleccionada,
    modo: modoJuegoSeleccionado,
  };
}
