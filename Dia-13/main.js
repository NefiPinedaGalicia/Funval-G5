/* let n1 = parseInt(prompt("Ingrese un numero"));
let n2 = parseInt(
  prompt("Ingrese el numero por el que multiplicara al primero")
);
let sum = 0;
let cadena = "";

for (let i = 1; i <= n2; i++) {
  sum += n1;
  if (i !== n2) cadena += n1 + "+";
  else cadena += n1 + "= ";
}
alert(cadena + sum);
alert("El resultado de " + n1 + " x " + n2 + "=" + sum); */

/* let n3 = parseInt(prompt("Ingrese el numero de pasos de la serie fibunachi"));
let a = 1;
let b = 1;

let cad2 = "";

for (let j = 1; j <= n3; j++) {
  if (j !== n3) cad2 += a + ",";
  else cad2 += a + ".";
  let sig = a + b;
  a = b;
  b = sig;
} */

/* alert(cad2); */

function eliminarEspacios(cadena) {
  let resultado = "";

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i].trim() !== "") {
      resultado += cadena[i];
    }
  }

  return resultado;
}

console.log(eliminarEspacios("  Hola  mundo  "));

function cambiarMinusculas(cadena) {
  return cadena.toLowerCase();
}

console.log(cambiarMinusculas(eliminarEspacios(" HolA  MuNdO ")));

function invertirCadena(cadena) {
  return cadena.split().reverse().join();
}

cad = invertirCadena(cambiarMinusculas(eliminarEspacios(" HolA  MuNdO ")));
console.log(cad);
