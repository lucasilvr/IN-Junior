"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apresentarPessoa(pessoa) {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`;
}
const Lucas = {
    nome: "Lucas",
    idade: 40,
    genero: "masculino",
};
console.log(apresentarPessoa(Lucas));
