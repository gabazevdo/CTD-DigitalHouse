<h1>CRUD </h1>


CRUD -  Operações Básicas em Banco de Dados.

CRUD é o acrônimo para as quatro operações básicas em banco de dados: Create, Read, Update e Delete. Estas operações são consideradas as operações mais recorrentes em um banco de dados, uma vez que temos a capacidade para criar, extrair, atualizar e excluir dados. Praticamente todos os sistemas que usam banco de dados implementam alguma, quando não todas, estas operações.

 Na análise das entidades de um diagrama conceitual (DER) podemos identificar quais as entidades que demandam o uso destas operações. Por exemplo, em uma entidade de cliente, precisaremos criar os registros dos clientes (Create/Insert), ler os registros para visualizá-los (Read/Select) , bem como eventualmente precisaremos atualizar alguma informação (Update/Update) e, em muitos casos quando este registro não for mais necessário, deveremos deletar este registro (Delete/Delete).

Nesta aula teremos mais informações sobre estas operações, bem como a maneira correta de fazê-las. Veremos como estas operações são essenciais para nossa atuação enquanto desenvolvedores e administradores de banco de dados.


<h3>C</h3>
Em CRUD, a letra “C” corresponde a operação de Criar (Create) dados, ou seja, são as operações que criam novos dados dentro de nossa tabela no banco de dados. Por exemplo, temos uma tabela de usuário e iremos criar um novo usuário. Em banco de dados usamos a linguagem estruturada SQL para fazer esta operação por meio das queries. Uma query para fazer a criação do usuário utilizada neste exemplo, ficaria parecida com esta:

~~~sql
INSERT INTO 'usuario'('nome_usuario','login_usuario','senha_usuario')
VALUES ('maria santos','maria','ms12345')
~~~

<h3>R</h3>
Em CRUD, a letra “R” corresponde a operação de Ler (Read) dados, portanto todas as vezes que queremos ler registros que constam em nossas tabelas do banco de dados, faremos esta operação. Por exemplo, temos uma tabela de usuários e gostaríamos de ler o registro correspondente ao usuário com o ID número 1. A query para fazer esta operação iria ficar como a que segue:

~~~sql
SELECT 'nome_usuario','login_usuario','senha_usuario'
FROM 'usuario' WHERE 'id' = 1
~~~

<h3>U</h3>
Em CRUD, a letra “U” corresponde a operação de Atualizar (Update) dados, então, sempre que quisermos alterar ou atualizar um dado já existente em nossa tabela, devemos usar essa operação. Por exemplo, em nossa tabela de usuário temos um usuário chamado “José”, mas na verdade seu nome é “Pedro” e sabemos que seu ID é 1. Neste exemplo, usaremos uma query semelhante a que segue para fazer esta atualização dos dados:

~~~sql
UPDATE 'usuario' SET 'nome_usuario' = 'Pedro' WHERE 'id' = 1
~~~

<h3>D</h3>
Em CRUD, a letra “D” corresponde a operação de Deletar (Delete) dados, quando queremos excluir algum registro em nossas tabelas, usamos esta operação. Por exemplo, quando precisarmos excluir um dos usuários de nosso sistema, iremos usar essa operação para isso. Para excluir o usuário com ID número 1, usaremos a seguinte query:

~~~sql
DELETE 'usuario' WHERE 'id' = 1
~~~

---

<h2> Exercício de validação </h2>

Exercício opcional - Bancos de dados

Introdução

Para salvar algumas etapas, preparamos um banco de dados de séries e filmes para que já tenhamos uma fonte de dados. Podemos fazer o download do script clicando aqui, lembrando que será necessário importá-lo e executá-lo no Workbench, semelhante ao que fizemos para o MUSIMUNDOS.

<b>Orientações</b>

A seguir, propomos diferentes consultas que devemos fazer no banco de dados baixado.
Algumas sugestões sobre como abordar o exercício:

- Dê uma olhada rápida nas tabelas e seus campos para ter uma ideia de onde procurar as informações.

- Lembre-se de que as diferentes partes de um SELECT têm uma ordem específica.

Sem mais delongas, vamos começar com o exercício. Boa sorte! 😎👌✨


<h4>Consultas</h4>

<b>SELECT</b>
1. Mostre todos os registros da tabela filmes.
2. Mostre o nome, sobrenome e avaliação de todos os atores.
3. Mostre o título de todas as séries.

<b>WHERE e ORDER BY</b>

4. Mostre o nome e o sobrenome dos atores cuja avaliação é superior a 7,5.
5. Mostre o título dos filmes, a avaliação e os prêmios dos filmes com avaliação superior a 7,5 e com mais de dois prêmios.
6. Mostre o título dos filmes e a avaliação ordenado por avaliação em ordem decrescente.

<b>BETWEEN e LIKE</b>

7. Mostre o título e a avaliação de todos os filmes cujo título inclui Toy Story.
8. Mostre todos os atores cujos nomes começam com Sam.
9. Mostre o título dos filmes lançados entre '01-01-2004' e '31-12-2008'.


(Atividade concluída - Arquivo: exercicio_MESA)