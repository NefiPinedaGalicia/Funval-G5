import { fichaSeleccionada } from './seccionPrincipal.js';
import { tablero, turnoActual, juegoActivo, hacerJugada } from './juego.js';

let fichaCPU;
let fichaJugador;
let timeoutCPU;

export function configurarVSCPU() {
  import('./juego.js').then(({ resetearContadores }) => {
    resetearContadores();
  });
  
  if (fichaSeleccionada === 'X') {
    fichaJugador = 'X';
    fichaCPU = 'O';
    document.getElementById('jugadorX').textContent = 'Jugador 1';
    document.getElementById('jugadorO').textContent = 'CPU';
  } else {
    fichaJugador = 'O';
    fichaCPU = 'X';
    document.getElementById('jugadorX').textContent = 'CPU';
    document.getElementById('jugadorO').textContent = 'Jugador 1';
    

    timeoutCPU = setTimeout(jugadaCPU, 2000);
  }
  
  configurarEventosCPU();
}

export function configurarEventosCPU() {
  import('./juego.js').then(({ reiniciarJuego }) => {
    reiniciarJuego();
    for (let i = 0; i < 9; i++) {
      const celda = document.getElementById(`celda-${i}`);
      const nuevaCelda = celda.cloneNode(true);
      celda.parentNode.replaceChild(nuevaCelda, celda);
      nuevaCelda.addEventListener('click', manejarClickJugador);
    }
  });
}

export function limpiarTimeoutCPU() {
  if (timeoutCPU) {
    clearTimeout(timeoutCPU);
    timeoutCPU = null;
  }
}

function manejarClickJugador(event) {
  const indice = parseInt(event.target.closest('button').id.split('-')[1]);
  
  if (turnoActual === fichaJugador && hacerJugada(indice)) {
    if (juegoActivo && turnoActual === fichaCPU) {
      timeoutCPU = setTimeout(jugadaCPU, 2000);
    }
  }
}

function jugadaCPU() {
  if (!juegoActivo || turnoActual !== fichaCPU) return;
  
  const celdasVacias = [];
  for (let i = 0; i < 9; i++) {
    if (tablero[i] === '') celdasVacias.push(i);
  }
  
  if (celdasVacias.length > 0) {
    const indiceAleatorio = celdasVacias[Math.floor(Math.random() * celdasVacias.length)];
    hacerJugada(indiceAleatorio);
  }
}

export function reiniciarCPU() {
  limpiarTimeoutCPU();
  if (fichaCPU === 'X') {
    timeoutCPU = setTimeout(jugadaCPU, 2000);
  }
}