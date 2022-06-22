### Nós em HTML

Nós são elementos ou tags HTML que juntos formam uma ‘’árvore de nós’’ que chamamos DOM (Modelo de Objeto de Documento).

Então, em Javascript, o nó do objeto principal é o documento, e dentro dele, esses outros são classificados:

- Todas as tags HTML que pertencem ao nós de elemento.
- Todos os nós atribuídos ao elemento.
- Todos os nós de texto.
- Todos os nós de comentário.

Cada nó da árvore é um objeto, ou seja, contém uma coleção de propriedades do esqueleto de nós que representam a estrutura base do elemento, por exemplo:

~~~html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta>
</head>
<body>
       <header>
            <!-- comentario  -->
            <h1 class=""></h1>
            <nav></nav>
       </header>
       <footer>
            <p></p>
             <a href="">  </a>
       </footer>
</body>
~~~

O nó do tipo elemento pode ter nós filhos aninhados (um dentro do outro) e assim gerar um objeto NodeList que representa uma lista de nós pai/filho (também do tipo elemento, texto ou comentários). Pode ser estático, sem alteração, ou dinâmico, onde o conteúdo é atualizado automaticamente à medida que a página da Web muda dinamicamente. Agora, vamos ver os métodos que nos permitirão criar nós.