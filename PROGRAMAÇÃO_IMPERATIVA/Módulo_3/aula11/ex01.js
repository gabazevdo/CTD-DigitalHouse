/* 

 Programação Imperativa
Exercício “Praticando com Loops”
Objetivo
Entender a aplicação de loops, em seus diversos contextos
Micro desafios


Repetir como um papagaio
Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.

Contando números ímpares
Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.

Criando a tabuada
Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).
 
*/

// 1
for (let i = 1; i <= 5; i++) {
  console.log(`${i}º Olá mundo`);
}

//2
for (let i = 1; i <= 10; i++) {
  i % 2 === 1 ? console.log(`${i} é impar`) : console.log(`${i} é par`);
}

//3
for (let i = 0; i <= 10; i++) {
  console.log(`
Tabuada do ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}
