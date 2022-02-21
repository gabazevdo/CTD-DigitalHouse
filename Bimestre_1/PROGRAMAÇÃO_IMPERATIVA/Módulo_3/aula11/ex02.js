/* 
 Exercício “Praticando com While”
 Objetivo
 Entender a aplicação de loops, em seus diversos contextos
 Micro desafios
 
 
 1. Programa em Javascript que mostra os números ímpares
 Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.
 
 2. Programa em Javascript que mostra os números pares
 Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.
 
 3. Programa em Javascript que mostra os números pares e ímpares 
 Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.
 
 4. Programa em Javascript que calcula a média das notas de uma turma
 Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele.
 Em seguida, através de um laço while, pede ao usuário para que entre com as notas de todos os alunos da sala, um por vez.
 
 Por fim, o programa mostra a média aritmética da turma.
  */

// 1

/* 
let numero = 0
while(numero <= 100){
    numero % 2 === 1 ? console.log(`${numero}`) : " "
    numero++
}

// 2
do{ 
    numero % 2 === 0 ? console.log(`${numero}`) : " "
    numero++
}while(numero <= 100);

// 3

function repeticaoWhile(variavel, condicao) {
  while (variavel <= condicao) {
    console.log(`${variavel}`);
    variavel++;
  }
}
repeticao(1, 10); 


function repeticaoDoWhile(variavel, condicao) {
  do {
    console.log(`${variavel}`);
    variavel++;
  } while (variavel <= condicao);
}
repeticaoDoWhile(1,10)

*/

//4

//Função para gerar um número aleatório
function numeroAleatorio(notaMin, notaMax) {
  return Math.random() * (notaMax - notaMin) + notaMin;
}

//Função para informar a quantidade de alunos
function mediaDaTurma(alunos) {
  //variável de incremento
  let i = 1;
  //variável para armazenar a nota informada pela função numeroAleatorio()
  let nota = 0;
  //variável para armazenar a media da turma
  let media = 0;

  //Console só para mostrar a quanditade de alunos que foi informado
  console.log(`Na turma tem ${alunos} alunos`);

  //Enquando o incremento for menor que a quantidade de aluno ela irá rodar
  while (i <= alunos) {
    //parseint() é para transformar o numero recebido em inteiro, e chamo a função e passo os parametros de notaMin e notaMax e armazeno na variável nota
    console.log(
      `Aluno ${i} - nota ${(nota = parseInt(numeroAleatorio(5, 10)))}`
    );
    //toda vez que fizer uma repetição irá somar o valor da média com a nota que foi sorteada, e no fim tem o total de todas as notas somadas
    media = media + nota;

    //Incremento para rodar o while
    i++;
  }

  //Como já tenho a media por conta das somas feitas no while, agora é só dividir pela quantidade de alunos
  console.log(`
Soma das notas: ${media}
Media final da turma ${media / alunos}`);
}

//chamada da função para informar a quantidade de alunos
mediaDaTurma(10);



