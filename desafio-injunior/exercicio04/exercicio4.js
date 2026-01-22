let valorReais = parseFloat(prompt("Digite um valor em Reais: "));

let valorEuro = valorReais / 6.10 //taxa do euro
let valorDolar = valorReais /5.70 //taxa do dolar

console.log(`Valor em Reais: R$${valorReais.toFixed(2)}`);
console.log(`Valor em Euro: €${valorEuro.toFixed(2)}`);
console.log(`Valor em Dólar: US$${valorDolar.toFixed(2)}`);
