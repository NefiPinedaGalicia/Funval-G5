/* let botoncito = document.querySelector("#btn");
let parrafo = document.querySelector("#parrafo");

botoncito.addEventListener("click", function () {
  if (botoncito.classList.contains("bg-blue-700"))
    botoncito.classList.replace("bg-blue-700", "bg-red-800");
  else botoncito.classList.replace("bg-red-800", "bg-blue-700");
  parrafo.textContent = "funval siempre los mejores";
}); */

let botoncito = document.querySelector("#btn");
let parrafo = document.querySelector("#parrafo");
let imagen = document.querySelector("#img");
let atras = document.querySelector("#body");

botoncito.addEventListener("click", function () {
  if (botoncito.classList.contains("bg-pink-100")) {
    botoncito.classList.replace("bg-pink-100", "bg-blue-900");
    botoncito.classList.replace("text-black", "text-white");
    botoncito.textContent = "Noche";
    atras.classList.replace("bg-amber-200", "bg-gray-700");
    parrafo.textContent = "de noche soy otra";
    parrafo.classList.replace("text-black", "text-white");
    imagen.classList.replace(
      "bg-[url('https://upload.wikimedia.org/wikipedia/en/d/d0/Fiona_standing_human.png')]",
      "bg-[url('https://i.pinimg.com/736x/17/11/42/171142be15ad76710183193d68084a3b.jpg')]"
    );
  } else {
    botoncito.classList.replace("bg-blue-900", "bg-pink-100");
    botoncito.classList.replace("text-white", "text-black");
    botoncito.textContent = "Dia";
    atras.classList.replace("bg-gray-700", "bg-amber-200");
    parrafo.textContent = "de dia soy una";
    parrafo.classList.replace("text-white", "text-black");
    imagen.classList.replace(
      "bg-[url('https://i.pinimg.com/736x/17/11/42/171142be15ad76710183193d68084a3b.jpg')]",
      "bg-[url('https://upload.wikimedia.org/wikipedia/en/d/d0/Fiona_standing_human.png')]"
    );
  }
});
