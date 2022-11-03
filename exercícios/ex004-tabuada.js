/*
Imprimir as tabuadas de 1 a 10:
*/

function Tabuada(n) {
  for (var i = 1; i <= 10; i++) {
    var linha = n + ' * ' + i + ' = ' + n * i;
    console.log(linha);
  }
}

for (var i = 1; i <= 10; i++) {
  Tabuada(i);
  console.log('');
}
