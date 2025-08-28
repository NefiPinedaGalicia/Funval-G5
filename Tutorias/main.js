/* let R = 0.0;
R = parseFloat(prompt("Ingresa el numero"));

let a = R + 5;
let b = a * a;
let c = b / (R / 3);
let d = c ** 3;

console.log(R, " ", a, " ", b, " ", c, " ", d); */
//1() 2**  3/,*,% 4)+,-

//----------Tipos de triangulo---------------

//entrada
// x,y,z

// resolver el problema cuando los lados son iguales

//salida
//cadena string

/* let x=parseInt(prompt("Ingrese el primer valor"));
let y = parseInt(prompt("Ingrese el segundo valor"));
let z = parseInt(prompt("Ingrese el tercer valor"));

if(x===y && y===z){
     console.log('equilatero')
}

else if(x===y || y===z || x===z){
     console.log('isoceles')
}
else{
     console.log('escaleno')
} */

//------Llamadas telefonicas------------
//entrada
// clave
// minutos
//
//resolver el problema
// calcular el precio de acuerdo a la clave
// y los minutos
//salida

let clave = parseInt(prompt("Ingrese clase"));
let minutos = parseInt(prompt("Ingresa los minutos"));
let total = 0.0;
switch (clave) {
  case 12:
    total = 2 * minutos;
    console.log(total);
    break;
  case 15:
    total = 2.2 * minutos;
    console.log(total);
    break;
  case 18:
    total = 4.5 * minutos;
    console.log(total);
    break;
  case 19:
    total = 3.5 * minutos;
    console.log(total);
    break;
  case 23:
    total = 6 * minutos;
    console.log(total);
    break;
  case 25:
    total = 6 * minutos;
    console.log(total);
    break;
  case 29:
    console.log(5 * minutos);
    break;
  default:
    alert("Escribiste mal la opcion");
    break;
}



