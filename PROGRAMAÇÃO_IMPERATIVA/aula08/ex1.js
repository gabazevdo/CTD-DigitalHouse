/* Exercício: “Meu primeiro if”


Objetivo
Entender como é a sintaxe de uma estrutura condicional.
*/

//Declare uma variável com o nome status. Atribua a ela um valor booleano: (true ou false).

//Em seguida, faça um if que avalie o valor contido nesta variável. Se o valor armazenado for true, imprima a seguinte mensagem no console: O valor é true - verdadeiro. Caso contrário, imprima a mensagem: O valor é false - falso.

let status = false;

if (status) {
  console.log("Ex1 - Variável status é: " + status);
} else {
  console.log("Ex1 - Variável status é " + status);
}

/* Exercício “Igualdade, if e else”


Objetivo
Entender como é a sintaxe de uma função condicional utilizando if/else e sinal de igualdade.
Micro desafio

Vamos brincar com as condições!

Crie uma variável chamada linguagem, que terá uma string atribuída a ela. Em seguida, construa uma condicional if/else para que, se a variável estiver armazenando o valor "javascript", ela deve imprimir no console, o texto: "Estou aprendendo". Contudo, caso a variável esteja armazenando qualquer outra linguagem, imprima "Aprenderei mais tarde".
*/

let linguagem = "Python";

if (linguagem == "Javascript") {
  console.log("Ex2 - Estou aprendendo: " + linguagem);
} else {
  console.log("Ex2 - Irei aprender: " + linguagem);
}


