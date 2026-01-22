function verificarIdades(anoAtual, anosNascimento) {
    let resultado = [];
    for (let i = 0; i < anosNascimento.length; i++) {
        let idade = anoAtual - anosNascimento[i];
        if (idade >= 18) {
            resultado.push("maior");
            console.log(`Pessoa ${i + 1}: Maior de idade`);
        } else {
            resultado.push("menor");
            console.log(`Pessoa ${i + 1}: Menor de idade`);
        }
    }
    return resultado;
}

let anoAtual = parseInt(prompt("Digite o ano atual: "));
let quantidade = parseInt(prompt("Quantas pessoas você quer verificar?: "));
let anosNascimento = [];

for (let i = 0; i < quantidade; i++) {
    let anoNascimento = parseInt(prompt(`Digite o ano de nascimento da pessoa ${i + 1}:`));
    anosNascimento.push(anoNascimento);
}

let resultado = verificarIdades(anoAtual, anosNascimento);
console.log(resultado);
