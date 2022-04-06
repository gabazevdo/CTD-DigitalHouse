<h1>Relatórios SQL</h1>

Tão importante quanto saber as funcionalidades do SQL e fazer as operações básicas em banco de dados, é saber extrair os dados do banco de dados, e transformá-los em informações que possam trazer conclusões relevantes. Tal implicação se dá tanto para um negócio, quanto para qualquer outra atividade que faça uso de um banco de dados.


O SQL tem diversas funções e técnicas. Estas, podem ser empregadas com o sentido de transformar resultados de uma consulta em relatórios com dados mais resumidos e mais assertivos. Exemplos de funções que podemos utilizar são: Joins, operadores condicionais ou booleanos, funções de agregação, entre outros recursos.

Os relatórios têm vital importância no dia a dia profissional de um desenvolvedor, haja vista que usualmente são demandados relatórios inéditos com base nos dados agregados na aplicação. A abrangência dos relatórios vai desde relatórios básicos como a soma dos pedidos feitos em um dia de uma pizzaria, até relatórios com consultas bastante complexas, como a relação média de lucro de uma multinacional.

Nesta aula vamos falar mais sobre técnicas e ferramentas empregadas para criar relatórios com efetividade, assertividade e clareza.


<h3>O que são? </h3>

São consultas que usam funções diversas para gerar relatórios de dados de maneira resumida.

Geralmente são usadas funções como: <b>subconsultas, Joins, operadores condicionais ou booleanos, funções de agregação</b>, entre outros recursos mais avançados do banco de dados.

<h3> Funções de agregação</h3>

Funções de agregação são funções SQL que permitem executar uma operação aritmética nos valores de uma coluna em todos os registros de uma tabela.

 -  MAX()
    - Função MAX retorna o valor máximo de um conjunto de valores.
- MIN()
    - Função MIN retorna o valor mínimo de um conjunto de valores.
- AVG()
    - Função AVG retorna a média aritmética de um conjunto de valores.
- COUNT()
    - A função Count é utilizada para contar a quantidade total de itens.
- SUM()
    - Função SUM é responsável por retornar a soma total de um conjunto de valores.


<h3> Subconsultas </h3>

Uma subconsulta é uma consulta que está aninhada dentro de uma instrução SELECT, INSERT, UPDATE ou DELETE, ou em outra subconsulta.


<h3>Funções de conversão</h3>

Convertem explicitamente uma expressão de um tipo de dados em outro. 

Sintaxe:
~~~SQL
CAST (expressão AS tipo_dado [ (tamanho) ] )
CONVERT (tipo_dado [ (tamanho) ] ,expressão [ ,estilo ] )
~~~
<h3>Formatação de dados </h3>

Faz a formatação de um dado para um formato esperado, usado principalmente na formatação de datas.
Sintaxe // Retorno: 
~~~SQL
DATE_FORMAT (`data`,'%d/%m/%Y') // 01/01/2001
DATE_FORMAT (`data`,'%d-%m às %Hh%i') // 01/01/2001 12:00
~~~


<h2>GROUP BY</h2>

GROUP BY é usado para agrupar os registros na tabela resultantes de uma consulta por uma ou mais colunas.

~~~SQL
SELECT coluna_1
FROM nome_tabela
WHERE condição
GROUP BY coluna_1;
~~~

Ex.
No exemplo a seguir, GROUP BY é usado para agrupar carros por marca, mostrando aqueles com um ano de fabricação igual ou superior ao ano de 2010.

~~~SQL
SELECT marca
FROM automovel
WHERE ano_fabricacao>= 2010
GROUP BY marca;
~~~

<h2>Agrupando dados</h2>

Como GROUP BY agrupa as informações, perdemos o detalhe de cada uma das linhas. Em outras palavras, não estamos mais interessados ​​no valor de cada linha, mas em um resultado consolidado entre todas as linhas. Vejamos a seguinte consulta:

~~~sql
SELECT id, marca
FROM autoomovel
GROUP BY marca;
~~~
Se agruparmos os automóveis por marca, não conseguiremos mais ver o ID de cada linha. Possivelmente, na linha ele nos mostra —para o campo ID— o primeiro de cada grupo de registros.
Vejamos mais alguns exemplos ...
~~~sql
SELECT marca, MAX(preco) AS preco_maximo
FROM automoveis
GROUP BY marca;
~~~
<i>Retorna a marca e o preço mais alto de cada grupo de marcas.</i>

~~~sql
SELECT genero, AVG(duracao) AS duraco_media
FROM filmes
GROUP BY genero;
~~~
<i>Retorna o gênero e a duração média de cada grupo de gênero.</i>

Em resumo, a cláusula GROUP BY:
 - É usada para agrupar linhas que contêm os mesmos valores.
 - Opcionalmente, é usada junto com as funções de agregação (SUM, AVG, COUNT, MIN, MAX) para produzir relatórios de resumo.
 - As consultas que contêm a cláusula GROUP BY são chamadas de consultas agrupadas e retornam apenas uma única linha para cada item agrupado.

~~~sql
SELECT marca, MAX(preco)
FROM automoveis
GROUP BY marca;
~~~


<h2> Comparativo Where x Having </h2>

- WHERE
    - É utilizada para indicar onde deve ser modificado ou excluído um dado.

    <b>vs</b>

- Having
    - É utilizada quando desejamos aplicar um critério ao grupo como um todo. 



Uma cláusula Having é como uma cláusula Where, a diferença é que ela se aplica somente a grupos como um todo (ou seja, as linhas do conjunto de resultados que representam um grupo), enquanto a cláusula Where se aplica a linhas individuais. 

<b>Nota:</b> Uma consulta pode conter uma cláusula Where e uma cláusula Having. 

Cláusula Where é aplicada primeiro às linhas individuais nas tabelas ou objetos com valor de tabela no painel Diagrama. Apenas as linhas que atendem os critérios da cláusula where são atendidas.

A cláusula Having é aplicada às linhas de conjunto do resultado. 

<h2> Exercício Extra </h2>

Vamos continuar praticando consultas no banco de dados de filmes. Se você não baixou o banco de dados, <a href="https://drive.google.com/file/d/1GBFO5YI4P353tpNTbiEFbCrxCqyW4yPr/view">clique aqui</a>. 
Sem mais delongas, vamos começar com o exercício. Boa sorte!😎👌✨

<b>Consultas</b>

<i>Funções de agregação, GROUP BY e HAVING</i>

1. Quantos filmes estão registrados?

~~~sql
SELECT COUNT(titulo) FROM filmes;
-- 21
~~~
2. Quantos filmes têm entre 3 e 7 prêmios?
~~~sql
SELECT COUNT(titulo) FROM filmes WHERE premios BETWEEN 3 and 7;
-- 8
~~~

3. Quantos filmes têm entre 3 e 7 prêmios e classificação superior a 7?
~~~sql
SELECT COUNT(avaliacao)  FROM filmes WHERE avaliacao > 7;
SELECT COUNT(avaliacao)  FROM filmes WHERE avaliacao > 7 AND premios BETWEEN 3 AND 7;
-- 8
~~~
4. Crie uma lista da tabela de filmes, mostre um relatório da quantidade de filmes por id. do gênero.
~~~sql
--
~~~

5. Na consulta anterior, liste apenas os gêneros que têm como soma de prêmios um número maior que 5.
~~~sql
--
~~~
