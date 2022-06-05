// 1. Obter qual a jogada do jogador

// 2. Gerar aleatoriamente entre 1 e 3

// 3. Calcular os resultados

const joKenPo = ['','Pedra', 'Papel', 'Tesoura']
let escolhaScript
let escolhaUsuario

let pontuacao = { usuario: 0, robozin: 0}

function novoJogo() {
  escolhaJogadores()
  opcaoJogada()
  jogarNovamente()
}

function escolhaJogadores() {
  escolhaUsuario = Number(
    prompt(`
            VAMOS JOGAR UM JOGO?

            Escolha sua opção
            1 - Pedra 
            2 - Papel 
            3 - Tesoura
`)
  )
  escolhaScript = Math.floor(Math.random() * 3)+1
}

function opcaoJogada() {
  if (escolhaUsuario <= joKenPo.length -1) {

    if (escolhaUsuario == 1 && escolhaScript == 2 || escolhaUsuario == 2 && escolhaScript == 3 || escolhaUsuario == 3 && escolhaScript == 1) {
      pontuacao.robozin++
      alert(`PERDEU

      Você ${joKenPo[escolhaUsuario]}
      Robo ${joKenPo[escolhaScript]}

      Pontuação:
      Você: ${pontuacao.usuario}
      Robozin: ${pontuacao.robozin}
      `)
    } else if (joKenPo[escolhaScript] == joKenPo[escolhaUsuario]) {
      alert(`EMPATE

      Você ${joKenPo[escolhaUsuario]}
      Robo ${joKenPo[escolhaScript]}

      Pontuação:
      Você: ${pontuacao.usuario}
      Robozin: ${pontuacao.robozin}
      `)
    } else {
      pontuacao.usuario++
      alert(`GANHOU

      Você ${joKenPo[escolhaUsuario]}
      Robo ${joKenPo[escolhaScript]}

      Pontuação:
      Você: ${pontuacao.usuario}
      Robozin: ${pontuacao.robozin}
      `)
    }
  } else {
    alert('Opção inválida, tente novamente')
    novoJogo()
  }
}

function jogarNovamente() {
  let deNovo = confirm('Deseja tentar novamente?')
  //if ternário
  deNovo ? novoJogo(): '' 
}

novoJogo()