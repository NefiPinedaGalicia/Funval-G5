function consultarSaldo(cuenta) {
  const fecha = new Date().toLocaleString();

  alert(
    "══════════════════════════════════════\n" +
      "           CONSULTA DE SALDO          \n" +
      "══════════════════════════════════════\n\n" +
      "  Saldo disponible: $" +
      cuenta.toFixed(2) +
      "\n\n" +
      "  Fecha: " +
      fecha +
      "\n" +
      "  Estado: Cuenta activa\n" +
      "  Moneda: Pesos Mexicanos (MXN)\n\n" +
      "══════════════════════════════════════\n\n" +
      "Presiona Aceptar para volver al menú principal"
  );
}

function ingresarDinero(cuenta) {
  while (true) {
    let ingresoTexto = prompt(
      "¿Cuánto dinero vas a ingresar?\n\n" +
        "• Ingresa el monto a depositar\n" +
        "• Escribe 'salir' para cancelar la operación\n" +
        "• Escribe 'continuar' para mantener el saldo actual"
    );

    if (ingresoTexto === null) {
      if (confirm("¿Estás seguro de que quieres cancelar la operación?")) {
        alert("Operación cancelada. Saldo actual: $" + cuenta.toFixed(2));
        return cuenta;
      } else {
        continue;
      }
    }

    ingresoTexto = ingresoTexto.trim().toLowerCase();

    if (ingresoTexto === "salir") {
      if (confirm("¿Estás seguro de que quieres salir sin realizar ingreso?")) {
        alert("Operación cancelada. Saldo actual: $" + cuenta.toFixed(2));
        return cuenta;
      } else {
        continue;
      }
    }

    if (ingresoTexto === "continuar") {
      alert("Operación finalizada. Saldo actual: $" + cuenta.toFixed(2));
      return cuenta;
    }

    if (ingresoTexto === "") {
      alert("❌ Error: Debes ingresar un valor. Intenta nuevamente.");
      continue;
    }

    let ingreso = parseFloat(ingresoTexto);

    if (isFinite(ingreso) && ingreso > 0) {
      let nuevaCuenta = cuenta + ingreso;

      alert(
        "✅ Ingreso exitoso!\n" +
          "• Monto ingresado: $" +
          ingreso.toFixed(2) +
          "\n" +
          "• Saldo anterior: $" +
          cuenta.toFixed(2) +
          "\n" +
          "• Nuevo saldo: $" +
          nuevaCuenta.toFixed(2)
      );

      if (confirm("¿Deseas realizar otro ingreso?")) {
        cuenta = nuevaCuenta;
        continue;
      } else {
        return nuevaCuenta;
      }
    }

    if (isNaN(ingreso) || !isFinite(ingreso)) {
      alert(
        "❌ Error: Debes ingresar un número válido. Letras y símbolos no son permitidos."
      );
    } else if (ingreso <= 0) {
      alert(
        "❌ Error: El monto debe ser mayor a cero. No puedes ingresar valores negativos o cero."
      );
    }

    if (confirm("¿Deseas intentarlo de nuevo o prefieres salir?")) {
      continue; // Intentar de nuevo
    } else {
      alert("Operación cancelada. Saldo actual: $" + cuenta.toFixed(2));
      return cuenta;
    }
  }
}

function retirarDinero(cuenta, limiteDiario) {
  let retiradoHoy = 0;

  while (true) {
    let retiroTexto = prompt(
      "¿Cuánto dinero deseas retirar?\n\n" +
        "• Saldo disponible: $" +
        cuenta.toFixed(2) +
        "\n" +
        "• Límite diario restante: $" +
        (limiteDiario - retiradoHoy).toFixed(2) +
        "\n" +
        "• Escribe 'salir' para cancelar\n" +
        "• Escribe 'continuar' para mantener saldo actual"
    );

    if (retiroTexto === null) {
      if (confirm("¿Estás seguro de que quieres cancelar la operación?")) {
        alert("Operación cancelada. Saldo actual: $" + cuenta.toFixed(2));
        return cuenta;
      } else {
        continue;
      }
    }

    retiroTexto = retiroTexto.trim().toLowerCase();

    if (retiroTexto === "salir") {
      if (confirm("¿Estás seguro de que quieres salir sin realizar retiro?")) {
        alert("Operación cancelada. Saldo actual: $" + cuenta.toFixed(2));
        return cuenta;
      } else {
        continue;
      }
    }

    if (retiroTexto === "continuar") {
      alert("Operación finalizada. Saldo actual: $" + cuenta.toFixed(2));
      return cuenta;
    }

    if (retiroTexto === "") {
      alert("❌ Error: Debes ingresar un valor. Intenta nuevamente.");
      continue;
    }

    let retiro = parseFloat(retiroTexto);

    if (isFinite(retiro) && retiro > 0) {
      if (retiro > cuenta) {
        alert(
          "❌ Error: Fondos insuficientes.\n" +
            "• Intentas retirar: $" +
            retiro.toFixed(2) +
            "\n" +
            "• Saldo disponible: $" +
            cuenta.toFixed(2)
        );
        continue;
      }

      if (retiro > limiteDiario - retiradoHoy) {
        alert(
          "❌ Error: Excedes tu límite diario.\n" +
            "• Intentas retirar: $" +
            retiro.toFixed(2) +
            "\n" +
            "• Límite restante hoy: $" +
            (limiteDiario - retiradoHoy).toFixed(2) +
            "\n" +
            "• Límite diario total: $" +
            limiteDiario.toFixed(2)
        );
        continue;
      }

      if (
        !confirm(
          `¿Confirmas retirar $${retiro.toFixed(
            2
          )}?\nSaldo después del retiro: $${(cuenta - retiro).toFixed(2)}`
        )
      ) {
        alert("Retiro cancelado.");
        continue;
      }

      let nuevaCuenta = cuenta - retiro;
      retiradoHoy += retiro;

      alert(
        "✅ Retiro exitoso!\n" +
          "• Monto retirado: $" +
          retiro.toFixed(2) +
          "\n" +
          "• Saldo anterior: $" +
          cuenta.toFixed(2) +
          "\n" +
          "• Nuevo saldo: $" +
          nuevaCuenta.toFixed(2) +
          "\n" +
          "• Retirado hoy: $" +
          retiradoHoy.toFixed(2) +
          " / $" +
          limiteDiario.toFixed(2)
      );

      if (confirm("¿Deseas realizar otro retiro?")) {
        cuenta = nuevaCuenta;
        continue;
      } else {
        return nuevaCuenta;
      }
    }

    if (isNaN(retiro) || !isFinite(retiro)) {
      alert(
        "❌ Error: Debes ingresar un número válido. Letras y símbolos no son permitidos."
      );
    } else if (retiro <= 0) {
      alert(
        "❌ Error: El monto debe ser mayor a cero. No puedes retirar valores negativos o cero."
      );
    }

    if (confirm("¿Deseas intentarlo de nuevo o prefieres salir?")) {
      continue;
    } else {
      alert("Operación cancelada. Saldo actual: $" + cuenta.toFixed(2));
      return cuenta;
    }
  }
}

function transferencia(cuenta) {
  while (true) {
    let destino = prompt(
      "TRANSFERENCIA BANCARIA\n\n" +
        "• Saldo disponible: $" +
        cuenta.toFixed(2) +
        "\n\n" +
        "Ingresa el número de cuenta destino (10 dígitos):"
    );

    if (destino === null) {
      if (confirm("¿Estás seguro de que quieres cancelar la transferencia?")) {
        alert("Transferencia cancelada. Saldo actual: $" + cuenta.toFixed(2));
        return cuenta;
      } else {
        continue;
      }
    }

    destino = destino.trim();

    if (destino.toLowerCase() === "salir") {
      if (
        confirm(
          "¿Estás seguro de que quieres salir sin realizar la transferencia?"
        )
      ) {
        alert("Transferencia cancelada. Saldo actual: $" + cuenta.toFixed(2));
        return cuenta;
      } else {
        continue;
      }
    }

    if (!/^\d{10}$/.test(destino)) {
      alert("❌ Error: El número de cuenta debe tener exactamente 10 dígitos.");
      continue;
    }

    if (!confirm(`¿Confirmas que la cuenta destino es: ${destino}?`)) {
      alert("Por favor ingresa la cuenta destino nuevamente.");
      continue;
    }

    while (true) {
      let montoTexto = prompt(
        "Ingresa el monto a transferir a la cuenta " +
          destino +
          ":\n\n" +
          "• Saldo disponible: $" +
          cuenta.toFixed(2) +
          "\n" +
          "• Escribe 'cancelar' para volver atrás\n" +
          "• Escribe 'salir' para cancelar todo"
      );

      if (montoTexto === null) {
        if (confirm("¿Cancelar la transferencia?")) {
          alert("Transferencia cancelada.");
          break;
        } else {
          continue;
        }
      }

      montoTexto = montoTexto.trim().toLowerCase();

      if (montoTexto === "salir") {
        if (
          confirm("¿Estás seguro de que quieres cancelar la transferencia?")
        ) {
          alert("Transferencia cancelada. Saldo actual: $" + cuenta.toFixed(2));
          return cuenta;
        } else {
          continue;
        }
      }

      if (montoTexto === "cancelar") {
        alert("Volviendo a ingresar cuenta destino...");
        break;
      }

      if (montoTexto === "") {
        alert("❌ Error: Debes ingresar un monto. Intenta nuevamente.");
        continue;
      }

      let monto = parseFloat(montoTexto);

      if (isFinite(monto) && monto > 0) {
        if (monto > cuenta) {
          alert(
            "❌ Error: Fondos insuficientes.\n" +
              "• Intentas transferir: $" +
              monto.toFixed(2) +
              "\n" +
              "• Saldo disponible: $" +
              cuenta.toFixed(2)
          );
          continue;
        }

        if (monto < 1) {
          alert("❌ Error: El monto mínimo de transferencia es $1.00");
          continue;
        }

        if (
          !confirm(
            `¿Confirmas transferir $${monto.toFixed(
              2
            )} a la cuenta ${destino}?\nSaldo después de la transferencia: $${(
              cuenta - monto
            ).toFixed(2)}`
          )
        ) {
          alert("Transferencia cancelada.");
          continue;
        }

        let nuevaCuenta = cuenta - monto;

        alert(
          "✅ Transferencia exitosa!\n" +
            "• Cuenta destino: " +
            destino +
            "\n" +
            "• Monto transferido: $" +
            monto.toFixed(2) +
            "\n" +
            "• Saldo anterior: $" +
            cuenta.toFixed(2) +
            "\n" +
            "• Nuevo saldo: $" +
            nuevaCuenta.toFixed(2) +
            "\n" +
            "• Número de transacción: " +
            Date.now()
        );

        if (confirm("¿Deseas realizar otra transferencia?")) {
          cuenta = nuevaCuenta;
          transferencia;
          break;
        } else {
          return nuevaCuenta;
        }
      }

      if (isNaN(monto) || !isFinite(monto)) {
        alert(
          "❌ Error: Debes ingresar un número válido. Letras y símbolos no son permitidos."
        );
      } else if (monto <= 0) {
        alert(
          "❌ Error: El monto debe ser mayor a cero. No puedes transferir valores negativos."
        );
      }

      if (confirm("¿Deseas intentarlo de nuevo o prefieres cancelar?")) {
        continue;
      } else {
        alert("Transferencia cancelada. Saldo actual: $" + cuenta.toFixed(2));
        return cuenta;
      }
    }
  }
}

function mostrarHistorial() {
  if (historialTransacciones.length === 0) {
    alert("No hay transacciones en el historial.");
    return;
  }

  let historialTexto = "📋 HISTORIAL DE TRANSACCIONES\n\n";

  historialTransacciones.forEach((transaccion, index) => {
    historialTexto += `➡️ Transacción #${index + 1}\n`;
    historialTexto += `• Tipo: ${transaccion.tipo}\n`;
    historialTexto += `• Fecha: ${transaccion.fecha}\n`;
    historialTexto += `• Monto: $${transaccion.monto.toFixed(2)}\n`;
    historialTexto += `• Saldo anterior: $${transaccion.saldoAnterior.toFixed(
      2
    )}\n`;
    historialTexto += `• Saldo nuevo: $${transaccion.saldoNuevo.toFixed(2)}\n`;

    if (transaccion.cuentaDestino) {
      historialTexto += `• Cuenta destino: ${transaccion.cuentaDestino}\n`;
    }

    if (transaccion.descripcion) {
      historialTexto += `• Descripción: ${transaccion.descripcion}\n`;
    }

    historialTexto += "─".repeat(30) + "\n\n";
  });

  historialTexto += `Total de transacciones: ${historialTransacciones.length}`;

  alert(historialTexto);
}
//---------------------Main-----------------------------------------
alert("Bienvenido a tu cuenta");

let cuenta = 0.0;
let limiteDiario = 10000;
let seleccion = 0;

while (seleccion !== 5) {
  let menu = prompt(
    "Bienvenido al Cajero Automático\n" +
      "1. Consultar saldo\n" +
      "2. Ingresar dinero\n" +
      "3. Retirar dinero\n" +
      "4. Transferencia\n" +
      "5. Salir\n\n" +
      "Selecciona una opción (1-5):"
  );

  if (menu === null) {
    alert("Operación cancelada. Hasta pronto!");
    break;
  }

  seleccion = parseInt(menu);

  switch (seleccion) {
    case 1:
      consultarSaldo(cuenta);
      break;
    case 2:
      cuenta = ingresarDinero(cuenta);
      break;
    case 3:
      cuenta = retirarDinero(cuenta, limiteDiario);
      break;
    case 4:
      cuenta = transferencia(cuenta);
      break;
    case 5:
      alert("Gracias por usar nuestro servicio. Hasta pronto!");
      break;
    default:
      alert("Opción no válida. Por favor selecciona una opción del 1 al 5.");
      break;
  }
}
