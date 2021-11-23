// 1
// Começamos a partir de nossa variedade de filmes, que tínhamos o seguinte:
let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "a vida é bela"];
console.log(filmes);
//E nos pediram para passar todos os elementos para letras maiúsculas, o que na época tínhamos feito de forma "manual".
// Vamos movê-lo para uma maneira mais automática usando loops.
function converterMaiusculas(array) {
  array[0] = array[0].toUpperCase();
  array[1] = array[1].toUpperCase();
  array[2] = array[2].toUpperCase();
  array[3] = array[3].toUpperCase();
  array[4] = array[4].toUpperCase();
  return array;
}
converterMaiusculas(filmes);
console.log(filmes);

// 2
// Agora precisamos modificar a função passagemDeElemento() que nos permite adicionar o
// conteúdo de nossa matriz de filme animado à matriz de filme original.
function passagemDeElementos(array1, array2) {
  array1.push(array2.pop().toUpperCase());
  array1.push(array2.pop().toUpperCase());
  array1.push(array2.pop().toUpperCase());
  array1.push(array2.pop().toUpperCase());
  array1.push(array2.pop().toUpperCase());
}
passagemDeElementos(filmes, filmes);
console.log(filmes);

// 3
// A partir deste ponto, se você decidiu trabalhar em um arquivo diferente ao invés de modificar o anterior,
// lembre-se que tivemos um infiltrado dentro de nossos filmes de animação, o qual tivemos que tirar e salvar
// em outra variável antes de fazer a passagem de elementos de um array para outro!
let filmeRemovido = filmes[0];
filmes.splice(0, 1);
console.log(filmes);

// 4
// Finalmente, devemos modificar nossa função comparadora para os filmes como temos feito até agora.
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararClassificacoes(asia, europa) {
  let comparacoesAsiaEuropa = [];
  comparacoesAsiaEuropa[0] = asia[0] === europa[0];
  comparacoesAsiaEuropa[1] = asia[1] === europa[1];
  comparacoesAsiaEuropa[2] = asia[2] === europa[2];
  comparacoesAsiaEuropa[3] = asia[3] === europa[3];
  return console.log(comparacoesAsiaEuropa);
}
compararClassificacoes(asiaScores, euroScores);

//5
// Bônus extra
// Se você chegou aqui, você está indo muito bem! Parabéns!
// Para que você não fique com o desejo ou que você possa continuar praticando se quiser,
// propomos esse outro exercício, tenha em mente esses exercícios podem ser mais difíceis,
// para resolvê-los é importante que você revise o que aprendeu até agora e você também pode procurar
// informações extras no google ou documentações que conhece!

/* 
Um cliente nos pede para fazer um aplicativo que possa determinar os vencedores de um concurso que foi realizado no fim de semana.
Para isso, precisaremos seguir as seguintes instruções e informações para poder desenvolver nosso aplicativo.  
Cada participante tem 5 notas, dos quais suas pontuações individuais serão formadas, os participantes com suas respectivas pontuações são:

Participante A:  5, 8, 4, 9, 5;
Participante B:  8, 7, 8, 6, 8;
Participante C:  7, 5, 10, 8, 3.

O concurso consiste em 2 modalidades de seleção para um vencedor:
Melhor média (a maior pontuação média entre os concorrentes);
Maior e-tip(a maior pontuação entre as 5 notas de cada participante).
Com essas informações, nosso líder de Tecnologia nos pergunta o seguinte:
Determine qual seria a maneira ideal de representar cada participante com suas pontuações.

Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele. //OK

Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem. //OK

Logo nosso líder tecnológico nos pede para criar essas duas funções, geramos uma nova funcionalidade 
chamada competição que receberá os 3 participantes por parâmetros, executará as duas funções criadas 
anteriormente para calcular as médias e pontuações mais altas de cada uma e deve anunciar (mostrar pelo console) o 
vencedor de cada modalidade de pontuação.
 */

//Determine qual seria a maneira ideal de representar cada participante com suas pontuações.
let participanteA = [5, 8, 4, 9, 5];
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];

// 1 Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele. //OK
function pontuacaoMedia(participante) {
  let media = 0;
  for (let i = 0; i < participanteA.length; i++) {
    media += participante[i];
  }
  return media / participanteA.length;
}
console.log(pontuacaoMedia(participanteA));

// 2 Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem. //OK
function pontuacaoMaior(participante) {
  let maiorNota = 0;
  for (let i = 0; i < participante.length; i++) {
    participante[i] > maiorNota ? (maiorNota = participante[i]) : 0;
  }
  return maiorNota;
}
console.log(pontuacaoMaior(participanteC));


// 3 Parte
function competicao(participanteA,participanteB,participanteC){
  //Vencedor por maior média
  const mediaA = pontuacaoMedia(participanteA);
  const mediaB = pontuacaoMedia(participanteB);
  const mediaC = pontuacaoMedia(participanteC);

  if(mediaA > mediaB && mediaA > mediaC){
    console.log("Participante A vencedor por melhor média");
  } else if(mediaB > mediaA && mediaB > mediaC){
    console.log("Participante B vencedor por melhor média");
  } else if(mediaC > mediaA && mediaC > mediaB){
    console.log("Participante A vencedor por melhor média");
  }

  const maiorA = pontuacaoMaior(participanteA); 
  const maiorB = pontuacaoMaior(participanteB);
  const maiorC = pontuacaoMaior(participanteC);

  if(maiorA > maiorB && maiorA > maiorC){
    console.log("Participante A vencedor por melhor e-tip");
  } else if (maiorB > maiorA && maiorB > maiorC){
    console.log("Participante B vencedor por melhor e-tip");
  } else if (maiorC > maiorA && maiorC > maiorB){
    console.log("Participante C vencedor por melhor e-tip");
  }

}

competicao(participanteA,participanteB,participanteC);