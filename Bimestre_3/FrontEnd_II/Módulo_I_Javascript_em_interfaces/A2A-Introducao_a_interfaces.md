# Capturando dados do cliente

**prompt()**

Um deles é o prompt(), que mostra uma caixa de diálogo com uma mensagem opcional, que pede ao usuário para inserir um texto. Você também tem duas opções: "Aceitar" ou "Cancelar".

~~~javascript
prompt("Digite seu nome");
~~~
No console do navegador, podemos ver o resultado que esse método retorna, independente do que o usuário inseriu em uma string de texto.

***Isso significa que não importa o quanto o usuário insira apenas números, o que obteremos serão esses números, mas como se fossem texto.***

No momento em que os dados são perdidos, se os armazenamos, no entanto, em uma variável, podemos usá-los para o resto do nosso programa. Vamos fazer esse teste.

~~~javascript
let nomeUsuario = prompt("Por favor, digite seu nome");
console.log(nomeUsuario);
~~~
  
Ao usar um espaço de memória para salvar esses dados, podemos usá-los como informações. Caso o usuário selecione "Cancelar", o resultado retornado é nulo. Por outro lado, se o usuário pressionar "Aceitar" sem completar nada, ele retornará um texto vazio. Vamos também tentar ver neste caso e checar o resultado.


**confirm()**

O método confirm() exibe uma caixa de diálogo com uma mensagem opcional e dois botões, “OK” e “Cancelar”. Neste caso, o que nos permite é colocar uma questão ou indicação ao utilizador para que apenas responda sim ou não.

O valor que será retornado é um booleano indicando verdadeiro se clicarmos em OK e falso se escolhermos Cancelar.
 
~~~javascript
confirm("Deseja um tratamento personalizado?")
~~~

Lembremos que por si só o método não armazena nenhum dado, mas se armazenarmos o valor retornado em uma variável, podemos utilizá-lo como informação. Vamos tentar combinar os dois métodos em algo mais funcional.

    
~~~javascript
let tratamentoPersonalizado = confirm("Deseja um tratamento personalizado?")

if(tratamentoPersonalizado) {
  let nome = prompt("Por favor, digite seu nome");
   alert("Bem-vindo ao nosso site"+ nome +". Muito obrigado pela sua visita, estamos à sua disposição! ?");
} else {
   alert("Obrigado por conectar.")
}
~~~

Agora podemos ver como faz mais sentido implementar os métodos, mas juntos para alcançar um resultado mais complexo. Ou, pelo menos, salve esses dados e use-os quando acharmos adequado.

![](https://assets.digitalhouse.com/content/ar/td/frontII/Capturando-dados-do-usuario.jpg)


---

## Manipulando os dados

**parseInt()**

Para evitar erros como o anterior ou outros erros que possam surgir da não verificação do tipo de dados que estamos manipulando, temos a função parseInt(). Esta função analisa uma sequência de texto e devolve em um número. 

**parseFloat()**

Aqui entra em jogo esta outra função, que tem o mesmo objetivo que a anterior, mas neste caso devolve os números decimais que existem. 


**NaN** 

A propriedade NaN nos indica que o valor não é um número (Not A Number), portanto, isto causaria um erro se quiséssemos realizar qualquer operação aritmética com este valor. 
Tomemos este exemplo de uma situação que conduziria a um erro. Suponhamos que no código seguinte, quando executado, na caixa de diálogo do prompt, o usuário, por engano ou de propósito — algo que precisamos ter em mente como programadores🧐 —, introduza um texto “sua idade”. 

**Math()**

Como uma separação desta seção, trazemos para rever informações sobre um objeto que nos possa ser útil em algum momento do nosso desenvolvimento. Estamos falando de [Math](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math), que tem muitas propriedades e métodos que podem ser úteis.

Métodos math()

|Método|Função|
|------|------|
|Math.random();|Retorna um ponto flutuante, um número pseudoaleatório dentro do intervalo (0, 1)|
|Math.round();|Retorna o valor de um número arredondado para o inteiro mais próximo.|
|Math.max();|Retorna o maior de zero ou mais números.
|+ métodos|[clique aqui](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math#propiedades)|

## For...in e  For...of

MDN

[for...in](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in)

[for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

CTD

[Slide](https://docs.google.com/presentation/d/1G3bRNJyD8tAZAZ3gBNPuHKAwox8NpsKtVm03Dvc1d7M/edit).

