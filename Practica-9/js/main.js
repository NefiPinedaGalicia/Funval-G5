// main.js
import {
  inicializarSeccionPrincipal,
  obtenerSelecciones,
} from "./seccionPrincipal.js";
import {
  inicializarJuegoJugador,
  reiniciarTablero,
} from "./seccionJuegoJugador.js";
import {
  mostrarPantallaFinal,
  reiniciarContadores,
} from "./seccionFinJuego.js";

// Inicializar la aplicación cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  inicializarSeccionPrincipal();

  // Cuando se hace click en el botón VS Jugador
  document
    .getElementById("VS-jugador-principal")
    .addEventListener("click", () => {
      const selecciones = obtenerSelecciones();

      // Ocultar sección principal y mostrar sección de juego
      document.getElementById("container-principal").classList.add("hidden");
      document.getElementById("contenedor-juego").classList.remove("hidden");

      // Inicializar el juego con la ficha seleccionada
      inicializarJuegoJugador(selecciones.ficha);
    });

  // Configurar botones de la pantalla final
  document.getElementById("Salir").addEventListener("click", () => {
    reiniciarContadores();
    document.getElementById("contenedor-final").classList.add("hidden");
    document.getElementById("container-principal").classList.remove("hidden");
    document.getElementById("contenedor-juego").classList.add("hidden");
  });

  document.getElementById("Continuar").addEventListener("click", () => {
    document.getElementById("contenedor-final").classList.add("hidden");
    reiniciarTablero();
  });
});
