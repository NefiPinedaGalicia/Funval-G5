export let tablero = ['', '', '', '', '', '', '', '', ''];
export let turnoActual = 'X';
export let juegoActivo = true;
let victoriasX = 0;
let victoriasO = 0;
let empates = 0;

export const getVictoriasX = () => victoriasX;
export const getVictoriasO = () => victoriasO;
export const getEmpates = () => empates;

const combinacionesGanadoras = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const svgX = '<div class="w-full h-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-cyan-400"><line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" stroke-width="12" stroke-linecap="round" /><line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" stroke-width="12" stroke-linecap="round" /></svg></div>';
const svgO = '<div class="w-full h-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-yellow-400"><circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="12" fill="none" /></svg></div>';

const svgXGanador = '<div class="w-full h-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#0f2129]"><line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" stroke-width="12" stroke-linecap="round" /><line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" stroke-width="12" stroke-linecap="round" /></svg></div>';
const svgOGanador = '<div class="w-full h-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#0f2129]"><circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="12" fill="none" /></svg></div>';

export function hacerJugada(indice) {
  if (tablero[indice] !== '' || !juegoActivo) return false;
  
  tablero[indice] = turnoActual;
  const celda = document.getElementById(`celda-${indice}`);
  celda.innerHTML = turnoActual === 'X' ? svgX : svgO;
  
  const lineaGanadora = verificarVictoria();
  if (lineaGanadora) {
    resaltarLineaGanadora(lineaGanadora);
    if (turnoActual === 'X') victoriasX++;
    else if (turnoActual === 'O') victoriasO++;
    actualizarContadores();
    juegoActivo = false;
    setTimeout(() => {
      import('./terminarJuego.js').then(({ mostrarFinJuego }) => {
        mostrarFinJuego(false);
      });
    }, 1500);
    return true;
  }
  
  if (verificarEmpate()) {
    empates++;
    actualizarContadores();
    juegoActivo = false;
    setTimeout(() => {
      import('./terminarJuego.js').then(({ mostrarFinJuego }) => {
        mostrarFinJuego(true);
      });
    }, 1500);
    return true;
  }
  
  turnoActual = turnoActual === 'X' ? 'O' : 'X';
  actualizarTurno();
  return true;
}

function verificarVictoria() {
  return combinacionesGanadoras.find(combinacion => {
    return combinacion.every(indice => tablero[indice] === turnoActual);
  });
}

function verificarEmpate() {
  return tablero.every(celda => celda !== '');
}

function resaltarLineaGanadora(lineaGanadora) {
  if (lineaGanadora) {
    lineaGanadora.forEach(indice => {
      const celda = document.getElementById(`celda-${indice}`);
      if (turnoActual === 'X') {
        celda.style.backgroundColor = '#22d3ee';
        celda.innerHTML = svgXGanador;
      } else {
        celda.style.backgroundColor = '#facc15';
        celda.innerHTML = svgOGanador;
      }
    });
  }
}

function actualizarContadores() {
  document.getElementById('puntajeX').textContent = victoriasX;
  document.getElementById('contadorEmpates').textContent = empates;
  document.getElementById('puntajeO').textContent = victoriasO;
}

function actualizarTurno() {
  const turnoDisplay = document.querySelector('.bg-\\[\\#1e3741\\] span:first-child');
  turnoDisplay.textContent = turnoActual;
}

export function reiniciarJuego() {
  tablero = ['', '', '', '', '', '', '', '', ''];
  turnoActual = 'X';
  juegoActivo = true;
  
  for (let i = 0; i < 9; i++) {
    const celda = document.getElementById(`celda-${i}`);
    celda.innerHTML = '';
    celda.style.backgroundColor = '';
    celda.className = 'aspect-square w-full bg-[#1e3741] rounded-xl sm:rounded-2xl shadow-[inset_0_-6px_0_0_#0f2129] sm:shadow-[inset_0_-8px_0_0_#0f2129] active:shadow-[inset_0_-3px_0_0_#0f2129] sm:active:shadow-[inset_0_-4px_0_0_#0f2129] active:translate-y-1 transition-all';
  }
  
  actualizarTurno();
}

export function reiniciarCompleto() {
  victoriasX = 0;
  victoriasO = 0;
  empates = 0;
  reiniciarJuego();
  actualizarContadores();
}

export function resetearContadores() {
  victoriasX = 0;
  victoriasO = 0;
  empates = 0;
  actualizarContadores();
}

export function mostrarJuego() {
  document.getElementById('container-principal').style.display = 'none';
  document.getElementById('contenedor-juego').style.display = 'flex';
}

export function inicializarJuego() {
  actualizarTurno();
}