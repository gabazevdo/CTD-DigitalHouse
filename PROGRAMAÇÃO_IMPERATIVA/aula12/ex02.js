/* É necessário determinar o vencedor de um concurso de Stand-Up composto por 3
apresentações por participante.
O público, no máximo 100 pessoas, votou quem eles acham que era melhor no final
de cada etapa. Por exemplo, Alice sobe, se apresenta e desce; Bob sobe, aparece e
desce.
Após a apresentação, o público vota indicando quem eles acham que ganhou aquela
rodada. Após isto, continua a próxima rodada assim como a primeira. E finalmente a
terceira.
Este problema exemplificado em uma planilha ficaria da seguinte forma: 

Se a[i] > b[i], então Alice recebe 1 ponto.
	Se a[i] < b[i], então Bob recebe 1 ponto.
	Se a[i] = b[i], nenhuma pessoa recebe um ponto.


*/

const alice = [23, 82, 46];

const bob = [45, 8, 32];

function encontrarGanhador(a, b) {
  let pontosPrimeiroParticipante = 0;
  let pontosSegundoParticipante = 0;
  let ganhador = 0;

  let maior = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      pontosPrimeiroParticipante += 1;
    } else if (a[i] < b[i]) {
      pontosSegundoParticipante += 1;
    }
  }
  if (pontosPrimeiroParticipante > pontosSegundoParticipante) {
    ganhador = "Alice";
    return [ganhador, pontosPrimeiroParticipante];
  } else {
    ganhador = "Bob";
    return [ganhador, pontosSegundoParticipante];
  }
}

console.log("O ganhador é: " + encontrarGanhador(alice, bob));

// Arianne, Kristy Godoy, Gabriel Azevedo, Ederson Alves e Mauro Brito
