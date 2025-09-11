import { reiniciarJuego } from './juego.js';
import { modoJuego } from './seccionPrincipal.js';

export function mostrarReiniciar() {
  document.getElementById('reiniciar').style.display = 'flex';
}

export function ocultarReiniciar() {
  document.getElementById('reiniciar').style.display = 'none';
}

export function confirmarReinicio() {
  reiniciarJuego();
  if (modoJuego === 'VS CPU') {
    import('./VSCPU.js').then(({ reiniciarCPU, configurarEventosCPU }) => {
      reiniciarCPU();
      configurarEventosCPU();
    });
  } else {
    import('./VSJugador.js').then(({ configurarEventosJugador }) => {
      configurarEventosJugador();
    });
  }
  
  ocultarReiniciar();
}

export function inicializarReiniciar() {
  const botonReiniciar = document.querySelector('header button');
  const botonSi = document.getElementById('reiniciar-continuar');
  const botonNo = document.getElementById('reiniciar-no');
  
  botonReiniciar.addEventListener('click', mostrarReiniciar);
  botonSi.addEventListener('click', confirmarReinicio);
  botonNo.addEventListener('click', ocultarReiniciar);
}