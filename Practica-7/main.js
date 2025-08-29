const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Silla Gamer", precio: 450 },
  { nombre: "Audífonos", precio: 80 },
  { nombre: "Webcam", precio: 60 },
  { nombre: "USB 128GB", precio: 30 },
  { nombre: "Impresora", precio: 200 },
  { nombre: "Tablet", precio: 500 },
];

productos.forEach((element) => {
  console.log(element.nombre, element.precio);
});

let productosDisponibles = productos.map((producto) => producto.nombre);

console.log(productosDisponibles.includes("Laptop"));
console.log(productosDisponibles.includes("Monitor"));
console.log(productosDisponibles.includes("CPU"));
console.log(productosDisponibles.includes("Celular"));
console.log(productosDisponibles.includes("Memoria Ram"));

console.log(
  productos.map((producto) => ({
    nombre: producto.nombre,
    precio: producto.precio * 0.9,
  }))
);

let productosBaratos = productos.filter((producto) => producto.precio < 100);

console.log(productosBaratos);

let primerosDos = productos.slice(0, 2);

console.log(primerosDos);

let productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
//cra copia si no quiero perder la primera lista
console.log(productosOrdenados);
console.log(productos);

let productosInvertidos = [...productos].reverse();
//tambien modifica el array original
console.log(productosInvertidos);
console.log(productos);
