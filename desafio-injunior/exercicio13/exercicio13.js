let time = []

function adicionarJogador(nome, idade, posicao, pontuacao) {
  let jogador = { nome, idade, posicao, pontuacao }
  time.push(jogador)
}

//essa parte eu não entendi muito bem, achei muito complexa e pesquisei um método pronto
function buscarPorPosicao(posicao) {
  let jogadoresNaPosicao = time.filter(jogador => jogador.posicao.toLowerCase() === posicao.toLowerCase())

  if (jogadoresNaPosicao.length > 0) {
    console.log(`Jogadores na posição ${posicao}`)
    jogadoresNaPosicao.forEach(jogador => {
      console.log(`${jogador.nome}, Idade: ${jogador.idade}, Pontuação: ${jogador.pontuacao}`)
    })
  } else {
    console.log(`Não tem jogador na posição ${posicao}`)
  }
}

function listarTime() {
  console.log("Time: ")
  time.forEach(jogador => {
    console.log(`${jogador.nome}, Idade: ${jogador.idade}, Posição: ${jogador.posicao}, Pontuação: ${jogador.pontuacao}`)
  })
}

function calcularPontuacaoMedia() {
  let totalPontuacao = time.reduce((total, jogador) => total + jogador.pontuacao, 0)
  let media = totalPontuacao / time.length
  console.log(`Média do time: ${media.toFixed(2)}`)
}

let opcao
do {
    opcao = parseInt(prompt(`Escolha uma opção:\n1 - Adicionar jogador\n2 - Buscar por posição\n3 - Listar time\n4 - Calcular média de pontos\n5 - Sair`))

    switch (opcao) {
      case 1:
        let nome = prompt("Nome do jogador: ")
        let idade = parseInt(prompt("Idade do jogador: "))
        let posicaoJogador = prompt("Posição do jogado: ")
        let pontuacao = parseInt(prompt("Pontuação do jogador: "))

        adicionarJogador(nome, idade, posicaoJogador, pontuacao)
        break

      case 2:
        let posicaoBusca = prompt("Qual posição você quer buscar?: ")
        buscarPorPosicao(posicaoBusca)
        break

      case 3:
        listarTime()
        break

      case 4:
        calcularPontuacaoMedia()
        break

      case 5:
        console.log("Saiu do programa")
        break

      default:
        console.log("Opção inválida, tenta de novo")
    }
  } while (opcao !== 5)
