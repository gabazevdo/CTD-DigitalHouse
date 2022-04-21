-- Questionário A14A-Queries_III
-- Base de dados musimundos;

use musimundos;

-- 1
-- Referência de Tabelas #1 
-- Faça uma consulta no banco de dados onde mostre todos os registros que contenham músicas com seus gêneros, 
-- E que o compositor seja Willie Dixon, E que tenham o gênero Blues. A 2ª música encontrada foi:
SELECT DISTINCT * FROM cancoes AS can
INNER JOIN generos AS gen
ON can.id_genero = gen.id
WHERE can.compositor = 'Willie Dixon' AND gen.nome = 'Blues';

-- 2
-- Joins #1 
-- Faça uma consulta ao nosso banco de dados que nos retorna as únicas músicas que possuem gênero rock. 
-- Qual é a música que aparece em quarto lugar?
SELECT DISTINCT * FROM cancoes AS can
INNER JOIN generos AS gen
ON can.id_genero = gen.id
WHERE gen.nome = 'Rock';

-- 3
-- Joins #2 
-- Faça uma consulta ao nosso banco de dados que nos traga o título do álbum e o autor, 
-- para saber se o que estamos vendendo está correto.Qual o título do álbum que aparece na posição número 10?
SELECT alb.titulo AS 'Titulo Album', art.nome AS 'Artista'
FROM albuns AS  alb
INNER JOIN artistas AS art
ON alb.id_artista = art.id
LIMIT 10;

-- 4
-- Joins #3 
-- Faça uma consulta que retorne o nome das músicas e o tipo de arquivo "MPEG audio file". Qual o nome da músca que aparece na posição número 4?
SELECT can.nome AS 'Música', tip.nome AS 'Extensão' 
FROM cancoes as can
INNER JOIN tipos_de_arquivo AS tip
ON can.id_tipo_de_arquivo = tip.id
WHERE tip.nome = 'MPEG audio file'
LIMIT 4;


-- 5
-- Distinct #1 
-- Faça uma consulta na tabela empregados. O cargo que aparece na 3a. posição é: 
SELECT DISTINCT titulo AS 'Cargo' FROM empregados LIMIT 3;

-- 6
--  Distinct #2 - Ranking cancoes:
-- Faça uma consulta com o nome de todas as músicas que estão em uma lista de reprodução, 
-- e o nome da lista de reprodução a que pertencem.Observação! Tenhamos cuidado para não repetir os nomes das músicas.
-- Para esta consulta, teremos que usar informações das tabelas cancoes, cancoes_playlists e playlists. O título da música na 5a. posição é:
SELECT can.id AS 'ID canção', can.nome AS 'Canção', pl.id AS 'ID PlayList', pl.nome AS 'PlayList'
FROM cancoes_playlists AS cp
RIGHT JOIN cancoes AS can
ON cp.id_cancao
LEFT JOIN playlists AS pl
ON pl.id
LIMIT 5;

-- 7
-- Funcoes MySQL I #1 - Ranking cancoes 2: 
-- O departamento de desenvolvimento da Musimundos está preparando a parte do aplicativo em que acessamos uma determinada música. 
-- Eles nos dizem que um texto específico deve aparecer abaixo da imagem da música:"A música" (nome do tema) "foi composta por" (compositor do tema).
-- Faça uma consulta ao nosso banco de dados que nos traga o nome e o compositor de cada música, sem repetições, adicionando o texto acima. 
-- O primeiro resultado é:
SELECT CONCAT('A música ', nome, ' ', 'foi composta por ', compositor) AS 'Apresentando a música'
FROM cancoes
LIMIT 1;

-- 8
-- Funcoes MySQL I #2 - Faturas: 
-- Faça uma consulta ao banco de dados que nos traga a primeira coluna não nula que encontrar entre as colunas estado_cobranca, pais_cobranca e cep_cobranca. 
-- O primeiro resultado obtido é:
SELECT estado_cobranca, pais_cobranca, cep_cobranca 
FROM faturas
GROUP BY cep_cobranca;

-- 9
-- Funcoes MySQL I #3 - Idade Empregados: 
-- Faça uma consulta no banco de dados que mostre a diferença entre sua data de nascimento e a data de contratação.Digite a terceira diferença que você obteve. 
-- DICA: Lembre-se de que DATEDIFF () retorna a diferença entre as datas expressas em DIAS. 
-- Levando isso em consideração e sabendo que um ano tem 365 dias, como você faria a consulta?Para ajudá-lo, apresentamos a função FLOOR (), 
-- que arredonda qualquer número para casas decimais.
SELECT FLOOR(DATEDIFF(data_contratacao, data_nascimento)/365)
FROM empregados
LIMIT 3;

-- 10
-- Funções MySQL I #4 - Última fatura: 
-- Faça uma consulta ao banco de dados que traga todas as faturas do cliente número 2 solicitadas por sua data e extraia o mês. 
-- Qual foi o mês da sua última fatura?
SELECT DATE_FORMAT(fat.data_fatura, '%m' ) AS 'Mês fatura'
FROM faturas AS fat
INNER JOIN clientes AS cli
ON fat.id_cliente = cli.id
WHERE cli.id = 2
