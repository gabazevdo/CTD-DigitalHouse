// ATIVIDADE DE MESA - AULA 06

/* 
Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.
Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
 */

console.log(
  "-------------- Teste de Operações / Calculadora / Desafio 1--------------"
);

// Adição
const adicionar = (x, y) => {
  return console.log(`
A operação entre ${x} + ${y} é ${x + y}
    `);
};
adicionar(5, 5);

//Subtração
const subtrair = (x, y) => {
  return console.log(`A operação entre ${x} - ${y} é ${x - y}
    `);
};
subtrair(15, 5);

//Multiplicação
const multiplicar = (x, y) => {
  return console.log(`A operação entre ${x} * ${y} é ${x * y}
    `);
};
multiplicar(4, 2);

//Divisão
const dividir = (x, y) => {
  return console.log(`A operação entre ${x} / ${y} é ${x / y}
    `);
};
dividir(10, 2);

/* DESAFIO ===> 
Após passar o Nível I, adicionamos um pouco mais de dificuldade para testarmos nossas funções.
No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
console.log ("-------------- Teste de Operações / Calculadora --------------")
Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.
 */

console.log(
  "-------------- Teste de Operações / Calculadora / Desafio 2--------------"
);

adicionar(50, 5);
subtrair(50, 5);
multiplicar(5, 5);
dividir(8, 2);
dividir(0, 2);

/*  ====> DESAFIO 3
1. Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().

2. Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.


3. Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 

Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.


4. Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).
 */

console.log(
  "-------------- Teste de Operações / Calculadora / Desafio 3--------------\n"
);

//Desafio 1
const quadradoDoNumero = (numero) => {
  return `Desafio 1 - O quadrado do número é: ${numero ** 2}
    `;
};

const multiplicação = (power) => {
  return power;
};

const power = () => {
  return 10;
};

console.log(quadradoDoNumero(multiplicação(power())));

//Desafio 2
const mediaDeTresNumeros = (nota1, nota2, nota3) => {
  return `Desafio 2 - Nota1: ${nota1}, Nota2: ${nota2}, Nota3: ${nota3}. A média é: ${((nota1 + nota2 + nota3) / 3).toFixed(2)} 
    `;
};

const valor1 = () =>{
  return 8
}
const valor2 = () =>{
  return 5
}
const valor3 = () =>{
  return 5
}
console.log(mediaDeTresNumeros(valor1(), valor2(), valor3()));


//Desafio 3
const calculaPorcentagem = (valor, porcentagem) => {
  return console.log(`Desafio 3 - ${porcentagem}% de ${valor} é ${(porcentagem * valor) / 100}
  `);
};
calculaPorcentagem(300, 15);


//Desafio 4
const geradorDePorcentagem = (porcentagem, valor) =>{
  return console.log(`Desafio 4 - ${porcentagem}% de ${valor} é ${(porcentagem/valor) *100 } 
  `)
}
geradorDePorcentagem(2, 200);
