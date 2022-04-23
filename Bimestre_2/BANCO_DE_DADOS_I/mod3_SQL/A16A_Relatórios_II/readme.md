# Relatórios II

Em banco de dados, fazer relatórios é uma atividade muito importante. A importância de um banco de dados se traduz não só na capacidade de armazenar dados mas também de fornecer meios para extração de informações relevantes. Esta aula busca trazer o conhecimento necessário para a confecção de relatórios avançados usando as funções do banco de dados.

Dois fatores muito importantes para fazer os relatórios são em primeiro lugar sermos capazes de delimitar as relações por meio das chaves estrangeiras com suas respectivas chaves primárias. Consequentemente outro fator é, a partir daí, estabelecer o emparelhamento de duas tabelas ou mais.

Nesta aula, trataremos do Inner Join, uma função capaz de fazer esse emparelhamento a partir das chaves primárias e estrangeiras permitindo selecionar as informações relacionadas entre uma e outra tabela.

Este conteúdo é especialmente útil, pois é usado muito frequentemente na rotina profissional em desenvolvimento de software em aplicações que usam banco de dados relacionais. 


---

##  JOINS
#### O que é?

- Em primeiro lugar, o Join é a técnica de “juntar” tabelas para obter informações. 
- A cláusula usada em SQL para isso é INNER JOIN.
- O retorno é determinado pela correlação entre os dados de uma tabela com a outra, normalmente usando as chaves primárias e estrangeiras. 

Usando a cláusula Inner Join, estabelecemos o emparelhamento de tabelas. Observamos a importância das chaves primárias e estrangeiras para esta operação.

#### Tipos de JOIN
Até agora vimos como funciona INNER JOIN, mas ... Existe algum outro tipo de JOIN? A resposta é sim!

Embora existam algumas outras variantes de JOIN, nesta seção estudaremos apenas LEFT, LEFT Excluding, RIGHT y RIGHT Excluding.

#### INNER JOIN

O INNER JOIN entre duas tabelas retorna apenas os registros que atendem à condição indicada na cláusula ON.
~~~sql
SELECT coluna1, coluna2, …
FROM tabela A
INNER JOIN tabela B
ON condicao
~~~~
O INNER JOIN é a opção padrão e retorna todos os registros onde duas ou mais tabelas se cruzam. Por exemplo, se temos uma tabela de cliente e outra fatura, ao cruzá-las com INNER JOIN, retorna aqueles registros ou linhas onde há um valor correspondente em ambas as tabelas.

#### INNER KOIN

O LEFT JOIN entre duas tabelas retorna todos os registros da primeira tabela (neste caso seria a tabela A), mesmo quando os registros não atendam à condição indicada na cláusula ON.
~~~SQL
SELECT coluna1, coluna2, …
FROM tabela A
LEFT JOIN tabela B
ON condicao
~~~
Portanto, LEFT JOIN retorna todos os registros onde duas ou mais tabelas se cruzam. Mesmo se os registros de uma primeira tabela (A) não atendam à condição indicada na cláusula ON. Por exemplo, se tivermos uma tabela de clientes e outra fatura, ao cruzá-las, ele retorna aqueles registros onde há um valor de casamento entre as duas, mais os registros daqueles clientes que não possuem uma fatura atribuída.

##### LEFT Excluding JOIN
Este tipo de LEFT JOIN retorna apenas os registros de uma primeira tabela (A), excluindo os registros que atendem à condição indicada na cláusula ON. Por exemplo, se tivermos uma tabela de cliente e outra nota fiscal, ao cruzá-las, ele retorna apenas os registros de clientes que não possuem nota fiscal atribuída.


#### RIGHT JOIN

O RIGHT JOIN entre duas tabelas retorna todos os registros da segunda tabela, mesmo quando os registros não atendem à condição indicada na cláusula ON.
~~~SQL
SELECT coluna1, coluna2, …
FROM tabela A
RIGHT JOIN tabela B
ON condicao
~~~
Portanto, RIGHT JOIN retorna todos os registros onde duas ou mais tabelas se cruzam. Mesmo se os registros de uma segunda tabela (B)  não atendam à condição indicada na cláusula ON. Por exemplo, se tivermos uma tabela de cliente e outra fatura, ao cruzá-las, retorna aqueles registros onde há um valor de casamento entre as duas, mais os registros daquelas faturas que não têm um cliente atribuído.

##### RIGHT Excluding JOIN
Este tipo de RIGTH JOIN retorna apenas os registros de uma segunda tabela (B), excluindo os registros que atendem à condição indicada na cláusula ON. Por exemplo, se tivermos uma tabela de cliente e outra fatura, ao cruzá-las, ele retorna apenas aqueles registros de nota fiscal que não têm um cliente atribuído.


--- 

## Exercícios

De volta ao passado: Sakila
Introdução 

Sejam bem-vindos a esta aula assíncrona de volta ao passado. Por que chamamos assim? Porque vamos analisar os dados de um banco de dados de uma locadora de vídeo.

Agora você deve estar se perguntando… é isso? As locadoras de vídeo foram as antecessoras da Netflix, Amazon, Disney+ ou qualquer plataforma de streaming. A grande diferença era que tinha que ir pessoalmente para procurar o filme que queria ver.
Por que contamos isso? Para mostrar o tipo de banco de dados em contexto com o que vamos trabalhar, já que eles nos pediram uma série de relatórios daquela
base de dados.




Podemos começar?

Para começar, precisamos que você baixe o banco de dados do seguinte link: [SAKILA](https://drive.google.com/file/d/16RoYsXGLMCKtMVl7XnKtolzL67YCdzKr/view).

Este banco de dados está em um arquivo .sql que deve ser importado de MySQL Workbench. Certifique-se de ter aberto a conexão e de estar dentro do Painel "Navigator". Em seguida, na guia "Arquivo-> Abrir Script SQL", pesquise e abra o Sakila_corrigido.sql que você baixou. Por último, execute o script a partir do ícone de raio.
Depois que todas essas etapas forem concluídas, veremos quais relatórios eles nos solicitam.

Boa sorte! 😎👌✨








### Relatórios

##### Relatórios parte 1:


1. Obtenha o nome e o sobrenome dos primeiros 5 atores disponíveis, use Alias para exibir os nomes das colunas com a primeira letra maiúscula.
~~~SQL
-- 1.
SELECT nome AS 'Nome'
FROM ator
LIMIT 5;
~~~
2. Obtenha uma lista que inclua nome, sobrenome e e-mail dos clientes inativos. Use Alias para exibir os nomes das colunas com a primeira letra maiúscula.
~~~SQL
SELECT 
    nome AS Nome,  
    sobrenome AS Sobrenome, 
    LCASE(email) AS Email
FROM cliente
WHERE ativo = 0;
~~~
3. Obtenha uma lista de filmes, incluindo título, ano e descrição dos filmes que têm uma duracao_locacao maior que cinco. Classificar por duracao_locacao descendente e use Alias para exibir os nomes das colunas com a primeira letra maiúscula.
~~~sql
SELECT 
    titulo AS Titulo,
    descricao AS Descricao,
    ano_lancamento AS Lancamento
FROM filme
WHERE duracao_filme > 5
ORDER BY duracao_locacao DESC;
~~~
4. Obtenha uma lista de aluguéis que foram feitos durante o mês de Maio de 2005. Inclua todas as colunas disponíveis no resultado.
~~~sql
SELECT * 
FROM locacao
WHERE 
    DATE_FORMAT(data_locacao, '%m') = 05 
    AND
    DATE_FORMAT(data_locacao, '%Y') = 2005;
~~~




##### Relatórios parte 2: Adicionar complexidade

Se chegarmos até aqui, é porque já sabemos claramente qual é a estrutura básica de um SELECT. Nos relatórios a seguir, adicionaremos complexidade.
Vamos  testar?

1. Obtenha o valor TOTAL de locações, use um Alias para mostrá-lo em uma coluna chamada "Quantidade";
~~~sql
SELECT SUM(locacao_id) AS 'Quantidade'
FROM pagamento;
~~~

2. Obtenha a soma TOTAL de todos os pagamentos, use um Alias para mostrá-lo em uma coluna chamada "TOTAL", uma coluna com a quantidade de locações com o alias "Quantidade" e uma coluna indicando o "Valor Médio ”por locação;
~~~sql
SELECT 
    SUM(valor) AS 'TOTAL',
    COUNT(locacao_id) AS 'QUANTIDADE',
    AVG(valor)/locacao_id AS 'VALOR_MEDIO_LOCACAO'
FROM pagamento;
~~~

3. Gere um relatório que responda à pergunta: quais são os dez clientes que mais dinheiro gastam e quantas locações fizeram?

4. Gere um relatório que mostre: identificação do cliente, quantidade  de locações e valor total de todos os clientes que gastaram mais de $ 150 em locações.

5. Gere um relatório que mostre por mês o valor das locações e a quantidade de locações para o ano de 2005.
Dica: As tabelas que vocês deverão utiizar são pagamento e locacao.

Dica: As tabelas a serem utilizadas são aluguel e pagamento.


---

## Desafio extra - Join

Podemos começar?

É hora de aplicar os conhecimentos adquiridos. Para isso, vamos trabalhar com um novo banco de dados, onde teremos que criar consultas com as cláusulas INNER, LEFT, LEFT Excluding, RIGHT e RIGHT Excluding.

Para começar, precisamos que você baixe o banco de dados [clicando aqui](https://drive.google.com/file/d/1ZkOQWy3-8Ccku7eEs1np3CMaieKZFnJj/view). Este banco de dados está em um arquivo .sql que deve ser importado para o MySQL Workbench. Certifique-se de ter aberto a conexão e de estar dentro do painel “Navegador”. Em seguida, na guia "File-> Open SQL Script", procure e abra o Extra_Joins_DB.sql que você baixou. Por último, execute o script a partir do ícone de raio.
Depois que todas essas etapas forem concluídas, veremos quais relatórios eles nos solicitam.

Mãos à obra!😎👌✨




##### Relatórios - JOINS

Questões: 

1. Obtenha os artistas que atuaram em um ou mais filmes.
2. Obtenha os filmes onde mais de um artista participou de acordo com nosso banco de dados.
3. Liste todos os artistas, mesmo aqueles que ainda não atuaram em nenhum filme, de acordo com nosso banco de dados.
4. Obtenha filmes que não foram atribuídos a artistas em nosso banco de dados.
5. Pegue aqueles artistas que não atuaram em um filme, de acordo com nosso banco de dados.
6. Obtenha os artistas que atuaram em dois ou mais filmes de acordo com nosso banco de dados.
7. Obtenha os filmes que têm um ou mais artistas atribuídos, mesmo aqueles que ainda não foram atribuídos a um artista em nosso banco de dados.
