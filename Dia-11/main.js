// tipado dinamico  las variables pueden cambiar en la ejecucion del programa
// tipado debil a las variables no hay que tener que ponerle el tipo de dato que es

//let apellidoPaterno = "Rodriguez";
//let edad = 12;
//let esMiembroSud = true;
//let esSalvo; //undefined
//let dinerito = null; //null o sin valor
//let simbolo = Symbol("nefi"); //tipo simbolo avanzado
//let numGrande = 12312312312312312312313n; //big int (minimo 64 bits depende del sistema operativo)

/* let var1 = "Hola";
let var2 = 2;
let var3 = true;
let var4;
let var5 = null;
let var6 = Symbol("3");
let var7 = 12341234123412341234n;

var1 = 2;
var2 = false;
var3 = var4;
var4 = null;
var5 = Symbol("2");
var6 = 12341234123412341234n;
var7 = "Hola";

console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);
console.log(typeof var5);
console.log(typeof var6);
console.log(typeof var7);

var1 = true;
var2 = var3;
var3 = null;
var4 = Symbol("4");
var5 = 1234123412341234123412341234n;
var6 = "Hola";
var7 = 2;

console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);
console.log(typeof var5);
console.log(typeof var6);
console.log(typeof var7); */

let a = 10;
let b = "10";

console.log(a == b);
console.log(a === b);

let edad = 18;
console.log(edad >= 18);
console.log(edad < 18);

let x = 15;
let y = 20;

console.log(x > y);
console.log(x <= y);

let num = parseInt(prompt("Ingresa un numero"));
console.log(num > 100);
console.log(num === 50);

edad = 25;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) console.log("Puede conducir");
else console.log("No puede conducir");

let dia = "domingo";
let clima = "soleado";

if (dia === "domingo" || clima === "soleado") console.log("Puedes salir");
else console.log("No puedes salir");

let llueve = false;

console.log(!llueve);

edad = parseInt(prompt("Ingresa tu edad"));
if (edad < 13) console.log("Eres un niño");
else if (edad >= 13 && edad < 18) console.log("Eres un adolecente");
else console.log("Eres un adulto");
