
function adicionarCliente(nome) {
    fila.push(nome);
}

function atenderCliente() {
    fila.shift();
}

function exibirFila() {
    for (let i = 0; i < fila.length; i++) {
      console.log(`${i + 1}° - ${fila[i]}`);
    }
  }

let fila = [];
let opcao;

do {
  exibirFila()
  opcao = parseInt(prompt("Escolha uma opção: \n1 - Novo Cliente\n2 - Atender Cliente\n3 - Sair"));

  switch (opcao) {
    case 1:
      let nome = prompt("Digite o nome do cliente:");
      adicionarCliente(nome);
      break;
    case 2:
      atenderCliente();
      break;
    case 3:
      console.log("Saiu do programa");
      break;
    default:
      console.log("Opção inválida, tente de novo");
  }
} while (opcao !== 3);