function encontrarElementoUnico(numInt) {
    let resultado = 0;
    for (let i = 0; i < numInt.length; i++) {
        resultado ^= numInt[i];  // isso aqui aplica o XOR em cada número do array, preciso estudar mais sobre isso mas funcionou.
    } //XOR é operador lógico que compara dois valores binários e retorna 1 se e somente se um dos bits for 1, mas não ambos.
    console.log(resultado); 
}

let numInt = [1, 1, 2, 2, 3, 3, 4, 4, 5];
encontrarElementoUnico(numInt);
