/* console.log('Mezclar los ingredientes secos')
console.log('Añadir la leche')
console.log('Añadir la mantequilla')
console.log('Separar los huevos')
setTimeout(()=>{
     console.log('Batir claras')
},3000);
console.log('Agregar a la mezcla las yemas y meclar')
console.log('Mezclar todo')
setTimeout(() => {
     console.log('Precalentar maquina de waffles')
}, 5000);
setTimeout(() => {
     console.log('Cocinar la mezcla')
     console.log('Decorar los waffles')
},10000); */

/* function getPromise() {
  return new Promise((resolve, reject) => {
    let cumplio = false;
    setTimeout(() => {
      if (cumplio) {
        resolve("One Piece si terminó en 5 años");
      } else {
        reject("Sigue la historia, que bendicion");
      }s
    }, 5000);
  });
}

getPromise()
  .then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  }); */

let listaEstudiantes = [
  { nombre: "Juan", Pais: "Argentina", edad: 20 },
  { nombre: "Harold", Pais: "PERU", edad: 13 },
  { nombre: "Charlie", Pais: "Chile", edad: 14 },
  { nombre: "CHENTE", Pais: "Mexico", edad: 31 },
  { nombre: "FAUSTO", Pais: "BOLIVIA", edad: 17 },
  { nombre: "MARIA", Pais: "PERU", edad: 18 },
  { nombre: "DIEGO", Pais: "Peru", edad: 23 },
  { nombre: "Martin" },
];
let superPromesa = new Promise((resolve, reject) => {
  let siLlego = true;
  setTimeout(() => {
    if (siLlego) {
      resolve(listaEstudiantes);
    } else {
      reject("error 404 se cayo la base de datos :v");
    }
  }, 3000);
});
/* filtrar solo a los estudiantes mayores de edad y q ademas sean de Peru */

superPromesa
  .then((response) => {
    let filtrados = response.filter(
      (estudiante) =>
        estudiante.edad >= 18 && estudiante.Pais.toLowerCase() === "peru"
    );
    console.log(filtrados);
  })
  .catch((error) => {
    console.log(error);
  });
