## O que são eventos?

Podemos dizer que um evento é uma ação que ocorre no documento HTML e que normalmente é executada por quem usa nosso aplicativo. Vejamos alguns exemplos:

- A pessoa clicou em um botão na interface.
- A pessoa inseriu um texto na entrada do formulário.
- A pessoa pressionou exatamente a tecla "J".

Como podemos ver, evento é aquela ação que é acionada quando a pessoa executa um determinado comportamento. Porém, vale esclarecer, a pessoa não é a única que pode desencadear uma ação. A janela (window) que carrega o documento HTML também pode fazer isso da mesma maneira.

Um evento é uma ação que ocorre no navegador ou que é executada pelo usuário. 


Eventos mais usados:


- onclick: Quando o usuário clica.

- ondblclick: Quando o usuário clica duas vezes.

- onmouseover: Quando o mouse se move sobre o elemento.

- onmousemove: Quando o mouse é movido.

- onscroll: Ao rolar.

- onkeydown: Quando uma tecla é pressionada.

- onload: Quando a página for carregada.

- onsubmit: Quando um formulário é enviado.

Para mais informações, visite a documentação oficial clicando no seguinte [link](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events).

---

## Funções

![](https://assets.digitalhouse.com/content/ar/td/frontII/TiposdefuncoesemJavaScript.jpg)


## Palavras Reservadas
#### Como declarar uma variável


A partir de ES6 utilizamos as seguintes palavras reservadas para declarar nossas variáveis.


**var**

O escopo é seu contexto de execução (em outras palavras, a variável vive dentro da função em que é declarada). O escopo de uma variável declarada fora de uma função é global.

**let**

Graças a isso, o escopo do bloco é introduzido. Variáveis atribuídas com let só são acessíveis dentro do seu bloco. Recorde que o bloco é a parte do código definida entre chaves ({}), por exemplo, dentro de um bloco **if**:

~~~javascript
let cor = "vermelho"; 

if (cor === "vermelho") { 
  let corEscolhida = cor; // Essa variável vive dentro do bloco if

  console.log("A cor escolhida é" + " " + corEscolhida); // A cor escolhida é vermelho
}else{
  console.log(corEscolhida); // Isto devolveria um erro, já que corEscolhida não vive dentro de outro bloco. 
}
~~~

As variáveis declaradas fora de um bloco de código têm um escopo global.

**const**

Seu comportamento é igual ao de let, exceto pela diferença de que o seu valor não pode ser reatribuído. O uso correto minimiza o estado de mutação.

#### Conclusões
Olhando para todas estas funcionalidades e comportamentos que as palavras reservadas nos dão, podemos tirar a seguinte conclusão:


:bulb: *O ideal ao declarar uma variável é sempre utilizar a palavra reservada const, a menos que em algum momento necessitemos de reatribuir o seu valor. Nesses casos, podemos implementar a palavra reservada let.*

:bulb: *Praticamente não deveríamos utilizar a palavra var no nosso código, contudo, se em algum momento precisarmos usar esta palavra reservada para fazer o nosso código funcionar, então podemos pensar em reformular o nosso código para evitar recorrer à utilização de var.*

