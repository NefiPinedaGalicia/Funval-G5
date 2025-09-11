export let fichaSeleccionada = 'X';
export let modoJuego = '';
export let jugador1 = '';

const cruzBtn = document.getElementById('cruz-principal');
const circuloBtn = document.getElementById('circulo-principal');
const contenedorCruz = document.getElementById('contenedor-cruz');
const contenedorCirculo = document.getElementById('contenedor-circulo');
const vsCpuBtn = document.getElementById('VS-CPU-principal');
const vsJugadorBtn = document.getElementById('VS-jugador-principal');

export function alternarFicha() {
  if (fichaSeleccionada === 'X') {
    fichaSeleccionada = 'O';
    contenedorCruz.innerHTML = '<button id="cruz-principal" class="w-full h-12 sm:h-14 md:h-16 flex justify-center items-center shadow-[inset_0_-4px_0_0_#182b32] active:shadow-[inset_0_-2px_0_0_#182b32] active:translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#a9bfc9]"><line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" stroke-width="12" stroke-linecap="round" /><line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" stroke-width="12" stroke-linecap="round" /></svg></button>';
    contenedorCirculo.innerHTML = '<button id="circulo-principal" class="w-full h-12 sm:h-14 md:h-16 flex justify-center items-center shadow-[inset_0_-4px_0_0_#6b8998] active:shadow-[inset_0_-2px_0_0_#6b8998] active:translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#182b32]"><circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="12" fill="none" /></svg></button>';
    contenedorCruz.className = 'w-full flex justify-center bg-[#182b32] rounded-l-2xl';
    contenedorCirculo.className = 'w-full h-full flex justify-center bg-[#a9bfc9] rounded-r-2xl';
  } else {
    fichaSeleccionada = 'X';
    contenedorCruz.innerHTML = '<button id="cruz-principal" class="w-full h-12 sm:h-14 md:h-16 flex justify-center items-center shadow-[inset_0_-4px_0_0_#6b8998] active:shadow-[inset_0_-2px_0_0_#6b8998] active:translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#182b32]"><line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" stroke-width="12" stroke-linecap="round" /><line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" stroke-width="12" stroke-linecap="round" /></svg></button>';
    contenedorCirculo.innerHTML = '<button id="circulo-principal" class="w-full h-12 sm:h-14 md:h-16 flex justify-center items-center shadow-[inset_0_-4px_0_0_#182b32] active:shadow-[inset_0_-2px_0_0_#182b32] active:translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#a9bfc9]"><circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="12" fill="none" /></svg></button>';
    contenedorCruz.className = 'w-full h-full flex justify-center bg-[#a9bfc9] rounded-l-2xl';
    contenedorCirculo.className = 'w-full flex justify-center bg-[#182b32] rounded-r-2xl';
  }
  actualizarEventos();
}

export function seleccionarModo(modo) {
  modoJuego = modo;
  jugador1 = `Jugador 1: ${fichaSeleccionada}`;
  if (modo === 'VS CPU') {
    import('./VSCPU.js').then(({ configurarVSCPU }) => {
      import('./juego.js').then(({ mostrarJuego, inicializarJuego }) => {
        import('./terminarJuego.js').then(({ inicializarFinJuego }) => {
          import('./reiniciarPartida.js').then(({ inicializarReiniciar }) => {
            mostrarJuego();
            configurarVSCPU();
            inicializarJuego();
            inicializarFinJuego();
            inicializarReiniciar();
          });
        });
      });
    });
  } else if (modo === 'VS Jugador') {
    import('./VSJugador.js').then(({ configurarVSJugador }) => {
      import('./juego.js').then(({ mostrarJuego, inicializarJuego }) => {
        import('./terminarJuego.js').then(({ inicializarFinJuego }) => {
          import('./reiniciarPartida.js').then(({ inicializarReiniciar }) => {
            mostrarJuego();
            configurarVSJugador();
            inicializarJuego();
            inicializarFinJuego();
            inicializarReiniciar();
          });
        });
      });
    });
  }
}

function actualizarEventos() {
  document.getElementById('cruz-principal').addEventListener('click', alternarFicha);
  document.getElementById('circulo-principal').addEventListener('click', alternarFicha);
}
cruzBtn.addEventListener('click', alternarFicha);
circuloBtn.addEventListener('click', alternarFicha);
vsCpuBtn.addEventListener('click', () => {
  seleccionarModo('VS CPU');
});
vsJugadorBtn.addEventListener('click', () => {
  seleccionarModo('VS Jugador');
});