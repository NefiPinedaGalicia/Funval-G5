/* let n1 = 4;
var n2 = 3;
const n3 = n1 + n2;


console.log(`${n1} + ${n2} = ${n3}`); */

/* let estudiantes = [
  "Pedro",
  "Geraldine",
  "Santiago",
  "Jesus",
  "Mario",
  "Yonathan",
  "David",
  "Roberto",
];

let ul = document.createElement("ul");
let str = "";

let h2 = document.querySelector("#titulo");
estudiantes.forEach((element) => {
  str += `<li>${element}</li>`;
});

ul.innerHTML = str;
h2.appendChild(ul);
 */

/* 
💡 EJERCICIO: "Liga de Superhéroes"
1. Desestructura el array para obtener el primer héroe, el segundo héroe, y el resto en otro array.  
2. Crea un nuevo array de héroes que incluya a los originales y agrega uno nuevo con el spread operator (...).  
3. Desestructura un héroe en sus propiedades (nombre, poder, fuerza) y usa template literals para mostrar su descripción en consola.  
4. Agrega un botón que, al hacer clic, muestre en el DOM una lista de héroes con sus niveles de fuerza.
*/
// Array de superhéroes
const heroes = [
  { nombre: "Iron Man", poder: "Armadura tecnológica", fuerza: 85 },
  { nombre: "Thor", poder: "Martillo Mjolnir", fuerza: 95 },
  { nombre: "Hulk", poder: "Fuerza sobrehumana", fuerza: 100 },
  { nombre: "Black Widow", poder: "Espionaje y combate", fuerza: 75 },
];

let [h1, h2, ,] = heroes;
console.log(h1, h2);
let [, , h3, h4] = heroes;
console.log(h3, h4);

const nuevoHeores = [
  ...heroes,
  { nombre: "Capitan America", poder: "Suero super soldado", fuerza: 95 },
];
console.log(nuevoHeores);

let [heroe, , ,] = nuevoHeores;
console.log(
  `Nombre: ${heroe.nombre} Poder: ${heroe.poder} Fuerza:${heroe.fuerza}`
);

const mostrarTabla = document.querySelector("#mostrar-tabla");
const containerTable = document.querySelector("#container-tabla");
const bodyTable = document.querySelector("#body-Tabla");

mostrarTabla.addEventListener("click", function () {
  containerTable.classList.replace("hidden", "flex");
});

for (let index = 0; index < heroes.length; index++) {
  let { nombre, poder = "No definido", fuerza = 0 } = heroes[index];
  bodyTable.innerHTML += `<tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ${nombre}
            </th>
            <td class="px-6 py-4">${poder}</td>
            <td class="px-6 py-4">
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${fuerza}%">${fuerza}</div>
</div>
            </td>
            
          </tr>`;
}
