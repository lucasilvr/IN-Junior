"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarMensagemStatus(mensagem) {
    if (mensagem === "carregando") {
        return "Aguarde... carregando dados.";
    }
    else if (mensagem === "sucesso") {
        return "Dados carregados.";
    }
    else if (mensagem === "erro") {
        return "Ocorreu um erro.";
    }
}
const mensagem = mostrarMensagemStatus("carregando");
console.log(mensagem);
