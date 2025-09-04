/* let edad = 65;

console.log(edad > 65 ? "Es de mayor edad" : "Todavia eres joven");
 */
/* let edad = 6;

if (edad < 18) console.log("Chao nomas");
else {
  if (edad <= 65) console.log("bienvenido");
  else console.log("tienes descuento");
}

let n = 6;
let prod = 1;

for (let i = n; i > 1; i--) prod *= i;

console.log(prod); */

/* let frutas = ["manzana", "pera", "banana", "frutilla"];
let fruta = prompt("De que quiere su jugo joven ").toLowerCase();
let encontrado = -1;
frutas.forEach((element) => {
  if (element === fruta) encontrado = 1;
  
});

console.log(
  encontrado === 1 ? "si esta ya te perparo el jugo" : "ya no tengo casera"
); */

/* function sumaFor(n) {
  let sum = 0;
  for (let j = n; j >= 1; j--) {
    // console.log("j=" + j);
    for (let i = 1; i <= j; i++) {
      // console.log("i=" + i);
      sum += i;
    }
  }
  return sum;
}

let n = 2;
let resultado = sumaFor(n);
let resultado2 = sumaFor(resultado);
let resultado3 = sumaFor(resultado2);

console.log(resultado3); */

/* const matriz = [
  [1, 2, 15],
  [4, 5, 6],
  [7, 8, 9],
];
const n = matriz.length;

let sum = 0;
//suma diagonal principal
for (let i = 0; i < n; i++) {
  sum += matriz[i][i];
}
console.log(sum);

//suma diagonal secundaria
let sum2 = 0;
for (let i = 0, j = n - 1; i < n; i++, j--) {
  sum2 += matriz[j][i];
}
console.log(sum2); */

let persona = {
  nombre: "Nefi",
  edad: 30,
  esMiembro: true,
  TCGFav: ["Pokemon", "Magic", "Yugioh "],
};

let estudiantes = [
  {
    nombre: "Juan",
    edad: 28,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Pedro",
    edad: 20,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Santiago",
    edad: 65,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Ricardo",
    edad: 16,
    notas: [23, 34, 45, 67, 89],
  },
];

estudiantes.forEach((element) => {
  if (element.edad >= 18) console.log(element.nombre);
});
