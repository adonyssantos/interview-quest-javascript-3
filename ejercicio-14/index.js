//EJERCICIO 14 : Haga una función grafArr(arr, num, car) a la cual se le pase un arreglo “arr” de “num” números reales y haga una gráfica usando el carácter “car”. La función debe usar la escala de 10 caracteres para el máximo y 0 carácter para el mínimo valor dentro del arreglo. Si el carácter usado fuese “+”.

let arr = [3, 6, 7, 2, 0, 15, 3];
let arrSize = arr.length;
let charcter = "+";

function newArr() {
  let maxNum = Math.max(...arr);
  let newArr = arr.map(element => {
    x = Math.trunc((element * 10) / maxNum);
    return x;
  });
  return newArr;
}

function printArr(newArr, charcter) {
  let valor;
  for (valor of newArr) {
    for (let i = 0; i < valor; i++) {
      document.write(charcter);
    }
    document.write(" ", valor, "</br>");
  }
}

printArr(newArr(), charcter);
