USE musimundos;

-- Na tabela faturas:
-- 1 - O valor da fatura mais alta cujo a cidade de cobrança é “Oslo”.
SELECT valor_total, MAX(cidade_cobranca) 
FROM faturas
WHERE cidade_cobranca = 'Oslo';

-- 2 - O valor da fatura mais baixa de todas.
SELECT MIN(valor_total)
FROM faturas;

-- 3 - O valor médio das faturas que o país de cobrança é “Canada”.
SELECT AVG(valor_total) 
FROM faturas
WHERE pais_cobranca = 'Canada';

-- 4 - A quantidade de faturas que o país de cobrança é “Canada”.
SELECT COUNT(id)
FROM faturas
WHERE pais_cobranca = 'Canada';

-- 5 - O valor total somado de todas as faturas.
SELECT SUM(valor_total)
FROM faturas;

-- 6 - Selecione o id, a data e valor das faturas com valor abaixo da média.
SELECT id, data_fatura, valor_total 
FROM faturas 
WHERE valor_total < (SELECT AVG(valor_total) FROM faturas);

-- Na tabela empregados:
-- 7 - A data de nascimento do funcionário mais jovem da empresa
SELECT nome, data_nascimento
FROM empregados
WHERE data_nascimento = (SELECT MAX(data_nascimento) FROM empregados);

-- 8 - A data de nascimento do funcionário mais velho da empresa
SELECT nome, data_nascimento
FROM empregados
WHERE data_nascimento = (SELECT MIN(data_nascimento) FROM empregados);

-- 9 - Formate a data do nascimento dos funcionários no formato ex: "02 May 2020". (DATE_FORMAT)
SELECT DATE_FORMAT(data_nascimento, '%d %M %Y')
FROM empregados;

-- Na tabela cancoes: 
-- 10 - O numero de cancoes que tem como compositor “AC/DC”. 
SELECT COUNT(*)
FROM cancoes
WHERE compositor = 'AC/DC';

-- 11 - A duração média das músicas em milisegundos
SELECT ROUND(AVG(duracao_milisegundos), 2)
FROM cancoes;

-- 12 - O tamanho médio em bytes das músicas que como compositor “AC/DC”.
SELECT ROUND(AVG(bytes), 2)
FROM cancoes
WHERE compositor = 'AC/DC';

-- Na tabela clientes:
-- 13 - Quantidade de clientes que moram na cidade de “São Paulo”.
SELECT COUNT(id)
FROM clientes
WHERE cidade = 'São Paulo';

-- 14 - Quantidade de clientes que moram na cidade “Paris”.
SELECT COUNT(id)
FROM clientes
WHERE cidade = 'Paris';

-- 15 - Quantidade de clientes que tenham email do “yahoo”. 
SELECT COUNT(id)
FROM clientes
WHERE email LIKE '%yahoo%';