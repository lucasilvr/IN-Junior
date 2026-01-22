"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario = {
    nome: "João",
    email: "joao@email.com",
    exibirInfo() {
        return `Nome: ${this.nome} - Email: ${this.email}`;
    }
};
console.log(usuario.exibirInfo());
