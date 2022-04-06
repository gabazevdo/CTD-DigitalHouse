-- Para este questionário, utilize a base de dados Musimundos

use musimundos;


-- Funcões, Group by y Having #1 
-- Clientes de Brasil: A quantidade de clientes do Brasil é:

SELECT pais, COUNT(id) AS 'Quantidade registros' FROM clientes WHERE pais = 'brazil';
-- R: 5

-- Funções, Group by e Having #2 - 
-- Canções por gênero: Faça uma consulta ao banco de dados que mostre a identificação do gênero e o número de músicas que possui. O número que você obteve como resultado do número de músicas do gênero com id = 6 foi:

SELECT id_genero, COUNT(nome) FROM cancoes WHERE id_genero = 6;
-- R: 81



-- SQL- Funções, Group by e Having #3 - 
-- Balanço comercial: Faça uma consulta ao nosso banco de dados que some o total de todas as notas fiscais emitidas pela empresa. O resultado  encontrado foi:

SELECT SUM(valor_total) FROM faturas;
-- R: 2.328,60



-- Funções, Group by e Having #4 - 
-- Duração dos álbuns: Obtenha uma lista de todos os álbuns e sua duração média (milissegundos). O número da média obtida para o álbum 4 foi:

SELECT id_album, AVG(duracao_milisegundos) FROM cancoes WHERE id_album = 4;
-- R: 306657.3750

-- Funções, Group by e Having #5 
-- Movendo arquivos: Faça uma consulta ao banco de dados e informe qual é o arquivo de música  com o menor peso em bytes.

SELECT MIN(bytes) FROM cancoes;
-- R: 38747


-- Funções, Group by e Having #6 
-- Desconto: Faça uma consulta ao banco de dados que nos traga por cliente_id a soma total de suas faturas. 
-- Filtre aqueles em que a soma do total é > 45. Qual é a soma total do cliente com id = 6? 

SELECT SUM(valor_total) FROM faturas WHERE id_cliente = 6;
-- R: 49.62

