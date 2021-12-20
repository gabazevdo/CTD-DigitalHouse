/* 1) Em um novo arquivo chamado ex3.js, exiba na tela a soma de dois números.

2) Repita o processo anterior, mas utilizando outro operador.

3) Declare e atribua 2 variáveis ​​numéricas independentes. Exiba a soma de ambas na tela.

4) Atribua a soma das duas variáveis ​​anteriores a uma outra variável e exiba-a na tela.

5) Re-atribua à variável anterior "1" +1, e exiba na tela. (O que  aconteceu?)
 
6) Re-atribua "olá" + 23, e exiba na tela. (O que aconteceu?)

7) Crie mensagens concatenadas com valores diferentes.
   
 */

// Exercicio 1
let num1 = 5;
let num2 = 10;

let soma = num1+num2

console.log("Ex1 - Soma: ", soma)

//Exercicio 2
let subtracao = num1 - num2
console.log("Ex2 - Subtração: ", num1-num2)

//Exercício 3
let num3 = 0
let num4 = 0

num3 = 5
num4 = 5

console.log("Ex3 - Soma das variáveis atribuindo valores: ", num3+num4)

//Exercicio 4
let num5 = num3+num4
console.log("Ex4 - Soma das variáveis atribuindo a outra variável ", num5)

//Exercício 5
num5 = "1"
console.log("Ex5 - Concatenação de string ('1' + 1). Resultado : ", num5+1)

//Exercício 6
num5 = "olá "+23
console.log("Ex6 - ", num5)

//Exercício 7
console.log("Ex7 - Variável n1 = " + num1 + ", variável n2 = " + num2 + ", variavel n3 = " + num3 + ", variável n4 = " +num4+ ", por ultimo, variável n5 = "+ num5 )