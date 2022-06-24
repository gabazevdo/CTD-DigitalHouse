# O que é uma API?

Com certeza, você já se deparou com o termo API. Tecnicamente, poderíamos dizer que é uma interface que permite a comunicação entre duas aplicações. Se simplificássemos um pouco esta definição e a levássemos a algo mais simples, vamos imaginar que é um site que, em vez de responder a algo visual, como o HTML com CSS, nos responde com informação. E de que nos serviria isso? Bem, os usuários provavelmente não vão a este tipo de site, mas uma aplicação que necessita de fonte de informação específica, sim. Por exemplo, uma aplicação que necessita de uma lista completa de todos os países do mundo poderia consumir uma API que forneça essa informação. Vejamos mais informações sobre o assunto no vídeo a seguir.

## REST

Um sistema REST procura implementar um esquema ou protocolo que permita a todos os sistemas que com ele se comunicam compreender como o devem fazer e sob que estrutura devem enviar os seus pedidos para estes serem respondidos. Assistiremos ao vídeo para aprender um pouco mais sobre esse tema.

**Uma arquitetura REST se caracteriza por seguir os seguintes princípios:**

- Deve ser uma arquitetura cliente-servidor.
- Tem que ser sem estado, ou seja, não há necessidade de serviços para armazenar sessões de usuários (cada pedido ao servidor tem de ser independente dos outros).
- Deve apoiar um sistema de caches.
- Deve fornecer uma interface uniforme, para que a informação seja transferida de forma normalizada.
- Tem de ser um sistema em camadas invisíveis para o cliente.

---

# AJAX Fetch

Os pedidos assíncronos são um pilar fundamental do desenvolvimento do JavaScript, especialmente quando estamos do lado do Front End. Com eles, podemos fazer pedidos a diferentes APIs e consumir os dados que nos fornecem de forma dinâmica e sem pôr em risco a carga do resto das nossas funcionalidades.

Atualmente, graças ao WEB APIs, podemos acessar as funcionalidades de Fetch através do Javascript, que nos permitem, de uma forma simples e rápida, estabelecer comunicação com um servidor através dos diferentes endpoints fornecidos pela sua API.

:zap: _Fetch é uma função nativa que nos permite enviar solicitações a uma API de nosso front-end._

### fetch()

Ele recebe como primeiro parâmetro a URL do endpoint para o qual estamos fazendo a chamada assíncrona. Não sabendo quando a solicitação é concluída, o servidor retorna uma promessa.

```javascript
fetch('https://restcountries.eu/rest/v2/')
```

### Resolvendo a promessa

O primeiro then será encarregado de receber um callback e retornará a resposta desse chamado assíncrono em formato JSON.

```javascript
fetch('https://restcountries.eu/rest/v2/').then(function (response) {
  return response.json()
})
```

### Obtendo os dados

Uma vez que a resposta de nosso pedido está em formato JSON, por meio de outra promessa, podemos fazer o que quisermos com nossa resposta.

```javascript
fetch('https://restcountries.eu/rest/v2/')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
  })
```

### Capturando os erros

Em caso de erro, o catch() cuidará de capturá-lo e depois imprimirá através do console.

```javascript
fetch('https://restcountries.eu/rest/v2/')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
  })
  .catch(function (erro) {
    console.error(erro)
  })
```

### Documentação

Para saber mais, acesse a documentação oficial de Fetch, clicando no seguinte link:

[Uso de Fetch - Referência da API Web | MDN ](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)

---

# Try, Catch e Finally

A seção a seguir nos dará uma melhor noção de tratamento de erros, mas não devemos incorrer no uso excessivo dessa ferramenta.

**Tratamento de erros**

Erros que ocorrem em um programa podem ocorrer devido ao nosso descuido, entrada inesperada do usuário, resposta errônea do servidor, entre outros motivos. Normalmente, um script é interrompido e parado quando isto acontece. Mas podemos evitar isto com try...catch que nos permite "encurralar" os erros para que o script ainda possa funcionar.

- A declaração **try** permite que um bloco de código seja testado para detectar erros.
- A declaração **catch** permite o tratamento de erros.
- A declaração **throw** permite a criação de erros personalizados.
- A declaração **finally** permite que o código seja executado, após tentativa e captura, independentemente do resultado.

```javascript
//SINTAXE

try {
  // Bloco de código para o try
} catch (err) {
  // Bloco de código para lidar com erros
} finally {
  // Bloco de código a ser executado independentemente do resultado try/catch
}
```

Exemplo

```javascript
function myFunction() {
  let message, x

  message = document.getElementById('intro')
  message.innerHTML = ''

  x = document.getElementById('demo').value

  try {
    //Executamos um try com condicionadores enviando(throw) uma mensagem:

    if (x == '') throw 'Conteúdo vazio'
    if (isNaN(x)) throw 'Não é um número'
    x = Number(x)
    if (x > 10) throw 'Número muito alto'
    if (x < 5) throw 'Número muito baixo'
  } catch (err) {
    //Executamos um catch para tratar do erro exibindo-o no navegador
    message.innerHTML = 'Error: ' + err + '.'
  } finally {
    //Executamos a ação que encerra a função para devolver o valor requerido
    document.getElementById('demo').value = ''
  }
}
```
Nota-se que um erro pode ter origem em valores diferentes:

|Nome de erro|Descrição|
|-----------|-----------|
|RangeError|Ocorreu um número "fora de alcance"|
|ReferenceError|Ocorreu uma referência ilegal|
|Erro de sintaxe|Ocorreu um erro de sintaxe|
|Erro de teclado|Ocorreu um erro de digitação|
|URIError|Ocorreu um erro em encodeURI ()|
