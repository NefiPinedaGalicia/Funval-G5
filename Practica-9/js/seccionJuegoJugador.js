// seccionJuegoJugador.js
import { mostrarPantallaFinal } from "./seccionFinJuego.js";

// Variables de estado del juego
let tablero = Array(9).fill(null);
let turnoActual = "X";
let juegoTerminado = false;
let ganador = null;
let fichaJugador = "X";

// Elementos del DOM
let contenedorJuego;
let headerTurno;
let celdas;

// Función para inicializar el juego
export function inicializarJuegoJugador(ficha) {
  fichaJugador = ficha;

  // Obtener elementos del DOM
  contenedorJuego = document.getElementById("contenedor-juego");
  headerTurno = document.querySelector(
    "#contenedor-juego header div:nth-child(2) span:first-child"
  );
  celdas = document.querySelectorAll(
    "#contenedor-juego > div:nth-child(2) button"
  );

  // Configurar event listeners para las celdas
  celdas.forEach((celda, index) => {
    celda.addEventListener("click", () => manejarClickCelda(index));
  });

  // Configurar event listener para el botón de reinicio
  const botonReinicio = document.querySelector(
    "#contenedor-juego header div:last-child button"
  );
  botonReinicio.addEventListener("click", reiniciarJuego);

  // Inicializar estado del juego
  reiniciarJuego();
}

// Función para manejar el click en una celda
function manejarClickCelda(index) {
  if (juegoTerminado || tablero[index]) return;

  // Marcar la celda con el símbolo actual
  tablero[index] = turnoActual;
  actualizarCeldaUI(index);

  // Verificar si hay un ganador
  const resultado = verificarGanador();
  if (resultado) {
    juegoTerminado = true;
    ganador = resultado.ganador;

    // Resaltar la línea ganadora
    if (resultado.combinacion) {
      resaltarLineaGanadora(resultado.combinacion);
    }

    // Llamar a la función para mostrar la pantalla final después de un breve delay
    setTimeout(() => {
      mostrarPantallaFinal(ganador, fichaJugador);
    }, 500);

    return;
  }

  // Cambiar turno
  turnoActual = turnoActual === "X" ? "O" : "X";
  actualizarHeaderTurno();
}

// Función para resaltar la línea ganadora
function resaltarLineaGanadora(combinacion) {
  combinacion.forEach((index) => {
    const celda = celdas[index];
    // Cambiar el color de fondo según el ganador
    if (ganador === "X") {
      celda.classList.add("bg-cyan-400");
    } else {
      celda.classList.add("bg-yellow-400");
    }

    // Cambiar el color del SVG a oscuro
    const svg = celda.querySelector("svg");
    if (svg) {
      svg.classList.remove("text-cyan-400", "text-yellow-400");
      svg.classList.add("text-[#1e3741]");
    }
  });
}

// Función para actualizar la interfaz de una celda
function actualizarCeldaUI(index) {
  const celda = celdas[index];
  celda.innerHTML = ""; // Limpiar la celda

  if (tablero[index] === "X") {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.classList.add("w-full", "h-full", "text-cyan-400");

    const line1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    line1.setAttribute("x1", "20");
    line1.setAttribute("y1", "20");
    line1.setAttribute("x2", "80");
    line1.setAttribute("y2", "80");
    line1.setAttribute("stroke", "currentColor");
    line1.setAttribute("stroke-width", "12");
    line1.setAttribute("stroke-linecap", "round");

    const line2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    line2.setAttribute("x1", "80");
    line2.setAttribute("y1", "20");
    line2.setAttribute("x2", "20");
    line2.setAttribute("y2", "80");
    line2.setAttribute("stroke", "currentColor");
    line2.setAttribute("stroke-width", "12");
    line2.setAttribute("stroke-linecap", "round");

    svg.appendChild(line1);
    svg.appendChild(line2);
    celda.appendChild(svg);
  } else if (tablero[index] === "O") {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.classList.add("w-full", "h-full", "text-yellow-400");

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", "30");
    circle.setAttribute("stroke", "currentColor");
    circle.setAttribute("stroke-width", "12");
    circle.setAttribute("fill", "none");

    svg.appendChild(circle);
    celda.appendChild(svg);
  }
}

// Función para actualizar el header del turno
function actualizarHeaderTurno() {
  headerTurno.textContent = turnoActual;
}

// Función para verificar si hay un ganador
function verificarGanador() {
  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Filas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columnas
    [0, 4, 8],
    [2, 4, 6], // Diagonales
  ];

  for (const combinacion of combinacionesGanadoras) {
    const [a, b, c] = combinacion;
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      return { ganador: tablero[a], combinacion };
    }
  }

  // Verificar empate
  if (!tablero.includes(null)) {
    return { ganador: "empate", combinacion: null };
  }

  return null;
}

// Función para reiniciar el tablero (para siguiente ronda)
export function reiniciarTablero() {
  tablero = Array(9).fill(null);
  turnoActual = "X";
  juegoTerminado = false;
  ganador = null;

  // Limpiar las celdas
  celdas.forEach((celda) => {
    celda.innerHTML = "";
    celda.classList.remove("bg-cyan-400", "bg-yellow-400");
  });

  // Actualizar header del turno
  actualizarHeaderTurno();
}

// Función para reiniciar el juego (para el botón de reinicio)
function reiniciarJuego() {
  reiniciarTablero();
}
