## Calculadora

**Prática Integradora**

Objetivo

Vamos programar uma calculadora simples com o conhecimento que adquirimos até agora.
A calculadora terá 4 funções básicas:
Somar
Subtrair
Multiplicar
Dividir
Micro desafios - Etapa I - Primeiro momento

O tech leader da equipe precisa programar uma calculadora básica que execute as quatro operações básicas. Para isso, será necessário:

1. Crie um arquivo somar.js contendo uma função chamada somar, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a soma dos mesmos.

~~~javascript
function somar(num1,num2){
  let soma = 0;

    soma = num1 + num2;

  return soma;
}
~~~

2. Crie um arquivo subtrair.js contendo uma função chamada subtrair, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a subtração dos mesmos.

~~~javascript
function subtrair(num1,num2){
  let subtrair = 0;

    subtrair = num1 - num2;

  return subtrair;
}
~~~

3. Criar um arquivo multiplicar.js contendo uma função chamada multiplicar, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a multiplicação dos mesmos. Importante::
  
    a. Contemplar o cenário onde se um dos dois parâmetros for zero, a função retornará zero.

~~~javascript
function multiplicar(num1,num2){
  let multiplicar = 0;

    multiplicar = num1 * num2;

  return multiplicar;
}
~~~

4. Crie um arquivo dividir.js contendo uma função chamada dividir, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a divisão dos mesmos. Importante:

    b. Considere o cenário em que se um dos dois parâmetros for zero, a função retornará "Não se pode dividir por zero".

~~~javascript
function dividir(num1,num2){
  let dividir = 0;

    if(num1 || num2 == 0){
      console.log("Não é possível dividir por 0")
      }else{
        dividir = num1 / num2;
    }
  return dividir;
}
~~~


Para verificar se tudo está bem até agora, recomendamos que você experimente cada uma das funções e teste seu correto funcionamento.


### Micro desafios - Etapa II - Segundo momento (extra)

Se chegamos tão longe, é porque o tech lead da equipe está bastante satisfeito e, portanto, atribuiu novas tarefas:

1. Criar um arquivo calculadora.js no qual serão necessários os quatro arquivos feitos anteriormente.


2. Executar a função que permite adicionar e a função que permite subtrair, passando como argumentos quaisquer dois números. Mostrar os resultados no console.


3. Executar a função que permite a multiplicação, passando como argumentos quaisquer dois números. Mostrar o resultado no console.


4. Executar a função que permite multiplicar, passando agora como um dos dois argumentos, o número zero. Mostrar o resultado no console.


5. Executar a função que permite a divisão, passando como argumentos quaisquer dois números. Mostrar o resultado no console.


6. Executar a função que permite dividir, passando agora como um dos dois argumentos, o número zero. Mostrar o resultado no console.

Se chegamos até aqui, e tudo está bem, o tech leader da equipe deve estar extremamente satisfeito com nosso trabalho e desempenho. Bom trabalho!

No entanto, nos coloca para pensar…

1. O que teria acontecido se, em vez de gerar um arquivo para cada operação matemática, tivéssemos programado tudo no mesmo arquivo?


2. Por que o melhor caminho é gerar diferentes arquivos e depois requerê-los em um único arquivo?


3. Esta metodologia de trabalho será uma constante a partir de agora?


- - -

# FEITO!

Resultado:

aula-03 [conteúdo aqui](../Praticas_integradoras/aula-03/).