/* Crie uma função que converta polegadas em centímetros. 
Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
Crie uma função que receba uma string e a converta em um URL.
ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
PS: considere que você trabalhe 160 horas no mês.
Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
*IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura. */

// Função 1
function conversaoPolegadaemCentimentros(centimentros) {
  let polegadas = 2.54;
  let conversao = centimentros * polegadas;
  return console.log(`ex1. ${centimentros}cm é equivalente a ${conversao}pol.`);
}
conversaoPolegadaemCentimentros(10);

//Função 2
function conversaoStringUrl(string) {
  return console.log(`ex2. www.${string}.com.br`);
}
conversaoStringUrl("teste");

//Função 3
function stringComExclamacao(string) {
  return console.log(`ex3. ${string}!`);
}
stringComExclamacao("Frase com o caracter de exclamação");

//Função 4
function idadeDoDoguineo(idade){
    return console.log(`ex4. A idade é ${idade}, em anos doguineos ele tem ${idade*7} anos.`)
}
idadeDoDoguineo(7)

//Função 5
function horaTrabalhada(salario){
    let horas = 160
    return console.log(`ex5. O salário é R$ ${salario}. Sua hora é R$ ${(salario/horas).toFixed(2)}.`)
}
horaTrabalhada(1192.40)

//Função 6
function indiceMassa(altura, peso){
    let imc = (peso/(altura**2)).toFixed(2)
    return console.log(`ex6. Sua altura é ${altura}mt, seu peso é ${peso}kg. O IMC é de ${imc}.`)
}
indiceMassa(1.85, 80)

/* 
Se chegarmos a este ponto, ficaremos muito satisfeitos. 
Agora, deixamos alguns exercícios com uma dificuldade extra: você terá que buscar alguns conceitos extras para poder resolver estes exercícios. É uma prática que os programadores fazem todos os dias. Como sempre dizemos, uma parte importante do aprendizado em programação, é ignorar a complexidade e ir estritamente ao que precisamos, sabemos que não é uma prática fácil de fazer, mas com o tempo se tornará mais fácil e divertida.
Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
Investigue o que o método de .toUpperCase() faz.
Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
Dica: Isso te ajudará a entender o que o operador typeof faz.
Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.
 */

function minusculaMaiuscula(frase){
    return console.log(`a frase é ${frase}. Em maísculo é ${(frase).toUpperCase()}`)
}

minusculaMaiuscula("Teste teste")