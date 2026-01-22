"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function resumirLivro(livro) {
    return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`;
}
const teste = {
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: 1949,
};
console.log(resumirLivro(teste));
