USE musimundos;

-- 1
-- Crie uma view chamada FATURAS_NACIONAIS. 
-- A view deve ter as seguintes colunas: id da fatura, data da fatura, id do cliente, nome do cliente, sobrenome do cliente e total da fatura, e deve incluir apenas faturas do Brasil (Brazil). 
-- Em seguida, execute SELECT * FROM FATURAS_NACIONAIS. Quantos registros a consulta retorna?

CREATE VIEW FATURAS_NACIONAIS AS
SELECT  
    f.id, 
    f.data_fatura, 
    c.nome, c.sobrenome, 
    f.pais_cobranca
FROM faturas AS f
INNER JOIN clientes AS c
ON f.id_cliente = c.id
WHERE f.pais_cobranca = 'Brazil'
GROUP BY c.id;

SELECT * FROM FATURAS_NACIONAIS ;
SELECT COUNT(*) FROM FATURAS_NACIONAIS ;
-- Resposta: 5

-- 2
-- Crie uma view chamada LATINOS com informações sobre os artistas com seus álbuns e músicas. 
-- A view deve ter as seguintes colunas: nome do artista, título do álbum, nome da música e deve incluir apenas as músicas do gênero 'latino'. 
-- Faça uma seleção na visualização LATINOS ordenada por nome de artista e música. 
-- Qual é o nome da segunda música que aparece no resultado?

CREATE VIEW LATINOS AS
SELECT
	ar.nome AS 'Artista',
    al.titulo AS 'Album',
    ca.nome AS 'Musica'    
FROM albuns AS al
INNER JOIN artistas AS ar
ON al.id_artista = ar.id
INNER JOIN cancoes AS ca
ON al.id = ca.id_album
INNER JOIN generos AS ge
ON ca.id_genero = ge.id
WHERE ge.nome = 'Latin'
ORDER BY ar.nome, ca.nome
;

SELECT * FROM LATINOS LIMIT 2;
-- Resposta: Alice


-- 3
-- Crie uma View chamada Faturas_Brazil, que exiba o nome e sobrenome dos clientes, o país de cobrança e a soma das faturas dos clientes 
-- cujo país de cobrança seja ‘Brazil’. Execute a view e responda: Qual o valor da fatura mais cara?
CREATE VIEW FATURAS_BRASIL AS
SELECT
	c.nome AS 'Nome',
    c.sobrenome AS 'Sobrenome',
    f.pais_cobranca AS 'Pais',
    sum(f.valor_total)
FROM clientes c
INNER JOIN faturas AS f
ON f.id_cliente = c.id
WHERE f.pais_cobranca = 'Brazil'
GROUP BY c.nome;

SELECT * FROM FATURAS_BRASIL;
-- Resposta: 39,62

-- 4
-- Ainda sobre a view Faturas_Brasil, responda: Qual o nome e sobrenome do cliente que aparece na quarta posição?
CREATE VIEW FATURAS_BRASIL AS
SELECT
	c.nome AS 'Nome',
    c.sobrenome AS 'Sobrenome',
    f.pais_cobranca AS 'Pais',
    sum(f.valor_total)
FROM clientes c
INNER JOIN faturas AS f
ON f.id_cliente = c.id
WHERE f.pais_cobranca = 'Brazil'
GROUP BY c.nome;

SELECT * FROM FATURAS_BRASIL
LIMIT 4;