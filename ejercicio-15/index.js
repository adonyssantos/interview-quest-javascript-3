//EJERCICIO #15 : Escriba un programa al cual se le digiten diez valores y al final imprima por pantalla la suma de los valores, las sumas de los cuadrados, el promedio, el máximo y el mínimo.

/*let valors = [
  parseFloat(prompt("Ingrese el primer valor")),
  parseFloat(prompt("Ingrese el segundo valor")),
  parseFloat(prompt("Ingrese el tercer valor")),
  parseFloat(prompt("Ingrese el cuarto valor")),
  parseFloat(prompt("Ingrese el quinto valor")),
  parseFloat(prompt("Ingrese el sexto valor")),
  parseFloat(prompt("Ingrese el septimo valor")),
  parseFloat(prompt("Ingrese el octavo valor")),
  parseFloat(prompt("Ingrese el noveno valor")),
  parseFloat(prompt("Ingrese el decimo valor"))
];*/

let cantidad = parseInt(prompt("¿Que cantidad de valores que desea ingresar?"));
let valors = [];
let number = 0;

while (valors.length < cantidad) {
  number = parseFloat(prompt("Ingrese un número"));
  valors.push(number);
}

let size = valors.length;
let min = Math.min(...valors);
let max = Math.max(...valors);
let sum = valors.reduce((anterior, actual) => (actual += anterior));
let avg = sum / size;
let squareSum = valors.map(element => {
  return element ** 2;
});
squareSum = squareSum.reduce((anterior, actual) => (actual += anterior));

document.write(
  "Los valores ingresados son: ",
  valors,
  "</br>El número mas bajo es: ",
  min,
  "</br> El número mas alto es: ",
  max,
  "</br>La suma de todos los valores ingresados es: ",
  sum,
  "</br> El promedio de los valores ingresados es: ",
  avg,
  "</br> La suma de los cuadrados es: ",
  squareSum
);
