# AJAX

AJAX (Asynchronous JavaScript and XML) é um conjunto de tecnologias usado para criar aplicações web assíncronas. Isso as torna mais rápidas e responsivas às ações do usuário.

## Como funciona?

![](https://assets.digitalhouse.com/content/ar/td/frontII/imagemfrontii.png)

1. Ocorre um evento em uma página da web (a página é carregada, um botão é clicado)
2. JavaScript cria um objeto XMLHttpRequest
3. O objeto XMLHttpRequest envia uma solicitação para um servidor web
4. O servidor processa a solicitação.
5. O servidor envia uma resposta para a página da web.
6. A resposta é lida por JavaScript.
7. JavaScript executa a ação apropriada (como atualização de página)

### Exemplos práticos de AJAX

**Preenchimento automático do Google**

Isso ajuda você a preencher suas palavras-chave à medida que as digita. As palavras-chave mudam em tempo real, porém a página em si não muda.

**Votar ou sortear**

Nela, os resultados são calculados em tempo real e os indicadores atualizados são mostrados.

**Bate-papo de atendimento ao cliente**

O usuário pode explorar a página ao mesmo tempo e o chat permanece aberto sem recarregar a web a cada nova mensagem

**Notificações de mídia social**

Tanto Twitter, Facebook e Instagram, entre outros aplicativos, constantemente recebem atualizações e chegam até você como mensagens ou conteúdos desde o início que podem lhe interessar

Conhecer métodos e propriedades do objeto
https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp

---

# HTTP: Requisições e Respostas

HTTP o Hypertext Transfer Protocol é um protocolo para troca de dados na Web entre cliente e servidor. As mensagens HTTP formam uma estrutura como meio de realizar uma requisição de dados iniciada pelo cliente, geralmente um navegador web, em busca de sua resposta executada pelo servidor. Desta forma, uma ou mais tarefas são resolvidas, através de mecanismos que veremos mais adiante.

![](https://assets.digitalhouse.com/content/ar/td/frontII/1_hPGHBctmU4fVRv9QLqnrCg.jpeg)

## Conceito de assincronismo
Graças à assincronia geramos um código mais funcional, rápido e eficiente, sem a necessidade de recarregar a página para atualizar as informações. JavaScript é uma linguagem de programação assíncrona porque é capaz de executar um encadeamento de tarefas ou solicitações em que, se a resposta demorar, o encadeamento de execução do JavaScript continuará com as demais tarefas do código.

## Simultaneidade e paralelismo

Existem 2 tipos de assincronia:

- Simultaneidade: quando as tarefas podem ser iniciadas, executadas e concluídas em períodos de tempo sobrepostos, onde pelo menos dois threads estão progredindo
- Paralelismo: Quando duas ou mais tarefas são executadas exatamente ao mesmo tempo.

A diferença entre simultaneidade e paralelismo é que, no primeiro caso, isso não implica que as tarefas terminem de ser executadas literalmente ao mesmo tempo, como no segundo caso. Além disso, dizemos que JavaScript é uma linguagem não bloqueante porque as tarefas não ficam bloqueadas esperando que terminem, impedindo que continuem com o restante das outras.

---

# Introdução a HTTP
HyperText Transfer Protocol, ou em português: protocolo de transferência de hipertexto, é um protocolo usado para gerenciar a comunicação entre duas máquinas conectadas a uma rede. Onde um pede um conteúdo específico e o outro é responsável por responder a essa solicitação.

Até agora, tudo parece simples, você não acha? Mas dentro desse protocolo há todo um conjunto de sub-regras definidas que se encarregam de saber responder a diferentes solicitações. Solicitar a página de acesso do seu homebanking não é o mesmo que acessar diretamente sua conta bancária. Uma vez que, embora em ambos os casos esteja a fazer pedidos ao servidor, no segundo é necessário implementar mecanismos de autenticação que lhe permitam identificar que não é outra pessoa a querer acessar a sua conta.

Para refletir um pouco antes de entrar no vídeo, deixamos essas perguntas para ter em mente:

1. Será que o tipo de solicitação ao servidor é o mesmo quando publicamos uma foto em nossa conta do Instagram e quando queremos ver uma foto de outra conta que não é nossa?
2. Quando entramos em nosso e-mail, nossa senha está protegida desde o momento em que sai do computador até chegar ao servidor?
3. Quando queremos editar apenas nosso nome no perfil do LinkedIn, as informações que não modificamos são mantidas ou substituídas novamente mesmo sendo as mesmas?
4. Qual será a diferença entre ocultar uma foto do nosso perfil do Facebook e excluí-la?
