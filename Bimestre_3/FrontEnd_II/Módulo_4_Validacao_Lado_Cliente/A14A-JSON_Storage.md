# JSON, Session Storage e Local Storage

## Do que se trata?

Quando dizemos JSON - e pronunciamos "Jeison" - um dos primeiros pensamentos que vem à mente é o vilão do filme de terror Jason.
 ![](https://i.gifer.com/ExcR.gif)

 **Mas, a realidade é outra. E que bom!**

**JSON** é um formato de texto simples para troca de dados. Como o próprio nome indica, sua implementação vem da notação de objetos JavaScript. É composto por uma “chave” e por um “valor”, as propriedades são sempre colocadas entre aspas duplas. Este é um requisito essencial para o seu bom funcionamento.

 ~~~json
 {
    "nome": "JSON",
    "significado": "Javascript Object Notation",
    "linguagemDeProgramacao": false,
    "tiposDeDadosDisponiveis": [ "numbers", "strings", "booleans", "null", "arrays", "objects" ]
}
~~~

## Quando é útil?
Quando trabalhamos com muitas informações, é necessário organizá-las em nosso projeto de forma que todos os dados fiquem armazenados em um arquivo separado do arquivo onde temos o código do nosso programa. Assim, se precisarmos atualizar ou modificar dados, podemos ir diretamente ao arquivo JSON.

Para usar essas informações, devemos usar certos métodos para ler esses dados. Na apresentação a seguir, você encontrará informações sobre os métodos fundamentais para isso.

## Métodos de JSON

### Texto e tabela de comparação

JSON é o acrônimo para JavaScript Object Notation e, como seu nome indica, é bastante parecido com o objeto literal que conhecemos. Veremos as diferenças:

|Objeto literal|JSON|
|--------|----------|
|Suporta aspas simples e duplas|As chaves estão entre aspas|
|Chaves de objetos não precisam de aspas|Apenas aspas duplas podem ser usadas|
|Podemos escrever métodos sem problemas|Não admite métodos, somente propriedades e valores|
|É recomendado colocar uma vírgula no último elemento|Não se pode colocar uma vírgula no último elemento|


### Como, quando e por que?

Ao trabalhar com JSON, a partir do JavaScript, devemos saber como interpretar e analisar essas informações para trabalhar com elas como fazemos com objetos literais.

Temos dois processos que facilitam isso:
- **JSON.parse()** = JSON → JS
- **JSON.stringify()** = JS → JSON


### JSON.parse()


Analisa uma string de texto JSON, que recebe como parâmetro.
Retorna um objeto JS que corresponde ao texto analisado.

- Recebe JSON como parâmetro
- Devolve JS

~~~json
JSON.parse('{}'); // {}
JSON.parse('true'); // true
JSON.parse('"olá!"'); // "olá!"
~~~

### JSON.stringify()

Recebe um objeto ou valor JavaScript e o converte. 
Retorna uma string de texto com o formato correspondente à notação JSON.

- Recebe JavaScript como parâmetro.
- Devolve JSON.

~~~json
JSON.stringify({});                    // '{}'
JSON.stringify(true);                  // 'true'
JSON.stringify('tchau!');                 // '"tchau!"'
~~~


---

## Session storage e local storage

Há algumas semanas, passamos pelo "terreno rochoso" das sessões e dos cookies. Estes procedimentos são algo que acontece no lado do servidor. Mas, do lado do cliente, existe algo que possamos fazer de forma semelhante? Como é habitual quando se trata de JavaScript, a resposta é um retumbante sim. Para isso, a linguagem nos fornece dois objetos fantásticos chamados: localStorage e sessionStorage. A função de ambos é armazenar dados no navegador:

- localStorage nos permitirá armazenar informação por um período indefinido.
- sessionStorage nos permitirá guardar informação em sessão. Isto significa que se utilizarmos esta opção e fecharmos o navegador, a informação aqui armazenada será perdida.

Talvez a questão que possa surgir aqui seja: De que serve esta funcionalidade se já a temos no lado do servidor? O armazenamento local e de sessões no lado do front end nos permite armazenar informação importante (pensando como desenvolvedores) e deixá-la ali antes de ser enviada para o servidor.

Para dar um exemplo, vamos pensar por um momento num sistema de e-commerce, mais precisamente no seu carrinho de compras. Certamente, muitas vezes adicionamos produtos a um carrinho e de repente deixamos a página, só para regressar momentos depois e perceber que os artigos que adicionamos ao carrinho ainda estão lá, intactos. Isto é possível graças ao armazenamento local do navegador. Esta funcionalidade melhora a experiência do usuário, sem ter de saturar o servidor com pedidos que não sabemos se serão realizados do lado do cliente. Com isto em mente, vejamos como implementar estes conceitos familiares, mas desta vez a partir do lado do front end.


- ### Session storage

Nos permite guardar informação na sessão. Ou seja, se usarmos esta opção e fecharmos o navegador, as informações aqui armazenadas serão perdidas.

~~~javascript
sessionStorage.setItem('propriedade(chave)', 'valor' ); //sessionStorage.setItem('name', 'Gabriel')

sessionStorage.getItem('name'); // 'Gabriel'

sessionStorage.removeItem('name'); // ''
~~~

- ### LocalStorage

Os dados armazenados no localStorage não têm data de expiração. Somente são deletados quando o usuário realiza a limpeza dos dados do navegador.


~~~javascript
localStorage.setItem('propriedade(chave)', 'valor' ); //localStorage.setItem('name', 'Gabriel')

localStorage.getItem('name'); // 'Gabriel'

localStorage.removeItem('name'); // ''
~~~

:zap: *** Só podemos armazenar dados no formato string. ***

---

### Atividade para realizar

Vamos praticar um login!

O ponto de partida será o repositório localizado [neste link](https://github.com/PedagogiaDHBrasil/DH-FrontEnd2-Exercicio-Login-Storage), que contém a tarefa, arquivos e tudo o que for necessário para realizar a atividade. Para começar, podemos realizar um fork do repositório para guardá-lo na tua conta GitHub ou simplesmente descarregá-lo como um arquivo .zip para trabalhar localmente no seu computador.