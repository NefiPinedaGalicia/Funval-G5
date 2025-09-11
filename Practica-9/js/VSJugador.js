import { fichaSeleccionada } from './seccionPrincipal.js';
import { hacerJugada } from './juego.js';

export function configurarVSJugador() {
  import('./juego.js').then(({ resetearContadores }) => {
    resetearContadores();
  });
  
  if (fichaSeleccionada === 'X') {
    document.getElementById('jugadorX').textContent = 'Jugador 1';
    document.getElementById('jugadorO').textContent = 'Jugador 2';
  } else {
    document.getElementById('jugadorX').textContent = 'Jugador 2';
    document.getElementById('jugadorO').textContent = 'Jugador 1';
  }
  
  configurarEventosJugador();
}

export function configurarEventosJugador() {
  import('./juego.js').then(({ reiniciarJuego }) => {
    reiniciarJuego();
    for (let i = 0; i < 9; i++) {
      const celda = document.getElementById(`celda-${i}`);
      const nuevaCelda = celda.cloneNode(true);
      celda.parentNode.replaceChild(nuevaCelda, celda);
      nuevaCelda.addEventListener('click', (event) => {
        const indice = parseInt(event.target.closest('button').id.split('-')[1]);
        hacerJugada(indice);
      });
    }
  });
}