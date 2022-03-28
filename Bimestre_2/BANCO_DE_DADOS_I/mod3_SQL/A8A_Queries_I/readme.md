<h1>Usando SQL em Bancos de Dados</h1>


<h2> Create, Drop e Alter </h2>


<p>
Como podemos criar uma tabela com instruções SQL? E se quisermos eliminá-la, como podemos fazer isso? E, ainda, é possível modificar uma tabela existente?
</p>
<p>
As diretrizes de criar (Create), eliminar(Drop) e alterar (Alter) nos permitirão realizar cada uma dessas ações que, vale ressaltar, são bastante comuns no processo de trabalho com Bancos de Dados.
</p>

<h3> Create Table</h3>

<p>
Como o nome sugere, serve para criar uma nova tabela e junto precisamos criar também seus atributos: colunas e seus tipos de dados.
</p>

~~~sql
    CREATE TABLE Filmes
    nome_coluna1 TIPO_DE_DADO;
    nome_coluna2 TIPO_DE_DADO;

~~~


<h3>Drop Table</h3>
<p>
Irá atuar apenas na tabela que queremos excluir
</p>

~~~sql
    DROP TABLE IF EXISTS Filmes;
~~~


<h3> Alter Table </h3>

<p>
É mais flexivel. De acordo com o que queremos fazer em uma tabela já existente.

<b>ADD:</b> para adcionar uma coluna.

~~~sql
    ALTER TABLE Filmes
    ADD rating DECIMAL(3,1) NOT NULL;
~~~


<b>MODIFY: </b>para modificar uma coluna.

~~~sql
    ALTER TABLE Filmes
    MODIFY rating DECIMAL(4,1) NOT NULL;
~~~


<b>DROP: </b>para excluir uma coluna.


~~~sql
    ALTER TABLE Filmes
    DROP rating;
~~~

---


<h2>Insert, Delete e Update</h2>

<p>
Como inserir os dados de um cliente, por exemplo?
É possível deletar o registro de um cliente já inserido no banco de dados?
E, ainda, é possível modificar um dado já inserido?
</p>

<p>
<b>Insert, Delete e Update</b> possibilitam inserir registros, deletá-los e atualizar informações. Estas ações serão utilizadas em todo o nosso curso a partir dessa aula.
</p>

<h3>Insert</h3>

<p>
O insert, serve para inserirmos dados nas tabelas que ja foram criados.

~~~sql
-- PARA INFORMAR QUAIS AS COLUANS QUE IRÃO RECEBER DADOS
INSERT INTO Usuario(nome, sobrenome, email, data_nascimento, telefone)
-- O VALUES É A PALAVRA RESERVADA PARA INSERIR OS VALORES
VALUES('Gabriel','Azevedo','gbldja@gmail.com','1991-08-28','11992359072',)
~~~
Ao inserirmos os valores, é preciso colocar (em caso de instring) entre 'aspas'.


<h3>Update</h3>
Para atualizar um registro, utilizamos o update:

~~~sql
UPDATE Usuario SET
nome = 'Davi',
sobrenome = 'Silva'
WHERE id = 1;
~~~
Informamos a coluna que será alterada, seguida de = e entre 'aspas' o novo valor.
Utilizamos o WHERE para dizer qual o id será alterado.


<h3>Delete</h3>
Caso queira deletar algum dado, utilizamos o DELETE:

~~~sql
DELETE FROM Usuario WHERE id = 1;
~~~
Dessa forma, o registro com o id=1 foi deletado.


---

<h2>Select </h2>

<p>
O que podemos fazer quando queremos recuperar linhas selecionadas de uma ou mais tabelas?
</p>
<p>
<b>Select</b> é uma instrução chave na linguagem SQL, com ela podemos iniciar uma consulta instruindo, em nosso caso, o MySQL sobre qual tarefa ele deve executar. Assim, podemos recuperar e apresentar as linhas selecionadas e desejadas em nossa execução.
</p>

Podemos especificar qual a coluna queremos selecionar:
~~~SQL
SELECT coluna1, coluna2 FROM tabela;
~~~


Podemos também chamar todas as colunas da tabela:
~~~sql
SELECT * FROM tabela;
~~~

---

<h2>WHERE e ORDER BY</h2>

<h3>Where</h3>
Utilizado quando queremos fazer algum tipo de condição

~~~sql
SELECT coluna1, coluna2 FROM tabela WHERE condição
~~~

Ex:

~~~sql
-- Nesse caso, o select vai trazer apenas os nomes e sobrenomes que contenham na coluna pais o dado = Brasil. 
SELECT nome, sobrenome FROM Clientes WHERE pais = 'Brasil'
~~~

<b>Operadores aceitos no WHERE:</b>

~~~sql
= igual a
> maior que
>= maior ou igual que
< menor que
<= menor ou igual que
<> diferente de
!= Diferente de
IS NULL é nulo
BETWEEN entre dois valores
IN Lista de valores
LIKE se encaixa
~~~

<h3>ORDER BY </h3>
<p>
Order By é usado para classificar os resultados de uma consulta com base no valor da coluna especificada.
Por padrão, as colunas são classificadas em ordem crescente (ASC). Mas tambem pode ser classificados em ordem decrescente utilizando o DESC.
</p>

