function fibonacci(n) {
    if (n === 0) {
        return 0; // caso fibonacci(0) = 0
    } else if (n === 1) {
        return 1; // caso fibonacci(1) = 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let numInt;

do {
    numInt = parseInt(prompt("Digite um número inteiro positivo: "));
} while (numInt <= 0 || !Number.isInteger(numInt));


for (let i = 0; i < numInt; i++) {
    console.log(fibonacci(i));
}
