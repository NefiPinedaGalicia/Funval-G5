import { modoJuego, fichaSeleccionada } from './seccionPrincipal.js';
import { turnoActual, reiniciarCompleto } from './juego.js';

const svgX = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-400"><line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" stroke-width="12" stroke-linecap="round" /><line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" stroke-width="12" stroke-linecap="round" /></svg>';
const svgO = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-400"><circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="12" fill="none" /></svg>';
const svgEmpate = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#a9bec9]"><line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" stroke-width="12" stroke-linecap="round" /></svg>';

export function mostrarFinJuego(esEmpate = false) {
  const seccionFinal = document.getElementById('contenedor-final');
  const resultado = document.getElementById('resultado');
  const svgGanador = document.getElementById('svg-ganador');
  const textoVictoria = document.querySelector('#contenedor-final h2');
  
  seccionFinal.style.display = 'flex';
  
  if (esEmpate) {
    resultado.textContent = 'Empate';
    resultado.className = 'text-[#a9bec9] font-bold text-xl sm:text-2xl md:text-3xl';
    svgGanador.innerHTML = svgEmpate;
    const textoVictoriaElement = document.getElementById('texto-victoria');
    textoVictoriaElement.textContent = 'Empate';
    textoVictoriaElement.className = 'text-[#a9bec9] font-bold text-2xl sm:text-3xl md:text-4xl';
  } else {
    if (modoJuego === 'VS CPU') {
      if (turnoActual === fichaSeleccionada) {
        resultado.textContent = 'Ganaste';
        resultado.className = 'text-white font-bold text-xl sm:text-2xl md:text-3xl';
      } else {
        resultado.textContent = 'Perdiste';
        resultado.className = 'text-white font-bold text-xl sm:text-2xl md:text-3xl';
      }
    } else {
      resultado.textContent = turnoActual === 'X' ? 'Jugador 1 Ganó' : 'Jugador 2 Ganó';
      resultado.className = 'text-white font-bold text-xl sm:text-2xl md:text-3xl';
    }
    
    const simboloGanador = turnoActual === 'X' ? svgX : svgO;
    svgGanador.innerHTML = simboloGanador;
    const textoVictoriaElement = document.getElementById('texto-victoria');
    textoVictoriaElement.textContent = 'Se llevó la victoria';
    textoVictoriaElement.className = turnoActual === 'X' ? 'text-cyan-400 font-bold text-2xl sm:text-3xl md:text-4xl' : 'text-yellow-400 font-bold text-2xl sm:text-3xl md:text-4xl';
  }
}

export function salirJuego() {
  document.getElementById('contenedor-final').style.display = 'none';
  document.getElementById('contenedor-juego').style.display = 'none';
  document.getElementById('container-principal').style.display = 'flex';
  
  reiniciarCompleto();
  
  if (modoJuego === 'VS CPU') {
    import('./VSCPU.js').then(({ limpiarTimeoutCPU }) => {
      limpiarTimeoutCPU();
    });
  }
}

export function continuarJuego() {
  document.getElementById('contenedor-final').style.display = 'none';
  
  import('./juego.js').then(({ reiniciarJuego }) => {
    reiniciarJuego();
    
    if (modoJuego === 'VS CPU') {
      import('./VSCPU.js').then(({ reiniciarCPU }) => {
        reiniciarCPU();
      });
    }
  });
}

export function inicializarFinJuego() {
  document.getElementById('Salir').addEventListener('click', salirJuego);
  document.getElementById('Continuar').addEventListener('click', continuarJuego);
}