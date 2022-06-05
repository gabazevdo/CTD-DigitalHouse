# A origem do Javascript

JavaScript (ou "JS") é uma linguagem de programação utilizada principalmente para scripts dinâmicos do lado do cliente em páginas web, podendo também ser utilizada no lado do servidor, usando um interpretador (em inglês: runtime) como o Node.js.

O JavaScript não deve ser confundido com a linguagem de programação Java. Apesar de "Java" e "JavaScript" serem marcas comerciais (ou marcas registradas) da Oracle nos EUA e em outros países, essas duas linguagens de programação são significativamente diferentes em sintaxe, semântica e casos de uso.

O JavaScript é utilizado principalmente no navegador, permitindo que os desenvolvedores manipulem o conteúdo de uma página web por meio do DOM, manipulem dados com o AJAX e o IndexedDB, desenhem gráficos com o canvas (en-US), interajam com o dispositivo que está executando o navegador através de várias APIs e muito mais. JavaScript é uma das linguagens mais utilizadas no mundo, devido ao recente crescimento e melhoria de desempenho das APIs disponíveis nos navegadores.

[MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Glossary/JavaScript)

## Cheatsheet JavaScript
### Variáveis


### var

Declara uma variável global ou no escopo de uma função. 
~~~javascript
var varGlobal= 'valor inicial'; 
function name() { 
// escopo da função
console.log(varGlobal); // -> 'valor inicial' 
if (condicao) { 
// escopo do bloco
var varFuncao= 'Estou declarada em uma função'; 
console.log(varGlobal); // -> 'valor inicial' 
varFuncao = 'Contínuo dentro da Função'; 
} 
console.log(varFuncao); // -> 'Eu continuo dentro da Função' } 
console.log(varGlobal); // -> 'outro valor' 
console.log(varFuncao); // -> erro: não está declarada 
~~~

### let 

Declara uma variável dentro do escopo de um bloco. 
~~~javascript
let varGlobal = 'valor inicial'; 
function name() { 
// escopo da função
console.log(varGlobal); // -> 'valor inicial' 
if (condicao) {
// escopo de um bloco
let varFuncao = 'Estou declarada em uma função?'; console.log(varGlobal); // -> 'valor inicial'
varGlobal = 'outro valor'; 
} 
console.log(varFuncao); // -> error não está declarada 
// let faz que a variável esteja disponível somente dentro do if }
console.log(varGlobal); // -> 'outro Valor' 
console.log(varFuncao); // -> error não está declarada 
const 
Declara uma constante no escopo de um bloco. 
const varGlobal = 'valor inicial'; 
function name() { 
// escopo da função 
console.log(varGlobal); // -> 'valor inicial' 
if (condicao) { 
// escopo do bloco
const varFuncao = 'Estou declarada em uma função?'; 
console.log(varGlobal); // -> 'valor inicial' 
varGlobal = 'otro Valor'; // erro a const não pode ser modificada } 
console.log(varFuncao); // -> erro no está declarada 
// const se comporta igual ao let em termos de alcance 
} 
console.log(varGlobal); // -> 'valor inicial' 
console.log(varFuncao); // -> error no está declarada 
~~~

### Tipos 
~~~javascript
let myVariable = 'Hello wold'; // é uma string 
let myVariable1 = 22; // é number 
let myVariable2 = false; // é boolean
let myVariable3; // É undefined
let myVariable4 = { nome: 'meu nome’' } ; // É um objeto
let myVariable5 = null; // É um objeto (É um tipo de objeto especial)
let myVariable6 = function() { let doSomething; }; // é uma function 
// Você pode verificar esses tipos usando typeOf typeOf myVariable // -> number
~~~



### Estruturas de controle

#### If 
Permite executar um bloco somente se uma determinada condição for atendida.
~~~javascript
if (condicao) { 
// se verdadeiro, executa este bloco de código 
} 
If... else 
Permite avaliar uma condição e executar um bloco de código ou outro. 

if (condition) { 
//se verdadeiro, executa este bloco de código 
} else { 
//se falso, executa este bloco de código 
} 
~~~

### Switch 

Permite executar diferentes ações dependendo do valor de uma variável.

~~~javascript
switch (variavel) { 
case 1: 
// code if variavel == 1; 
break; 
case 2: 
// code if variavel == 2; 
break; 
default: 
// Executar se nenhuma condição anterior for encontrada
break; 
} 
~~~

### Laços 

#### For 

Permite que você execute repetidamente um bloco de código.
~~~javascript
let n = 4; 
for(var i = 0; i < n; i++) { 
// código para executar n vezes (4) 
} 
~~~

**for( inicial ; condição ; final ) { }**

**inicial**: Este código é executado no início único do loop, normalmente uma variável é declarada conforme mostrado no exemplo.

**condição**: Sempre que o bloco de código fechado termina, esta condição é verificada, e se for verdadeira, o loop termina e o código abaixo continua.

**final**: Uma ação a ser executada a cada vez que o bloco a ser repetido é finalizado, a variável usada na condição é comumente modificada.

#### While 

Seu comportamento é semelhante a um loop 'for', mas o bloco continuará executando indefinidamente enquanto a condição for verdadeira. 
~~~javascript
let n = 1; 
while (n < 3) { 
// código que será executado 
} 
~~~

**while( condicao ) { }**

**condição**: condição a ser avaliada antes de cada execução do bloco, se nunca se tornar falsa, o loop permanecerá em execução indefinidamente.

#### Do... while 
Permite que você execute um bloco de código, desde que uma condição seja verdadeira. Ao contrário de while, a condição é avaliada no final de cada execução, que resulta na execução do bloco fechado pelo menos uma vez.
~~~javascript
do { 
// código que será executado
} while (n < 3);
~~~

## DevTools - Console

### O que é e para que serve o console?

O console é uma ferramenta que os desenvolvedores possuem no navegador para tomar decisões sobre nosso projeto ao mesmo tempo em que ele é interpretado pelo Chrome.

### Então, o que podemos fazer com isso?

Quando algo não funciona da maneira que desejamos, podemos gastar muito tempo tentando descobrir qual é o problema e corrigi-lo.

É por isso que o console nos ajuda a agilizar esse processo, pois nos informa o que acontece quando executamos uma tarefa ou solicitação ao servidor.

Pode ser que ele retorne os dados que procurávamos, um erro ou um aviso (warning). Esse processo é chamado de depuração do código ou debugging.

Se executarmos esses exemplos no console, qual resultado ele retornaria para mim em cada caso?

~~~javascript
console.log(2+3) // 5

console.log(2+'3') //23

console.log(2"3") // ERROR. Não reconhece um argumento válido: Uncaught SyntaxError: missing ) after argument list
~~~

## Tipos de erros

Existem vários tipos de erros que são exibidos em vermelho no console. Os mais comuns que você conhecerá por enquanto são:

- SintaxError
    - Representa um erro de sintaxe no idioma representado em JavaScript.


- TypeError
    - Representa um erro que ocorre quando uma variável ou parâmetro não é de um tipo válido, ou seja, indefinido.


## Elementos e estilos

Na guia Elementos, veremos o código HTML e em Estilos, nosso CSS. Se clicarmos na seta indicada na imagem e depois colocarmos o mouse sobre os elementos da tela, perceberemos facilmente onde eles estão no código para poder manipulá-los e apreciar a mudança sem ter que ir ao editor de texto e salve.

## Responsivo
Muitas vezes precisamos adaptar nosso site para poder visualizá-los corretamente em diferentes dispositivos. Na parte superior do inspetor há um ícone de dispositivo, e clicando podemos determinar a resolução da tela ou escolher diretamente um dispositivo.

## Aplicação

Com esta aba, podemos executar tarefas referentes aos dados que são salvos pelo cliente em nosso site por um determinado período de tempo. Por exemplo, excluir da memória os dados inseridos no login de um usuário.

## Lighthouse

Lighthouse é uma ferramenta que gera relatórios para verificar recursos que a web deve ter para ser considerada ótima. Alguns deles são desempenho, acessibilidade e SEO.


# PRIMEIROS PASSOS EM JAVASCRIPT 

**console.log( )**

Agora que conhecemos o console como parte das ferramentas que devemos usar durante o desenvolvimento, vamos colocar algumas linhas de código em prática. 

O clássico seria mostrar uma mensagem por console e para isso, devemos implementar o método log( ) do objeto Console. Então, como seria?
~~~javascript
console.log("Esta é uma mensagem por console"); 
~~~
Podemos tentar executar a mesma instrução com mensagens diferentes, mesmo com tipos de dados diferentes, e devemos ter o mesmo resultado. Por exemplo: 
~~~javascript
console.log("Olá, sou outro texto"); 
console.log(25); 
console.log(true); 
~~~

🚨 É sempre importante colocar seu código em prática, experimentar diferentes possibilidades e não se preocupar com bugs. Além disso, o aparecimento de erros é fundamental para o processo de aprendizagem, se não os encontrarmos dificilmente estaremos exigindo o suficiente de nós mesmos. 

**Variantes**

Como alternativas ao log( ), mas raramente implementado, é bom saber que existem outros métodos, tais como: 
~~~javascript
.error( ) → Escreve um erro no console. 
.warn( ) → Escreve uma advertência no console. 
.table( ) → Escreve uma tabela no console. 
~~~
O último é outra maneira de exibir um objeto ou array no console de uma forma um pouco mais visual. Por exemplo:
~~~javascript
let meuObjeto= { 
mensagem: "Mensagem de texto", 
utilidade: "Prova de JS" 
}; 
let meuArray= [ “Primeira mensagem do array”, ”Segunda mensagem do array”, “Terceira mensagem do array”] 
console.table(meuObjeto); 
console.table(meuArray); 
~~~

Continue tentando alternativas, familiarize-se com o console do navegador e implemente o código para obter resultados diferentes. Você também pode realizar operações aritméticas e relacionais.

~~~javascript
let numero = 5; 
let numeroEmLetras = "5"; 
console.log(numero == numeroEmLetras); 
console.log(numero === numeroEmLetras); 
~~~