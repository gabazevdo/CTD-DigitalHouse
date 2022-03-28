use filmes_db;

--SELECT
--Mostre todos os registros da tabela filmes.
SELECT * FROM filmes;

--Mostre o nome, sobrenome e avaliação de todos os atores.
SELECT nome, sobrenome, avaliacao FROM atores;

--Mostre o título de todas as séries.
SELECT titulo FROM series;

--WHERE e ORDER BY
--Mostre o nome e o sobrenome dos atores cuja avaliação é superior a 7,5.
SELECT nome, sobrenome, avaliacao FROM atores WHERE avaliacao > 7.5;

--Mostre o título dos filmes, a avaliação e os prêmios dos filmes com avaliação superior a 7,5 e com mais de dois prêmios.
SELECT titulo, avaliacao, premios FROM filmes WHERE avaliacao > 7.5 AND premios >= 2;

--Mostre o título dos filmes e a avaliação ordenado por avaliação em ordem decrescente.
SELECT titulo, avaliacao FROM filmes ORDER BY avaliacao ASC;

--BETWEEN e LIKE
--Mostre o título e a avaliação de todos os filmes cujo título inclui Toy Story.
SELECT titulo, avaliacao FROM filmes WHERE titulo LIKE 'Toy Story';

--Mostre todos os atores cujos nomes começam com Sam.
SELECT nome, sobrenome FROM atores;
SELECT nome, sobrenome FROM atores WHERE nome LIKE '%Sam'; 

--Mostre o título dos filmes lançados entre '01-01-2004' e '31-12-2008'.
SELECT titulo, data_lancamento FROM filmes WHERE data_lancamento BETWEEN '2004-01-01' AND '2008-12-31';
