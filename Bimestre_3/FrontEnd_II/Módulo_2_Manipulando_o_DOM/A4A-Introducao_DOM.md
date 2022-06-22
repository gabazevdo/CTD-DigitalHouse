### Objeto Window e Document.

Os objetos Window e Document não são a mesma coisa? Se nos atermos à descrição literal da página Mozilla, podemos dizer que: "O objeto Window representa a janela que contém um documento e o objeto Document representa o DOM (documento HTML) carregado nessa janela".

Lembre-se de que o DOM (document object model) representa o documento carregado no navegador como uma árvore de nós, onde cada nó representa uma parte do documento. Vejamos isso em um exemplo:

![](https://encontreseucodigo.com.br/wp-content/uploads/2021/08/o-que-e-dom-e-document-no-js.png)

Esta é a representação que JavaScript dá a um documento HTML com sua estrutura usual que contém um elemento < h1> e um elemento < p> dentro do corpo.

**Resumindo, Window e Document é a forma como o JavaScript dá acesso aos elementos presentes no documento HTML para, através dessas funcionalidades, podemos manipular o conteúdo de acordo com nossos critérios e necessidades.**

### Introdução: O que são os objetos Window e Document?


Window e Document são dois objetos dos quais podemos manipular a interface que interage com o usuário, sem precisar fazer requisições ao servidor e devolvê-las ao usuário. Ao interagir com esses dois objetos, notamos que a página não recarrega, pois o que é modificado é a interface.

#### Boas práticas

Embora revisemos, em termos gerais, as funções e métodos mais usados dos objetos de Window e Document, não devemos deixar de explorar todos os seus benefícios. Nesses links, podemos acessar a documentação e encontrar tudo o que podemos criar com JavaScript a partir do Front End: [window](https://developer.mozilla.org/pt-BR/docs/Web/API/Window) e [document](https://developer.mozilla.org/pt-BR/docs/Web/API/Document).

## Seletores DOM

Para acessar elementos em uma página, usamos seletores. Cada seletor pode retornar um único elemento ou uma lista de elementos. Para poder usar os seletores, devemos usar o objeto document, pois os seletores são métodos dele.

**querySelector()**

Este seletor recebe uma string indicando o seletor CSS do elemento DOM que estamos procurando. Por exemplo:

~~~javascript
let titulo = document.querySelector('.titulo');
~~~

Ele retornará o primeiro elemento HTML que contém a classe “titulo”.


**querySelectorAll()**

Este seletor recebe uma string indicando o seletor CSS do elemento DOM que estamos procurando. Por exemplo:

~~~javascript
let nomes = document.querySelectorAll('.nome');
~~~

Ele retornará uma lista de elementos que correspondem à pesquisa especificada. 

~~~javascript
//Também podemos usar seletores diretamente com elementos do documento, por exemplo:
let div = document.querySelectorAll('div');
~~~

**getElementById()**

Este seletor recebe uma string apenas com o nome do id do elemento DOM que estamos procurando. Por exemplo:

~~~javascript
let marca = document.getElementById('marca');
~~~
Ele retornará o elemento cujo id corresponde ao desejado.
~~~javascript
//Também podemos procurar elementos por seu id usando os seletores acima, mas devemos colocar um # antes para esclarecer que é um id.
let marca = document.querySelector('#marca');
~~~


### Comparando os seletores

|querySelector()|querySelectorAll()|getElementById()|
|---------------|------------------|----------------|
|Retorna o primeiro elemento do DOM que cumpre a condição que buscamos.|Retorna todos os elementos do DOM que cumprem a condição que buscamos.|Retorna o elemento DOM que possui a id que buscamos.|