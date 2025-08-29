/* let estudiantes1 = ["Pedro", "David", "Nefi", "Santiago", "Roberto", "Mario"];

let nombreABuscar = "Santiago";

for (let i = 0; i < estudiantes1.length; i++) {
  if (estudiantes1[i] === nombreABuscar) {
    console.log(`"${nombreABuscar}" se encuentra en la posición ${i}`);
    break;
  }

  if (i === estudiantes1.length - 1) {
    console.log(`"${nombreABuscar}" no se encuentra en la lista`);
  }
}

nombreABuscar = "Luis";

for (let i = 0; i < estudiantes1.length; i++) {
  if (estudiantes1[i] === nombreABuscar) {
    console.log(`"${nombreABuscar}" se encuentra en la posición ${i}`);
    break;
  }

  if (i === estudiantes1.length - 1) {
    console.log(`"${nombreABuscar}" no se encuentra en la lista`);
  }
}
 */

/* let notasEstudiante = [65, 44, 90, 10, 51, 0];
let sum = 0;

for (let i = 0; i < notasEstudiante.length; i++) sum += notasEstudiante[i];

let prom = sum / notasEstudiante.length;

console.log(prom < 51 ? "No aprobo el curso" : "Aprobo el curso");

let suma = 0;
notasEstudiante.forEach((element) => (suma += element));
let promedio = suma / notasEstudiante.length;
console.log(promedio < 51 ? "No aprobo el curso" : "Aprobo el curso"); */

/* let computadora = {
  marca: "Lenovo",
  procesador: "intel i5",
};

console.log(computadora);
console.log(computadora.marca);
console.log(computadora.procesador);

computadora.puertos = 5;
computadora.ram = "8gb";

console.log(computadora);

delete computadora.ram;
console.log(computadora);


console.log(computadora) */

/* let est = [
  {
    nombre: "Jesus",
    edad: 23,
  },
  {
    nombre: "Mario",
    edad: 30,
  },
  { nombre: "Geraldine", edad: 26 },
  {
    nombre: "Juanito",
    edad: 10,
  },
  {
    nombre: "Cleto",
    edad: 12,
  },
];

function mayores(arrayEstudiantes) {
  let arrayvacio = [];
  arrayEstudiantes.forEach((element) => {
    if (element.edad >= 18) arrayvacio.push(element.nombre);
  });
  return arrayvacio;
}

console.log(mayores(est)); */

function obtenerProm(arrayObjetos) {
  let sum = 0;
  arrayObjetos.forEach((element) => {
    sum += element.precio;
  });

  return sum / arrayObjetos.length;
}

/*let tienda = [
  { nombre: "pan", precio: 20 },
  { nombre: "botana", precio: 15 },
  { nombre: "leche", precio: 40 },
  { nombre: "dulces", precio: 2 },
];

console.log(obtenerProm(tienda)); */

function listarAprobados(arrayEst) {
  let aprobados = [];
  let prom = 0.0;
  arrayEst.forEach((element) => {
    prom = obtenerProm(element.notas);
    if (prom >= 75) aprobados.push(element.nombre, prom);
  });

  return aprobados;
}

function contarPais(arrayEst) {
  let pais = [];

  arrayEst.forEach((element) => {
    cont = 0;
    prom = obtenerProm(element.notas);
    if (prom >= 75) pais.push(element.Pais);
  });

  if (pais.length === 0) {
    return { pais: null, cantidad: 0 };
  }

  let contador = {};
  pais.forEach((p) => {
    contador[p] = (contador[p] || 0) + 1;
  });

  let maxPais = null;
  let maxCantidad = 0;
  for (let p in contador) {
    if (contador[p] > maxCantidad) {
      maxCantidad = contador[p];
      maxPais = p;
    }
  }

  return { pais: maxPais, cantidad: maxCantidad };
}

let listaEstudiantes = [
  {
    nombre: "Mario",
    Pais: "Argentina",
    notas: [20, 55, 78, 90, 12],
  },
  {
    nombre: "Nefi",
    Pais: "Mexico",
    notas: [100, 90, 78, 90, 0],
  },
  {
    nombre: "Santiago",
    Pais: "Argentina",
    notas: [70, 80, 77, 0, 11],
  },
  {
    nombre: "Geraldine",
    Pais: "Peru",
    notas: [20, 10, 0, 0, 100],
  },
  {
    nombre: "Jesus",
    Pais: "Colombia",
    notas: [70, 60, 80, 32, 22],
  },
];

console.log(listarAprobados(listaEstudiantes));
console.log(contarPais(listaEstudiantes));
