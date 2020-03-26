//EJERCICIO #19 : Los números de Pitágoras pueden ser descritos de la siguiente manera: a²  + b² = c², donde a, b y c son enteros, b y c son consecutivos, a y b son catetos y c es la hipotenusa. Escriba un programa para encontrar 5 ternas de números de Pitágoras.

let a = 1;
let b = 1;
let c = 2;

function ternas(a, b) {
  let i = b;
  let a2;
  let b2;
  let c2;

  for (i = b; i <= 5; i++) {
    b = i;
    a2 = a * (a + 2 * b);
    b2 = 2 * b * (a + b);
    c2 = a * (a + b) + b * (a + 2 * b);

    if (c2 ** 2 === a2 ** 2 + b2 ** 2) {
      document.write(i + ") " + a2 + ", " + b2 + ", " + c2 + "</br>");
    }
  }
}

ternas(a, b, c);
