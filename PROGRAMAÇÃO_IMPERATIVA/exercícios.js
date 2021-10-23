//EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1 Construa um programa, seguindo os seguintes passos:

// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
// g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

//RESPOSTAS:
//a)
let nome
//b)
let idade 
//c)
console.log("----------- EXERCÍCIO 1 -----------")
console.log("Abaixo, informado o tipo da varível:")
console.log(typeof nome)
console.log(typeof idade)
console.log("Foi impresso os tipos das variáveis como undefined porque ainda não foram inseridos valores para elas!")

//d)
/*  Foi impresso os tipos das variáveis como undefined porque ainda não foram inseridos valores para elas
    Logo, quando inserimos um texto ou número, o typeof irá nos mostrar o tipo de dado utilizado na variável
 */

//e)Pedindo informações para o usuário
nome =  prompt("Qual o seu nome?")
idade = Number(prompt("Qual sua idade?"))

console.log(nome) //para imprimir a informação gravada na varíavel
console.log(idade) //para imprimir a informação gravada na varíavel

//f)
console.log("Agora, após receber informações o tipo da variável muda:")
//Foi impresso na tela o tipo das variáveis como string pois foram os dados informados no prompt.
console.log(typeof nome)
console.log(typeof idade)

//g)
console.log("Olá", nome, "você tem", idade, "anos")
console.log("----------- EXERCÍCIO 2 -----------")

// 2 Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. 
// Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos

//Perguntas
console.log("Vamos para algumas perguntas:")
let temCachorro = prompt("Você tem cachorro? escreva SIM ou NÃO")
let temColeira = prompt("Seu Doguineo tem coleira? escreva SIM ou NÃO")
let passeia = prompt("Você passeia com seu Doguineo frequentemente? escreva SIM ou NÃO")
//Retorno com as respostas
console.log("Esse humano tem cachorro?", temCachorro)
console.log("Se esse humano tiver cachorro, comprou uma coleira para ele?", temColeira)
console.log("Esse humano passeia com o doguineo? (se tiver claro!)", passeia )

console.log("----------- EXERCÍCIO 3 -----------")

// // 3 Suponha que temos duas variáveis a e b, cada uma com um valor inicial
// Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 
    //Resolução do problema:
// Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, 
// independente de qual valor essas variáveis assumam inicialmente 
// (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, 
// a lógica do seu programa teria que mudar também).

let a = 10
let b = 25

let c

console.log("O valor de a é", a) //Para mostrar o valor inicial da variável
console.log("O valor de b é", b) //Para mostrar o valor inicial da variável

console.log("Acima, os valores iniciais das variáres, abaixo números trocados")

c = a
a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// DESAFIO
// Essa seção é OPCIONAL e só deve ser feita se você terminou todos os exercícios propostos anteriormente!
// Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
console.log("DESAFIO!")

a = Number(prompt("Insira um número inteiro"))
b = Number(prompt("Insira um número inteiro"))

x = a + b
y = a * b

console.log("O valor", a, "+", b,"=", x)
console.log("O valor", a, "x", b,"=", y)

console.log("Vamos que vamos Johnsons!!!")
console.log("#Labenu")