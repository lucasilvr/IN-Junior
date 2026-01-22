type StatusRequisicao = "sucesso" | "erro" | "carregando";

function mostrarMensagemStatus(mensagem: StatusRequisicao) {
  if (mensagem === "carregando") {
    return "Aguarde... carregando dados.";
  } else if (mensagem === "sucesso") {
    return "Dados carregados.";
  } else if (mensagem === "erro") {
    return "Ocorreu um erro.";
  }
}

const mensagem = mostrarMensagemStatus("carregando");
console.log(mensagem);
