<h1> Funções do MySQL</h1>

<h2>Funções de alteração</h2>

Em muitas ocasiões, precisaremos de nossa consulta não apenas para trazer os dados solicitados, mas, por sua vez, desejaremos realizar algumas operações especiais com eles.

Por exemplo: para unificar os dados de duas colunas em uma única ou talvez colocar algum valor por padrão para todos aqueles registros que estão armazenando um valor nulo.

As funções de alteração do MySQL nos permitirão brincar com o resultado da consulta. Lembrando sempre que jamais alterarão os dados originalmente armazenados no banco de dados.

As funções de alteração mais comuns - e as que veremos - são:

- CONCAT

  - Usamos CONCAT para concatenar duas ou mais expressões.

  ```sql
  SELECT CONCAT('Olá', 'mundo.');
  -- Olá mundo

  SELECT CONCAT('A resposta é: ', 24, '.');
  -- A resposta é: 24.

  SELECT CONCAT('Nome: ', first_name, ' ', last_name) FROM actors;
  -- Nome: Emilia Clarke
  ```

- COALESCE

  - Usamos COALESCE para obter a primeira expressão que não é nula.

  ```sql
  SELECT COALESCE(NULL, 1, 20, 'Digital House');
  -- 1

  SELECT COALESCE(NULL, NULL, 'Digital House');
  -- Digital House
  ```

Os três clientes na tabela a seguir têm um ou mais dados nulos:

<table> 
<td>CLIENTES</td>
    <tr>
        <td>id</td>
        <td>nome</td>
        <td>celular</td>
        <td>casa</td>
        <td>trabalho</td>
    </tr>
    <tr>
        <td>1</td>
        <td>João</td>
        <td>124</td>
        <td>345</td>
        <td>980</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Roberto</td>
        <td> </td>
        <td>187</td>
        <td>243</td>
    </tr>
        <tr>
        <td>3</td>
        <td>Matheus</td>
        <td> </td>
        <td> </td>
        <td>428</td>
    </tr>
</table>
Usando o COALESCE, podemos obter os primeiros dados não nulos de cada registro, preenchendo as colunas em branco.

```SQL
SELECT id, nome, COALESCE(celular, casa, trabalho) AS telefone FROM clientes;
```

<table>
<td>CLIENTES</td>
<tr>
    <td>id</td>
    <td>nome</td>
    <td>celular</td>
</tr>
<tr>
    <td>1</td>
    <td>João</td>
    <td>124</td>
</tr>
<tr>
    <td>2</td>
    <td>Roberto</td>
    <td>187</td>
</tr>
<tr>
    <td>3</td>
    <td>Matheus</td>
    <td>428</td>
</tr>
</table>

- DATEDIFF

Usamos o DATEDIFF para calcular a diferença entre duas datas.
Tomamos o intervalo especificado como granularidade.

~~~SQL
SELECT DATEDIFF(hour, '2017/08/25 07:00', '2017/08/25 12:45'); -- 5
-- Retorna 5 porque é o número de horas de diferença entre 7:00 e 12:45. 
-- Esta informação fornece um resultado aproximado.

SELECT DATEDIFF(minute, '2017/08/25 07:00', '2017/08/25 12:45'); -- 345
-- Retorna 345 porque é o número de minutos que varia de 7:00 a 12:45 
-- (300min + 45min).

~~~

- TIMEDIFF
- EXTRACT
Usamos EXTRACT para extrair dados de uma data:
~~~sql
SELECT EXTRACT(SECOND FROM '2014-02-13 08:44:21');
-- 21

SELECT EXTRACT(MINUTE FROM '2014-02-13 08:44:21');
-- 44

SELECT EXTRACT(HOUR FROM '2014-02-13 08:44:21');
-- 8

SELECT EXTRACT(DAY FROM '2014-02-13 08:44:21');
-- 13

SELECT EXTRACT(WEEK FROM '2014-02-13 08:44:21');
-- 6

SELECT EXTRACT(MONTH FROM '2014-02-13 08:44:21');
-- 2

SELECT EXTRACT(QUARTER FROM '2014-02-13 08:44:21');
-- 1

SELECT EXTRACT(YEAR FROM '2014-02-13 08:44:21');
-- 2014
~~~

- REPLACE

Usamos REPLACE para substituir um caractere por outro: 

~~~sql
SELECT REPLACE('abc abc', 'a', 'B');
-- Bbc Bbc

SELECT REPLACE('abc abc', 'A', 'B');
-- abc

SELECT REPLACE('123 123', '2', '5');
-- 153 153
~~~

- DATE_FORMAT
Usamos DATE FORMAT para avaliar a sentença e retornar a primeira que for cumprida: 
~~~sql
SELECT DATE_FORMAT('2017-06-15', '%Y');
-- 2017

SELECT DATE_FORMAT('2017-06-15', '%W %M %e %Y');
-- Thursday June 15 2017

~~~

- DATE_ADD


- CASE
Usamos CASE para avaliar as condições e retornar a primeira que for atendida. Neste exemplo, a tabela resultante terá 4 colunas: id, title, rating, rating_categories. Este último mostrará 'Ruim', 'Regular', etc, de acordo com a classificação do filme.
~~~sql
  SELECT id, title, rating
    CASE
      WHEN rating < 4 THEN 'Ruim'
      WHEN rating < 6 THEN 'Regular'
      WHEN rating < 8 THEN 'Bom'
      WHEN rating < 9.5 THEN 'Muito bom'
      ELSE 'Excelente'
    END AS rating_categories
  FROM movies
  ORDER BY rating
~~~


<h2> Funções de agragação</h2>

Tem a peculiaridade de não operar em cada uma das linhas, mas gerar uma informação.

Funções de agregação são funções SQL que permitem executar uma operação aritmética nos valores de uma coluna em todos os registros de uma tabela.

- MAX()
Função MAX retorna o valor máximo de um conjunto de valores.
- MIN()
Função MIN retorna o valor mínimo de um conjunto de valores.
- AVG()
Função AVG retorna a média aritmética de um conjunto de valores.
- COUNT()
A função Count é utilizada para contar a quantidade total de itens.
- SUM()
Função SUM é responsável por retornar a soma total de um conjunto de valores.


<h2> Disting 