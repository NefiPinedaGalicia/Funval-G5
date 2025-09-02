/* let tituloGrande = document.querySelector("#titulo");
tituloGrande.textContent = "Holaaaaa, adioooos :D";
tituloGrande.classList.add("text-cyan-800");

let parrafo = document.querySelector(".parrafo");
parrafo.classList.add("bg-red-200", "text-3xl");

let div = document.querySelector(".divi");
div.innerHTML += "<p> Hola soy un nuevo parrafo </p>";
div.innerHTML += '<img src="../click-here_13881967.png" alt="">'; */

let nuevoH1 = document.createElement("h1");
nuevoH1.textContent = "Audifonos Gamer";

let nuevoIMG = document.createElement("img");
nuevoIMG.setAttribute(
  "src",
  "https://i5.walmartimages.com/asr/a865a5c9-5137-402b-bb63-ea929433b35b.c2da8d80708b4abd1faa6b0fc286c987.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
);

let nuevoP = document.createElement("p");
nuevoP.textContent = "Nuevos audifonos gamer super cool";

let nuevoBoton = document.createElement("button");
nuevoBoton.setAttribute("class", "bg-blue-500");
nuevoBoton.textContent = "Comprar";

let contenedor = document.querySelector("#div");
//agregamos los elementos en en el DOM, muy importante 
contenedor.appendChild(nuevoH1);
contenedor.appendChild(nuevoIMG);
contenedor.appendChild(nuevoP);
contenedor.appendChild(nuevoBoton);

let h2 = document.querySelector("#titulo2");
h2.remove();
