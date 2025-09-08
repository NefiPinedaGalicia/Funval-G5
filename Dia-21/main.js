/* function volado(adivinar, intento) {
  intento(adivinar);
}

function verificarAdivinanza(resultado) {
  const opciones = ["aguila", "sol"];
  const resultadoAleatorio =
    opciones[Math.floor(Math.random() * opciones.length)];

  console.log(`Elegiste: ${resultado}`);
  console.log(`Salió: ${resultadoAleatorio}`);

  if (resultado.toLowerCase() === resultadoAleatorio) {
    console.log("Ganaste! ");
  } else {
    console.log("Perdiste ");
  }
}

volado(prompt("Elige aguila o sol:"), verificarAdivinanza);

volado(prompt("Elige aguila o sol:"), (adivinar) => {
  const opciones = ["aguila", "sol"];
  const resultadoAleatorio =
    opciones[Math.floor(Math.random() * opciones.length)];

  console.log(`Elegiste: ${adivinar}`);
  console.log(`Salió: ${resultadoAleatorio}`);

  if (adivinar.toLowerCase() === resultadoAleatorio) {
    alert("¡Felicidades, ganaste! ");
  } else {
    alert("Lo siento, perdiste ");
  }
});
 */

/* const usuarios = [
  { id: 1, nombre: "Ana", activo: true, edad: 25 },
  { id: 2, nombre: "Javier", activo: false, edad: 30 },
  { id: 3, nombre: "Marta", activo: true, edad: 22 },
];

// Usando some() para verificar existencia, verifica si al menos un elemento del array cumple una condición. Devuelve true o false.
const hayUsuariosActivos = usuarios.some((user) => user.activo);
console.log("¿Hay usuarios activos?", hayUsuariosActivos);

// Usando find() para obtener el usuario, busca y devuelve el primer elemento que cumple una condición. Si no encuentra ninguno, devuelve undefined.
const usuarioActivo = usuarios.find((user) => user.activo);
console.log("Primer usuario activo:", usuarioActivo);

// Usando findIndex() para encontrar posición, busca en un array y devuelve el índice del primer elemento que cumple una condición. Si no encuentra ninguno, devuelve -1.
const indiceUsuario = usuarios.findIndex((user) => user.nombre === "Javier");
console.log("Índice de Javier:", indiceUsuario); */

/* let enteros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let k = parseInt(prompt(`Ingresa el numero para mostrar sus multiplos`));

enteros.forEach((index) => {
  if (index % k === 0) console.log(index);
  else console.log("X");
}); 

/* let palabra = ["p", "e", "p", "t"]; */

/* let objetoPalabra = {
  palabra1: ["p", "e", "p", "e"],
  palabra2: ["a", "a", "a", "t"],
  palabra3: ["e", "n", "s", "a","l","a","d","a"]
};

function contarIslotes(arrayPalabra){
     let contador = 0;

     for (let index = 1; index < arrayPalabra.length - 1; index++) {
       if (arrayPalabra[index - 1] === arrayPalabra[index + 1]) {
         if (arrayPalabra[index] != arrayPalabra[index - 1]) contador++;
       }
     }
     return contador
}

console.log(contarIslotes(objetoPalabra.palabra1))
console.log(contarIslotes(objetoPalabra.palabra2))
console.log(contarIslotes(objetoPalabra.palabra3)) */
//1
console.log("Ejercicio 1:");
let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nuevoArreglo = arregloNumeros.map((numero) => numero * 2);
console.log(nuevoArreglo);
//2--------------------------------------------------------------------------------
console.log("Ejercicio 2:");
let edades = [2, 50, 20, 12, 30, 40];
let MayorEdad = edades.filter((edad) => edad >= 18);
console.log(MayorEdad);
//3------------------------------------------------------------------------------
console.log("Ejercicio 3:");
let nombres = ["Nefi", "Abril", "Sally"];
nombres.forEach((nombre) => console.log(`Hola ${nombre} `));
//4------------------------------------------------------------------------------
console.log("Ejercicio 4:");
console.log(arregloNumeros.some((numero) => numero % 2 === 0));
//5------------------------------------------------------------------------------------------
console.log("Ejercicio 5:");
console.log(nombres.find((nombre) => nombre.length > 4));
//6----------------------------------------------------------------------------------
console.log("Ejercicio 6:");
let numeros = [1, 0, 1, -1, 2, 4, -8, 10];
console.log(numeros.findIndex((numero) => numero < 0));
//7---------------------------------------------------------------------------------------
console.log("Ejercicio 7:");
let nuevoNumerosParesPotencia = arregloNumeros
  .map((numero) => numero * numero)
  .filter((numero) => numero % 2 === 0);
console.log(nuevoNumerosParesPotencia);
//8------------------------------------------------------------------------------
console.log("Ejercicio 8:");
let precios = [20.5, 15.9, 100.45, 300.25, 1000];
console.log(precios.reduce((total, precio) => total + precio));
//9--------------------------------------------------------------------------------------
console.log("Ejercicio 9:");
let cadenas = ["Hola", "Mundo", "JavaScript"];
console.log(cadenas.reduce((total, cadena) => total + "-" + cadena));
//10-------------------------------------------------------------------------------------------
console.log("Ejercicio 10:");
let nuevaEdad = edades.map((edad) => edad + 1);
console.log(nuevaEdad.some((edad) => edad >= 30));
//11--------------------------------------------------------------------------------
console.log("Ejercicio 11:");
let objetos = [
  { nombre: "Javier", edad: 15 },
  { nombre: "Abril", edad: 22 },
  { nombre: "Karely", edad: 23 },
  { nombre: "Edgar", edad: 10 },
  { nombre: "Veronica", edad: 45 },
  { nombre: "Iliana", edad: 8 },
  { nombre: "Sally", edad: 55 },
];
let mayores21 = objetos.filter((objeto) => objeto.edad >= 21);
mayores21.forEach((objeto) => console.log(objeto.nombre));
//12--------------------------------------------------------------------------------------
console.log("Ejercicio 12:");
let productos = [
  { id: 1, nombre: "Camiseta", precio: 45 },
  { id: 2, nombre: "Pantalón", precio: 60 },
  { id: 3, nombre: "Zapatos", precio: 90 },
  { id: 4, nombre: "Bolso", precio: 500 },
  { id: 5, nombre: "Reloj", precio: 680 },
];
console.log(productos.find((produto) => produto.precio > 100));
//13---------------------------------------------------------------------------------
console.log("Ejercicio 13:");
console.log(
  numeros.reduce((numero, mayor) => (numero > mayor ? numero : mayor))
);
//14-------------------------------------------------------------------------------------------------------------------------------------------------
console.log("Ejercicio 14:");
let notas = [25, 70, 90, 50, 30, 46, 61, 62, 90, 81, 7];
console.log(
  notas
    .filter((nota) => nota >= 60)
    .map((nota) => nota * nota)
    .reduce((total, nota) => total + nota)
);
//15--------------------------------------------------------------------------------------------
console.log("Ejercicio 15:");
let usuarios = [
  { id: 1, nombre: "Nefi", activo: false, edad: 30 },
  { id: 2, nombre: "Abril", activo: true, edad: 22 },
  { id: 3, nombre: "Wanda", activo: false, edad: 18 },
  { id: 4, nombre: "Mike", activo: false, edad: 15 },
  { id: 5, nombre: "Ariadna", activo: true, edad: 90 },
  { id: 6, nombre: "Chino", activo: true, edad: 67 },
  { id: 7, nombre: "Isabel", activo: true, edad: 37 },
  { id: 8, nombre: "Elias", activo: false, edad: 90 },
  { id: 9, nombre: "Gabriel", activo: true, edad: 12 },
  { id: 10, nombre: "Pascal", activo: true, edad: 32 },
];
let usuariosActivo = usuarios.filter((usuario) => usuario.activo);
console.log(usuariosActivo);
let nombreUsuarios = usuariosActivo.map((usuario) => usuario.nombre);
console.log(nombreUsuarios);
if (usuarios.some((usuario) => usuario.edad < 18))
  console.log("Hay usuario(s) menores de edad");
else console.log("No hay usuario(s) menores de edad");
console.log(
  (
    usuariosActivo.reduce(
      (total, usuarioActivo) => total + usuarioActivo.edad,
      0
    ) / usuariosActivo.length
  ).toFixed(2)
);

