function validarNumeroPositivo(dato) {
  let num = parseFloat(dato);
  return !Number.isNaN(num) && isFinite(num) && num > 0;
}

let menu =
  "\tMENU PRINCIPAL \nCalculadora de Areas " +
  "\n1) Calcular Area de un Cuadrado" +
  "\n2) Calcular Area de un Rectangulo" +
  "\n3) Calcular Area de un Triangulo" +
  "\n\t Selecciona una opcion (1-3):";

let respuesta;
let opcionValida = false;

do {
  let input = prompt(menu);
  respuesta = parseInt(input);

  if (isNaN(respuesta)) {
    alert("❌ Error: Debes ingresar un número, no letras");
  } else if (respuesta < 1 || respuesta > 3) {
    alert("❌ Error: Solo opciones 1, 2 o 3 son válidas");
  } else {
    opcionValida = true;

    switch (respuesta) {
      case 1:
        alert("Calcular area de un cuadrado");
        let lado;
        let validacionLado;
        do {
          lado = prompt("Ingrese cuanto mide el lado del cuadrado");
          validacionLado = validarNumeroPositivo(lado);
          if (!validacionLado) {
            alert("❌ Error: Debes ingresar un número positivo válido");
          }
        } while (!validacionLado);

        lado = parseFloat(lado);
        alert("El área del cuadrado de lado " + lado + " es: " + lado * lado);
        break;

      case 2:
        alert("Calcular area de un rectangulo");
        let baseRect;
        let altRect;
        let validacionBase;
        let validacionAltura;

        do {
          baseRect = prompt("Ingrese cuanto mide la base del rectangulo");
          validacionBase = validarNumeroPositivo(baseRect);
          if (!validacionBase) {
            alert(
              "❌ Error: Debes ingresar un número positivo válido para la base"
            );
          }
        } while (!validacionBase);

        do {
          altRect = prompt("Ingrese cuanto mide la altura del rectangulo");
          validacionAltura = validarNumeroPositivo(altRect);
          if (!validacionAltura) {
            alert(
              "❌ Error: Debes ingresar un número positivo válido para la altura"
            );
          }
        } while (!validacionAltura);

        baseRect = parseFloat(baseRect);
        altRect = parseFloat(altRect);
        alert(
          "El área del rectángulo de base: " +
            baseRect +
            " y de altura: " +
            altRect +
            " es: " +
            baseRect * altRect
        );
        break;

      case 3:
        alert("Calcular area de un triangulo");
        let baseTri;
        let altTri;
        let validacionBaseTri;
        let validacionAlturaTri;

        do {
          baseTri = prompt("Ingrese cuanto mide la base del triangulo");
          validacionBaseTri = validarNumeroPositivo(baseTri);
          if (!validacionBaseTri) {
            alert(
              "❌ Error: Debes ingresar un número positivo válido para la base"
            );
          }
        } while (!validacionBaseTri);

        do {
          altTri = prompt("Ingrese cuanto mide la altura del triangulo");
          validacionAlturaTri = validarNumeroPositivo(altTri);
          if (!validacionAlturaTri) {
            alert(
              "❌ Error: Debes ingresar un número positivo válido para la altura"
            );
          }
        } while (!validacionAlturaTri);

        baseTri = parseFloat(baseTri);
        altTri = parseFloat(altTri);
        alert(
          "El área del triángulo de base: " +
            baseTri +
            " y de altura: " +
            altTri +
            " es: " +
            (baseTri * altTri) / 2
        );
        break;
    }
  }
} while (!opcionValida);
