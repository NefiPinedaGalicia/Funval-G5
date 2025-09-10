// seccionFinJuego.js

// Variables para almacenar el estado del juego
let contadorX = 0;
let contadorO = 0;
let contadorEmpates = 0;

// Función para mostrar la pantalla final
export function mostrarPantallaFinal(ganador, fichaJugador) {
  const seccionFinal = document.getElementById("contenedor-final");
  const resultadoElement = document.getElementById("resultado");
  const svgGanadorElement = document.getElementById("svg-ganador");
  const tituloElement = document.querySelector("#contenedor-final h2");

  // Configurar el mensaje según el resultado
  if (ganador === "empate") {
    resultadoElement.textContent = "Empate";
    tituloElement.textContent = "Nadie gana esta ronda";
    tituloElement.className =
      "text-[#a9bec9] font-bold text-4xl sm:text-5xl md:text-6xl";
    svgGanadorElement.innerHTML = "";

    // Actualizar contador de empates
    contadorEmpates++;
  } else {
    // Determinar si el jugador ganó o perdió
    const jugadorGano = ganador === fichaJugador;
    resultadoElement.textContent = jugadorGano ? "Ganaste" : "Perdiste";

    // Configurar colores según el ganador
    if (ganador === "X") {
      tituloElement.className =
        "text-cyan-400 font-bold text-4xl sm:text-5xl md:text-6xl";
      svgGanadorElement.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 inline-block mr-2">
                    <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" stroke-width="12" stroke-linecap="round" />
                    <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" stroke-width="12" stroke-linecap="round" />
                </svg>
            `;

      // Actualizar contador de X
      contadorX++;
    } else {
      tituloElement.className =
        "text-yellow-400 font-bold text-4xl sm:text-5xl md:text-6xl";
      svgGanadorElement.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 inline-block mr-2">
                    <circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="12" fill="none" />
                </svg>
            `;

      // Actualizar contador de O
      contadorO++;
    }

    tituloElement.innerHTML = `<span id="svg-ganador"></span> Se llevo la victoria`;
  }

  // Actualizar marcadores en la pantalla de juego
  actualizarMarcadores();

  // Mostrar la sección final
  seccionFinal.classList.remove("hidden");
}

// Función para actualizar los marcadores en la pantalla de juego
function actualizarMarcadores() {
  const marcadorX = document.querySelector(
    "#contenedor-juego > div:nth-child(3) > div:nth-child(1) span:last-child"
  );
  const marcadorO = document.querySelector(
    "#contenedor-juego > div:nth-child(3) > div:nth-child(3) span:last-child"
  );
  const marcadorEmpates = document.querySelector(
    "#contenedor-juego > div:nth-child(3) > div:nth-child(2) span:last-child"
  );

  if (marcadorX) marcadorX.textContent = contadorX;
  if (marcadorO) marcadorO.textContent = contadorO;
  if (marcadorEmpates) marcadorEmpates.textContent = contadorEmpates;
}

// Función para reiniciar contadores
export function reiniciarContadores() {
  contadorX = 0;
  contadorO = 0;
  contadorEmpates = 0;

  // Actualizar marcadores en la pantalla de juego
  actualizarMarcadores();
}
