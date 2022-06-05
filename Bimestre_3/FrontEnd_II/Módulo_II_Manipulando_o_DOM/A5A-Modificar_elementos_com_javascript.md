## Modificando o(a) DOM

Para fazer modificações no DOM, precisamos ter o objeto que queremos modificar selecionado. Podemos fazer isso usando seletores!

**.innerHTML**

Se quisermos ler ou modificar o conteúdo de uma tag HTML, vamos usar esta propriedade:  

~~~javascript
document.querySelector('div.nome').innerHTML ;
~~~
Nesse caso, nós a usamos para ler o conteúdo. Mas, e se quisermos modificá-la?

💡 Se quisermos salvar o valor, devemos atribuir essa linha de código a uma variável. Caso contrário, quando a execução continuar, o valor que procuramos será perdido.

Se quisermos modificar o conteúdo de uma tag HTML, vamos usar esta propriedade da seguinte forma: 


~~~javascript
document.querySelector('div.nome').innerHTML = 'Darío';
~~~

Se usarmos a propriedade dessa forma, todo o conteúdo que tínhamos na div com o nome da classe será alterado para a string “Darío”. 

💡 No entanto, também podemos modificar 
o conteúdo sem perder o que tínhamos anteriormente.

Se quisermos modificar o conteúdo de uma tag HTML, vamos usar esta propriedade:

~~~javascript
document.querySelector('div.nome').innerHTML += 'Salgadinho';
~~~

Dessa forma, estamos adicionando ao div com a classe de compras a palavra “Salgadinho”, de tal forma que, se a lêssemos, diria:

~~~html
<div class="compras"> “Presunto, Queijo, Pão” Salgadinho</div>
~~~

**innerText**

Se quisermos ler ou modificar o texto de uma tag HTML, vamos usar esta propriedade:

~~~javascript
document.querySelector('div.nome').innerText ;
~~~

Nesse caso, se no meu div com a classe nome estivesse escrito "Leo", a propriedade retornaria a String "Leo".  

💡 Se quisermos salvar o valor, devemos atribuir essa linha de código a uma variável. Caso contrário, quando a execução continuar, o valor que procuramos será perdido. 

Se quisermos modificar o texto de uma tag HTML, vamos usar esta propriedade:

~~~javascript
document.querySelector('div.nome').innerText = 'Maria';
~~~

Se usarmos a propriedade dessa forma, todo o texto que tínhamos na div com classe nome será alterado para a string "Maria". 

💡 No entanto, também podemos modificar o conteúdo sem perder o que tínhamos anteriormente.

Se quisermos adicionar conteúdo ao texto de uma tag HTML, usaremos esta propriedade da seguinte maneira: 

~~~javascript
document.querySelector('div.nome').innerText += 'Messi';
~~~
Nesse caso, o que aconteceria é semelhante ao que acontece com o outro seletor, mas o texto seria incluído na tag div, deixando: 
~~~html
<div class=“nome”>Leo Messi</div>
~~~

**Propriedade Style**

Nos permite ler e sobrescrever as regras CSS que são aplicadas a um elemento que selecionamos.

~~~javascript
let titulo = document.querySelector('.title');

titulo.style.color = 'cyan';
titulo.style.textAlign = 'center';
titulo.style.fontSize = '12px';
titulo.style.backgroundColor = '#dddddd';
~~~

🔭 Observe que as regras CSS que tinham hífens (como font-size), em Javascript são escritas em camelCase, (ou seja, fontSize). 


- - - 


## Template String

Template Strings são strings que permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação de string com elas.

Basicamente é uma nova forma de criar strings e tornar o seu código um pouco mais legível.

~~~javascript
`corpo de texto`

`texto linha 1
 texto linha 2`

`texto string ${expression} texto string`
~~~

Referencia Template String [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals).

**Com innerHTML**

Referencia [MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML).

--- 


## Modificando estilos

Criando um **dark-theme** para nosso projeto.

## Modificando classes

JavaScript nos dá uma propriedade e vários métodos que nos permitem fazer várias ações com o atributos class de um elemento.

|.add()|.remove()|.toggle()|.contains()|
|--|--|--|--|
|Adiciona uma classe ao elemento.|Remove a classe do elemento.|Adiciona a classe, se ainda não a tiver. Caso tenha, remove a classe.|Pergunta se o elemento tem a classe ou não. Retorna um valor verdadeiro ou falso.|
