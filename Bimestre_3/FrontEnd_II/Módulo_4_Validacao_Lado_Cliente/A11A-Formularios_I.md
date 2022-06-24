# Estrutura de um formulário

Até agora, conhecemos apenas 3 maneiras de solicitar dados de um usuário:

~~~javascript
// realmente não nos ajuda muito 
alert(´mensagem´);

// aqui pedimos apenas um 'verdadeiro' ou 'falso'
confirm(´Tem certeza de que deseja realizar esta ação?´);

//agora podemos pedir mais informações
prompt(´Por favor, insira seu nome´);
~~~

Mas, você pode imaginar usar um prompt toda vez que o usuário precisar de um dado? Você pode não ter a melhor experiência. Para obter dados de um usuário, sempre é possível usar os elementos fornecidos pelo HTML. Sabendo disso, vamos rever um pouco os elementos que podemos utilizar.

## Elementos de formulários

**Inputs** 

Os inputs são os elementos mais comuns para inserir dados. Estes são definidos pela tag chamada da mesma maneira (input) e através do atributo type definimos o formato de entrada do campo.

~~~html

// input de texto
<input type="text">

// input que só admite números
<input type="number">

// input para campos de email
<input type="email">

// input de data
<input type="date">

// grupo de opções de seleção única
<input type="radio" name="minhaOpcao" value="1">
<input type="radio" name="minhaOpcao" value="2">
<input type="radio" name="minhaOpcao" value="3">

// grupo de opções de seleção múltipla
<input type="checkbox" name="minhaOpcao" value="1">
<input type="checkbox" name="minhaOpcao" value="2">
<input type="checkbox" name="minhaOpcao" value="3">
~~~

Lembrando que para os casos de radio e checkbox são importantes os campos de name e de value, pois com isso eles definirão o grupo ao qual pertencem e o valor que será entregue no caso de serem selecionados respectivamente.


**Select**

Esses são os campos que permitem selecionar em uma lista suspensa de opções.

~~~html
<select>
	<option value="opcao1"> nome da opção 0</option>
	<option value="opcao1"> nome da opção 1</option>
	<option value="opcao1"> nome da opção 2</option>
</select>
~~~

Como no caso do radio e checkbox, aqui o atributo value também é importante para definir o valor da nossa opção.

**Textarea**

São usados ​​​​no caso de uma grande quantidade de texto precisar ser inserida. Geralmente, eles podem ser vistos sendo usados ​​para ter campos de comentários, mensagens, entre outros.

~~~html
<textarea> 

</textarea>
~~~

## Obtendo  dados de um formulário

Os formulários da Web são um dos principais pontos de interação entre um usuário e um site ou aplicativo, permitem aos usuários inserir dados que são geralmente enviados para um servidor web para processamento e armazenamento.

Antes de saber como obter os dados dos formulários, vamos rever algumas possibilidades para otimizar o funcionamento de um formulário.

### Evite enviar um formulário duas vezes

Quando o botão de um formulário é pressionado, o evento click é produzido, portanto, as informações são enviadas deste formulário, instrução que por padrão acontece em todos os formulários.

O que devemos considerar ao validar o formulário do cliente é que não devemos enviar essa informação ao servidor até que tenhamos certificado o conteúdo do referido formulário: campos obrigatórios, formato de e-mail correto (ola@digitalhouse.com), etc.

O que precisamos através do JavaScript, e antes de ir para a validação em si, é parar de enviar dados. Podemos conseguir isso com o método preventDefault(). Vamos ver como e onde aplicá-lo:

- Precisamos capturar o formulário (getElement, querySelector) e depois colocar um evento de escuta (addEventListener).
- No primeiro parâmetro deste listener, vamos colocar “submit”, que é justamente o evento que é executado ao enviar um formulário.
- No segundo parâmetro - e como sempre - vamos colocar um callback. A diferença é que agora ele receberá um parâmetro que fará referência ao objeto de evento. Portanto, uma boa idéia seria chamá-lo event ou ev.
- Finalmente, já dentro das chaves do callback, usaremos o evento mencionado e acessaremos o método preventDefault().

Desta maneira:

~~~javascript
let formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
   event.preventDefault()
})

// Utilizando ArrowFunction
let formulario = document.querySelector("form");

formulario.addEventListener("submit", event => {
   event.preventDefault()
})
~~~


## Praticando conceitos

- realizar atividade.

## Normalização de dados

