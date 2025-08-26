//OPERADOR TERNARIO (IF ABREVIADO)
//solo funciona ne una sola linea de codigo

/* condicion
     ?si la condicion es verdadera
     :si la condicion es falsa */

/* let nombre = prompt("Escribe tu nombre");
let edad = parseInt(prompt("Escribe tu edad"));
let estaca = prompt("Escribe tu estaca");

if (edad >= 18) {
  if (estaca.toLowerCase() === "miraflores")
    alert("Hola " + nombre + " sea bienvenido al sistema");
  else alert("Hola " + nombre + " esta en la estaca equivocada");
} else alert("Hola " + nombre + " no tienes acceso"); */

/* let contrasena = prompt("Escribe la contraseña").toLowerCase();

contrasena.length < 6
  // ? alert("Contraseña muy corta")
  : contrasena === "123456"
  // ? alert("Esa contraseña no es valida")
  : alert("Contraseña valida"); */


let respuesta=parseInt(prompt(
  "1 Lunes \n 2 Martes \n 3 Miercoles \n 4 Jueves \n 5 Viernes \n6 Sabado \n7 Domingo \n Selecciona una opcion: "
));

switch (respuesta){
  case 1:
  case 2: 
  case 3:
  case 4: 
  case 5: 
      alert("Tienes clase de funval");
      break;
  case 6:
    alert("Tienes dia libre");
    break;
  case 7: 
    alert("Tienes que ir a la iglesia");
    break;
  default: 
    alert("Opcion invalida");
    break;

}
  