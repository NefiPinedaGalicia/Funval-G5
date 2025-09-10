/* fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data)); */

/* async function darComments() {
  let response = await fetch("http://jsonplaceholder.typicode.com/comments");
  let data = await response.json();
  console.log(data);
}

darComments(); */

/* let contenedor = document.querySelector("#contenedor");

fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((usuario) => {
      contenedor.innerHTML += `
          <article
  class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
>
  <div class="w-[100%] h-[100%] rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
    

    
      <h3 class="mt-0.5 text-lg font-medium text-gray-900">
        ${usuario.name}
      </h3>
    
    <p class="block text-xs text-gray-500">
      ${usuario.company.name}
    </p>

    <p class="block text-xs text-gray-500">
      ${usuario.company.catchPhrase}
    </p>

    
  </div>
</article>
`;
    });
  });
 */
/* axios("http://jsonplaceholder.typicode.com/comments")
  .then(({ data }) => console.log(data))
  .catch((error) => console.log(error));

async function datosAxios() {
  try {
    let { data } = await axios("http://jsonplaceholder.typicode.com/posts");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

datosAxios(); */

axios("./usuarios.json")
  .then(({ data }) => {
    // Filtrar usuarios con edad mayor a 25
    let usuariosFiltrados = data.filter((usuario) => usuario.edad > 25);

    usuariosFiltrados.forEach((usuario) => {
      contenedor.innerHTML += `
          <article
  class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
>
  <div class="w-[100%] h-[100%] rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
    

    
      <h3 class="mt-0.5 text-lg font-medium text-gray-900">
        ${usuario.nombre}
      </h3>
    
     <p class="block text-xs text-gray-500">
      ID: ${usuario.id}
    </p> 
    <p class="block text-xs text-gray-500">
      Edad: ${usuario.edad}
    </p>
    <p class="block text-xs text-gray-500">
      Email: ${usuario.email}
    </p>
    <p class="block text-xs text-gray-500">
      Ciudad: ${usuario.ciudad}
    </p>
    <p class="block text-xs text-gray-500">
      Telefono: ${usuario.telefono}
    </p>
    <p class="block text-xs text-gray-500">
      Ocupacion: ${usuario.ocupacion}
    </p>
    <div class="block text-xs text-gray-500">
      Hobies: ${colorearHobbies(usuario.hobbies)}
    </div> 
  </div>
</article>
`;
    });
  })
  .catch((error) => console.log(error));

function colorearHobbies(arrayHobbies) {
  // Paleta de colores
  const colores = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F033FF",
    "#FF33A1",
    "#33FFF6",
    "#FFD733",
    "#33FF96",
    "#8333FF",
    "#FF8333",
  ];

  // Generar spans para cada hobbie con color
  let hobbiesHTML = "";
  arrayHobbies.forEach((hobbie, index) => {
    let color = colores[index % colores.length];
    hobbiesHTML += `<span style="color: ${color};">${hobbie}</span>, `;
  });

  // Quitar la última coma y espacio
  hobbiesHTML = hobbiesHTML.slice(0, -2);

  return hobbiesHTML;
}
