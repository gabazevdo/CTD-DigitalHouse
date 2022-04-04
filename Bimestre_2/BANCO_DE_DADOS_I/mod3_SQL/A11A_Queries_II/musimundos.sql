USE musimundos;

SHOW TABLES;

-- 1. Os gerentes da Musimundos estão pensando em uma expansão nos negócios e precisam saber quais são os clientes cadastrados na empresa. 
-- Dica: Neste exercício você deve gerar o Select no Workbench, executar e a partir da lista de resultados, encontrar o que é solicitado no demonstrativo.
-- Resposta: 59.

SELECT COUNT(*) FROM clientes;


-- 2. Agora que temos os nomes dos clientes, precisamos que você obtenha apenas os que são dos EUA.
-- Informe o nome do terceiro cliente que apareceu na sua consulta. 
-- Dica: Neste exercício você deve gerar o Select no Workbench, executar e a partir da lista de resultados, encontrar o que é solicitado no demonstrativo.
-- Resposta: Michelle.
SELECT nome, pais FROM clientes WHERE pais ='USA' LIMIT 1 OFFSET 2;
-- LIMIT em apenas 1 registro a partir do OFFSET


-- 3. Vamos melhorar um pouco a seleção. O departamento de música pede um relatório de músicas cuja duração seja entre 200.000 e 300.000 milissegundos. Você se anima?
-- Por favor, informe o nome da quinta música que você obteve.
-- Dica: Neste exercício você deve gerar o Select no Workbench, executar e a partir da lista de resultados, encontrar o que é solicitado no demonstrativo.
-- Resposta: Inject The Venom.

SELECT nome FROM cancoes WHERE duracao_milisegundos BETWEEN 200000 AND 300000 LIMIT 1 OFFSET 4;
-- LIMIT em apenas 1 registro a partir do OFFSET


-- 4. URGENTE! Uma banda argentina acaba de lançar um álbum e nos pediu uma lista de clientes que falam espanhol para que pudessem divulgar seu produto. 
-- Solicitamos que obtenha uma lista de clientes cujo país de origem é a Espanha ou a Argentina. Sorte neste desafio!
-- Informe o nome do primeiro cliente listado.
-- Dica: Neste exercício você deve gerar o Select in Workbench, executar e a partir da lista de resultados, encontrar o que é solicitado no demonstrativo.
-- Resposta: Enrique.

select pais from clientes;
SELECT nome, pais FROM clientes WHERE pais = 'Argentina'; -- Diego
SELECT nome, pais FROM clientes WHERE pais = 'Spain'; -- Enrique


-- 5. A Musimundos deseja adicionar uma lista com todos os gêneros aos quais seus álbuns pertencem, mas classificados por nome em ordem alfabética.
-- Informe o nome do terceiro gênero que você obteve.
-- Dica: Neste exercício você deve gerar o Select in Workbench, executar e a partir da lista de resultados, encontrar o que é solicitado no demonstrativo.
-- Resposta: BLUES.

SELECT nome FROM generos ORDER BY nome LIMIT 1 OFFSET 2;


-- 6. Os gerentes estão muito satisfeitos com seu trabalho! Mas as tarefas ainda não acabaram.
-- Agora precisam de uma lista apenas com os nomes dos clientes da Musimundos, ordenados por país de origem (decrescente) e, como segundo parâmetro, por cidade. 
-- Está preparado?
-- Informe o nome do sexto cliente que você obteve.
-- Resposta: Frank.
SELECT nome FROM clientes order by pais DESC, cidade LIMIT 1 OFFSET 5;
