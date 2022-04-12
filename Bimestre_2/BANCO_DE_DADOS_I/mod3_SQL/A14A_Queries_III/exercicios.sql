-- 
-- Referência de Tabelas #1 - Faça uma consulta no banco de dados onde mostre todos os registros que contenham músicas com seus gêneros, 
-- E que o compositor seja Willie Dixon, E que tenham o gênero Blues. A 2ª música encontrada foi:

use musimundos;

show tables;

select * from cancoes;
INNER JOIN generos as g ON 
