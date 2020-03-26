//PARTE 2:

let nLatas = parseInt(prompt("Ingrese el numero de latas"));

function elKmeDeLaGana(nLatas) {
  let restantes = 0;
  let niveles = 0;
  let i = 1;
  let j = 1;

  while (nLatas >= i) {
    j = j + 2;
    restantes = nLatas - i;
    i = i + j;
    niveles = niveles + 1;
  }

  let result =
    "Tiene " + niveles + " niveles de lata y sobran " + restantes + " latas.";

  return result;
}

document.write(elKmeDeLaGana(nLatas));