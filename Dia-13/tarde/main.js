function obtenerDescuento(edad, tipo) {
  switch (tipo) {
    case 1:
      if (edad < 12) return 30 / 2;
      else if (edad > 60) return 30 / 4;
      else return 30;
      break;
    case 2:
      if (edad < 12) return 45 / 2;
      else if (edad > 60) return 45 / 4;
      else return 45;
      break;
  }
}

function obtenerTotal(snack, entrada) {
  if (snack === 1) return entrada + 20;
  else return entrada;
}

let entrada=obtenerDescuento(edad,tipo)

let total=obtenerTotal(snack,entrada)
