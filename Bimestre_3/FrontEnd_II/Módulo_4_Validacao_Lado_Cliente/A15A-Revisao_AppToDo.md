# Módulos e tópicos vistos até agora
Muito bem! Se chegamos até aqui, significa que já aprendemos:

- Eventos de um formulário, que nos ajudam a capturar uma ação do usuário antes da qual um processo pode ser realizado.
- O Objeto Location e suas propriedades; para obter parâmetros de um URL e gerar redirecionamentos.
- Validações, imprescindíveis para um bom UX e para evitar possíveis erros nos dados inseridos pelo usuário
- O formato JSON, que é composto por valores-chave e seus métodos para troca de dados.
- A utilizar localStorage e sessionStorage para armazenar informações do usuário no lado do cliente.
- Parabéns! Anote as dúvidas que você tem pendentes para analisá-las com professores. Até logo!


---

## Checkpoint II - Front End II
### To Do App

Ao longo deste assunto, veremos diferentes conceitos e ferramentas que nos permitirão evoluir como desenvolvedores front-end ao longo de nossa carreira profissional.

Mas que melhor maneira de internalizar esses conceitos do que colocá-los em prática?

Para isso, propomos a realização de um projeto que servirá para reforçar os conceitos vistos ao longo do curso e esclarecer eventuais dúvidas. Ao mesmo tempo, permitirá que você tenha um projeto finalizado e funcional em seu portfólio pessoal.

Este projeto consiste em um pequeno aplicativo de gerenciamento de tarefas, dentro do qual podemos realizar as seguintes atividades:

- Ver tarefas pendentes.
- Ver tarefas terminadas.
- Marcar uma tarefa como terminada.
- Criar tarefas novas.
- Visualizar a data de criação de uma tarefa.
- Remover tarefas.

Além do citado acima, implementaremos um sistema de autenticação de usuários, que inclui o processo de registro e login.


Para começar, apresentamos uma visão inicial de como será nosso aplicativo para você se familiarizar com ele e começar a trabalhar pouco a pouco em cada uma das funcionalidades. Para fazer isso, você pode baixar o código no link a seguir:

Disponível no [Google Drive](https://drive.google.com/file/d/1ioUwlmPkWQP-olMPFhFwufaGQoO-85_P/view?usp=sharing)

Disponível no [GitHub](https://github.com/PedagogiaDHBrasil/DH-FrontEnd2-ToDoApp-ProjetoBase)


---

### Por que eles nomearam as pastas dessa maneira? ?

Certamente em algum momento nos deparamos com um projeto ou repositório que possui uma estrutura muito particular, com muitos diretórios internos e nomes que não sabemos a que se referem. Bem, não se preocupe, isso é algo que acontece e continuará acontecendo, faz parte das tarefas do desenvolvedor entender o código de outras pessoas.

Nesse caso, o bom é que temos uma documentação e explicação de cada um dos recursos do nosso projeto. ?

A seguir, poderemos entender um pouco melhor porque implementamos a estrutura que vemos!


Ao visualizar os diretórios do nosso projeto, encontramos a seguinte organização:

~~~
📂 App_To-Do
  ./assets
  ./scripts
  ./styles
index.html
signup.html
tarefas.html
~~~

Então, vamos pensar em cada um desses recursos que encontramos no diretório raiz:

**assets**: aqui vamos encontrar os recursos gráficos que vamos implementar em nossa interface.

**scripts**: este diretório armazena toda a lógica do nosso projeto, é onde residem todos os scripts correspondentes ao comportamento das páginas às quais estão associados.

**styles**: sem muito a esclarecer, todos os estilos de nossa interface são separados de acordo com sua aplicação em todo ou partes específicas do projeto.

**index.html**: aqui definimos nosso "entry point", nosso ponto de partida. Como sabemos, os servidores de forma padrão interpretam o index como a página principal do nosso site. Neste caso definimos o que seria o "login" como nossa página principal, aquela que queremos que seja renderizada quando um usuário acessar pela primeira vez.

**tarefas.html**: esta é a nossa página dedicada à vista privada de cada usuário que tem um perfil e começa a gerar tarefas na aplicação.

**signup.html**: Como o próprio nome em inglês indica, esta é a nossa página de registro para aqueles usuários que desejam criar um perfil pela primeira vez e assim acessar nosso serviço.

Em linhas gerais, essa é a estrutura definida para este projeto, para este caso específico. É importante entender isso, pois nem sempre essa arquitetura será repetida em todos os projetos de front-end, mas podemos dizer que tentamos seguir boas práticas como os bons desenvolvedores que queremos ser.