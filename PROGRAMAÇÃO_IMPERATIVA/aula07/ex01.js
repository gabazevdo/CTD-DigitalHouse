/* ==========================
ATRIBUIÇÃO
========================== */

// O operador "=" serve para atribuir o valor 40 a uma variável chamada "idade"

let idade = 40

/* ==========================
ARITMÉTICOS
========================== */

// Nos permitem fazer operações matemáticas

10 + 15 //---> Soma
10 - 15 //---> Subtração
10 * 15 //---> Multiplicação
10 / 15 //---> Divisão
15++    //---> Incremento de um em um: 15 + 1
15--    //---> Decremento de um em um: 15 - 1
15 % 5  //---> Módulo. O resto obtido da divisão de 15 por 5: 0
15 % 2  //---> Módulo. O resto obtido da divisão de 15 por 2: 1

/* ==========================
COMPARAÇÃO SIMPLES
========================== */

let num1 = 10
let num2 = 20
let num3 = "10"

num1+num2 == num1*3 //true a soma de num1+num2 é o mesmo valor 
num1 == num2 // false - os valores são diferentes
num2 == num1 + 10 //true - a soma de num1+10 é igual ao valor de num2
num3 == !num1 // false - a comparação entre valores é true, mas tem o operador de negação faz com que se torne false
num3+10 == num1 // false, pois num3+10 é uma concatenação 1010

/* ==========================
COMPARAÇÃO ESTRITA
========================== */

texto1 = "Ola"
texto2 = "Oi"
texto3 = "Alo"
texto4 = "Io"

texto1 == texto2 // false, ambos são estring mas não tem o mesmo valor
texto3 == texto4 // false, ambos são strings mas não tem o mesmo valor


/* ==========================
OPERADORES RELACIONAIS
========================== */




/* ==========================
LÓGICOS
========================== */

// Permitem combinar valores booleanos e seu resultado ao mesmo tempo, também é um booleano