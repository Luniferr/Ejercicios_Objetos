
//1. Crea un objeto "persona" con propiedades como nombre, edad y género.
let persona = {
  nombre: "Mariana",
  edad: 32,
  género: "femenino",
};

//2. Agrega un método al objeto "persona" que imprima su información en la consola.
persona.imprimirPorConsola = function () {
  console.log(this.nombre);
  console.log(this.edad);
  console.log(this.género);
};

persona.imprimirPorConsola();

//3. Crea un objeto "coche" con propiedades como marca, modelo y año.
let coche = {
  marca: "Nissan",
  modelo: "Cochecito",
  año: 2020,
};

//4. Agrega un método al objeto "coche" que calcule la antigüedad del coche.

coche.antiguedad = function () {
  let añoActual = 2023;
  return añoActual - this.año;
};

console.log("La antiguedad del coche es de: ", coche.antiguedad(), "años.");

//5. Crea un objeto "libro" con propiedades como título, autor y año de publicación.

let libro = {
  título: "Amor y odio",
  autor: "Juanito",
  añoDePublicación: 1850,
};

//6. Agrega un método al objeto "libro" que muestre la información completa del libro.

libro.mostrarInformación = function () {
  console.log(libro);
};
libro.mostrarInformación();

//7. Crea un objeto "cuenta bancaria" con propiedades como saldo y titular de la cuenta.

let cuentaBancaria = {
  titular: "Lunapaz",
  saldo: 20000,
};

//8. Agrega métodos al objeto "cuenta bancaria" para depositar y retirar dinero.

let cuentaBancaria2 = {
  titular: "Lunapaz",
  saldo: 20000,
  depositar: function () {
    console.log("Saldo Actual: ", this.saldo);
    let dineroDepositado = parseFloat(prompt("Cuánto dinero depositará: "));
    this.saldo = this.saldo + dineroDepositado;
    return this.saldo;
  },
  retirar: function () {
    let dineroRetirado = parseFloat(prompt("Cuánto dinero desea retirar: "));
    this.saldo = this.saldo - dineroRetirado;
    return this.saldo;
  },
};

cuentaBancaria2.depositar();
console.log("Saldo actual: ", cuentaBancaria2.saldo);
cuentaBancaria2.retirar();
console.log("Saldo actual: ", cuentaBancaria2.saldo);

//9. Crea un objeto "rectángulo" con propiedades de longitud y ancho.

let rectángulo = {
  longitud: 20,
  ancho: 10,
};

//10. Agrega un método al objeto "rectángulo" que calcule el área del rectángulo.

rectángulo.calcularArea = function () {
  calculo = this.longitud * this.ancho;
  return calculo;
};
rectángulo.calcularArea();

//11. Crea un objeto "círculo" con propiedades de radio.

let circulo = {
  radio: 4,
};

//12. Agrega un método al objeto "círculo" que calcule el área del círculo.
circulo.areaCirculo = function () {
  const pi = 3.14;
  area = pi * this.radio ** 2;
  return area;
};

circulo.areaCirculo();

//13. Crea un objeto "estudiante" con propiedades como nombre, edad y lista de materias.

let estudiante = {
  nombre: "Maria",
  edad: 16,
  listaDeMaterias: ["matemáticas", "lenguaje", "inglés"],
};

//14. Agrega métodos al objeto "estudiante" para agregar y eliminar materias de la lista.

estudiante.agregarMateria = function () {
  console.log("Materias antes de agregar:", estudiante.listaDeMaterias);
  materiaAgregada = this.listaDeMaterias.push(
    prompt("Materia que desea agregar: ")
  );
  console.log("Materias después de agregar: ", estudiante.listaDeMaterias);
  return materiaAgregada;
};

estudiante.agregarMateria();

estudiante.eliminarMateria = function () {
  console.log(this.listaDeMaterias);
  materiaAEliminar = prompt("Materia que desesa eliminar: ");
  materiaEliminada = this.listaDeMaterias.indexOf(materiaAEliminar);
  this.listaDeMaterias.splice(materiaEliminada, 1);
};
estudiante.eliminarMateria();
console.log("Materias después de eliminar una: ", estudiante.listaDeMaterias);

//15. Crea un objeto "tienda en línea" con propiedades como nombre de la tienda y lista de productos.

let tiendaEnLinea = {
  nombre: "Jics",
  listaDeProductos: ["computadores", "teléfonos", "escritorios", "televisores"],
};

//16. Agrega métodos al objeto "tienda en línea" para agregar y eliminar productos.

tiendaEnLinea.agregarProductos = function () {
  console.log("Productos actuales: ", tiendaEnLinea.listaDeProductos);
  productoAAgregar = prompt("Producto que desea agregar: ");
  productoAgregado = tiendaEnLinea.listaDeProductos.push(productoAAgregar);
  return productoAgregado;
};
tiendaEnLinea.agregarProductos();
console.log(tiendaEnLinea.listaDeProductos);

tiendaEnLinea.eliminarProductos = function () {
  productoAEliminar = prompt("Producto que desea eliminar: ");
  productoEliminado = this.listaDeProductos.indexOf(productoAEliminar);
  this.listaDeProductos.splice(productoEliminado, 1);
};
tiendaEnLinea.eliminarProductos();
console.log("Productos actualizados: ", tiendaEnLinea.listaDeProductos);

//18. Agrega métodos al objeto "playlist" para agregar y eliminar canciones.

let playlist = {
  canciones: [],
};

console.log("Lista de canciones: ", playlist.canciones);
playlist.agregarCanciones = function () {
  cancionAAgregar = playlist.canciones.push(prompt("Canción a agregar: "));
  return cancionAAgregar;
};

playlist.agregarCanciones();
console.log("Lista de canciones: ", playlist.canciones);

playlist.eliminarCanciones = function () {
  cancionAEliminar = prompt("Canción a eliminar: ");
  cancionEliminada = playlist.canciones.indexOf(cancionAEliminar);
  playlist.canciones.splice(cancionEliminada, 1);
  return cancionEliminada;
};
playlist.eliminarCanciones();
console.log("Lista actualizada: ", playlist.canciones);

//19. Crea un objeto "calculadora" con métodos para realizar operaciones matemáticas básicas (suma, resta, multiplicación, división).

let calculadora = {
  suma: function (num1, num2) {
    num1 = parseFloat(prompt("Escriba el primer número: "));
    num2 = parseFloat(prompt("Esriba el segundo número: "));
    return num1 + num2;
  },
  resta: function (num1, num2) {
    num1 = parseFloat(prompt("Escriba el primer número: "));
    num2 = parseFloat(prompt("Esriba el segundo número: "));
    return num1 - num2;
  },
  multiplicación: function (num1, num2) {
    num1 = parseFloat(prompt("Escriba el primer número: "));
    num2 = parseFloat(prompt("Esriba el segundo número: "));
    return num1 * num2;
  },

  división: function (num1, num2) {
    num1 = parseFloat(prompt("Escriba el primer número: "));
    num2 = parseFloat(prompt("Esriba el segundo número: "));
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Error: división por cero";
    }
  },
};
console.log("Operación Suma");
console.log("Resultado Suma: ", calculadora.suma());
console.log("Operación Resta");
console.log("Resultado Resta: ", calculadora.resta());
console.log("Operación Multiplicación");
console.log("Resultado Multiplicación: ", calculadora.multiplicación());
console.log("Operación División");
console.log("Resultado División: ", calculadora.división());
console.log("Fin de la Calculadora.");
//20. Crea un objeto "equipo de fútbol" con propiedades como nombre del equipo y lista de jugadores.

let equipoDeFutbol = {
  nombre: "Magallanes",
  listaDeJugadores: ["Mario", "Juan", "Pedro", "Felipe"],
};
