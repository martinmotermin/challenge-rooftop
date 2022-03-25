function ordenarMatriz(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;
  let valoresDiagonal = [];
  let matrizOrdenada = new Array(filas);
  let diagonalPositivos = [];
  let diagonalNegativos = [];
  let diagonalNeutros = [];

  for (let i = 0; i < filas; i++) {
    valoresDiagonal.push(matriz[i][i]);
    matrizOrdenada[i] = new Array(matriz[0].length);

    for (let j = 0; j < columnas; j++) {
      matrizOrdenada[i][j] = "**";
    }
  }

  valoresDiagonal.forEach((valor) => {
    if (valor > 0) {
      diagonalPositivos.push(valor);
    }
    if (valor === 0) {
      diagonalNeutros.push(valor);
    }
    if (valor < 0) {
      diagonalNegativos.push(valor);
    }
  });

  function compare(a, b) {
    return a - b;
  }

  const invDiagonalNegativos = diagonalNegativos.sort(compare);
  const ordDiagonalPositivos = diagonalPositivos.sort();

  console.log(diagonalNegativos, invDiagonalNegativos);

  valoresDiagonal = [
    ...ordDiagonalPositivos,
    ...diagonalNeutros,
    ...invDiagonalNegativos,
  ];

  for (let k = 0; k < filas; k++) {
    matrizOrdenada[k][k] = valoresDiagonal[k];
  }
  const matrizConsola = matrizOrdenada.map((d) => d.join(" ")).join("\n");
  console.log(matrizConsola);
}
