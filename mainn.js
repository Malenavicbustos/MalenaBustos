function solicitarNombre() {
  let nombre = prompt("Ingrese su nombre para iniciar");
  alert("Hola " + nombre + ", un gusto saludarte, bienvenid@ a nuestra tienda");
}

class Productos {
  constructor (nombre, precio, stock){
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
  }
}

let perfumes = [
  {nombre: 'Calvin Klein one', precio: 3700, stock: 2},
  {nombre: 'Summer Essencials', precio: 10700, stock: 5},
  {nombre: 'Clinique', precio: 12000, stock: 7},
  {nombre: 'Rose', precio: 3000, stock: 8},
]

let cosmetica = [
{nombre: 'mascara de pestañas', precio: 12000, stock: 9},
{nombre: 'sombras color pastel', precio: 2500, stock: 7},
{nombre: 'base liquida', precio: 1300, stock: 5},
{nombre: 'labial', precio: 2500, stock: 25}

]

let skinCare =[
{nombre:'crema hidratanta facial', precio: 300, stock: 0},
{nombre:'desmaquillante 3 en 1', precio: 5500, stock: 93},
{nombre:'esponjas', precio: 950, stock: 10},
{nombre:'locion y tonico', precio: 3000, stock: 0}
]

let solares = [
{nombre:'autobronceante', precio: 3500, stock: 12},
{nombre:'protector solar', precio: 3000, stock: 2},
{nombre:'hidratante post solar', precio: 2000, stock: 20},
]


function crearProductos(arrayProductos) {
let productos = [];

arrayProductos.forEach(item => {
  let producto = new Productos(item.nombre, item.precio, item.stock);
  productos.push(producto);
});

return productos;
}

let catElegida;
let ProductoSeleccionado;

function ingresarOpcion() {
let catElegida = false
opcion = prompt("Ingrese el numero de la categoria que desea buscar \n 1. Perfumes \n 2. Cosmetica \n 3. Skin Care \n 4. Solares");
if (opcion === "1") {
  alert("Elegiste la categoria Perfumes");
  catElegida = perfumes;
} else if (opcion === "2") {
  alert("Elegiste la categoria cosmeticos")
  catElegida = cosmetica;
} else if (opcion === "3") {
  alert("Elegiste la categoria Skincare");
  catElegida = skinCare;
} else if (opcion === "4") {
  alert ("Elegiste la categoria solares")
  catElegida = solares
}
if (catElegida) {
  let ProductoSeleccionado = crearProductos(catElegida)
  for (let i=0; i < ProductoSeleccionado.length; i++){
    console.log(ProductoSeleccionado[i].nombre)
  }
}
}

let carrito = []


solicitarNombre();
crearProductos();
ingresarOpcion();


