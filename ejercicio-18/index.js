//EJERCICIO #18 : Haga una función tripoTriang(a, b, c) a la cual se le pase como parámetros las longitudes de los lados y retorne 1, 2 o 3 según el triángulo sea equilátero, isósceles o escaleno.

let a = parseFloat(prompt("Ingrese la longitud del lado A del triangulo"));
let b = parseFloat(prompt("Ingrese la longitud del lado B del triangulo"));
let c = parseFloat(prompt("Ingrese la longitud del lado C del triangulo"));

function tipoTriang(a, b, c) {
  if (a === b && a === c) {
    //Se cumple si todos los lados son iguales
    return " Su triangulo es un Equilatero";
  } else if (a === b || a === c || b === c) {
    //Se cumple si 2 lados son iguales
    return "Su triangulo es un Isoceles";
  } else {
    //Se cumple si todos los lados son diferentes
    return "Su triangulo es un Escaleno";
  }
}

document.write(tipoTriang(a, b, c));
