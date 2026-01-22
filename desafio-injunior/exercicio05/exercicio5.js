let numInt;

do {
    numInt = parseInt(prompt("Digite um número inteiro: "));
} while (numInt < 0 || !Number.isInteger(numInt)); 

if (numInt % 3 === 0 && numInt % 5 === 0) {
    console.log("fizzbuzz");
} else if (numInt % 3 === 0) {
    console.log("fizz");
} else if (numInt % 5 === 0) {
    console.log("buzz");
} else {
    console.log("nada");
}
