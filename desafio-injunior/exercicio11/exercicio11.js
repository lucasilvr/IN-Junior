let array = [];
let n = parseInt(prompt("Quantos números você quer inserir no array?: "));

for (let i = 1; i <= n; i++) {
  let num = parseInt(prompt(`Digite o ${i} número: `));
  array.push(num);
}

function contar(array) {
  let contagem = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      contagem++;
    }
  }

  return contagem;
}

let result = contar(array);
console.log(`Quantidade de números em ordem crescente: ${result}`);
