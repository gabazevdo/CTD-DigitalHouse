-- NA BASE DE DADOS DO E-MARKET
USE EMarket;
-- 1 Faça uma consulta sobre o faturamento do e-market. Inclua as seguintes informações:
-- ID da fatura
-- data da fatura
-- nome da empresa de correio (O id da empresa consta da tabela faturas no campo FormaEnvio)
-- nome do cliente
-- categoria do produto vendido
-- nome do produto(Você chega ao produto consultando os detalhes da fatura)
-- preço unitário
-- quantidade
;

show tables;

SELECT f.FaturaId, f.DataFatura, co.Empresa , cl.ClienteID, dt.FaturaId, pr.ProdutoNome, dt.PrecoUnitario, ct.CategoriaNome
FROM Faturas AS f
INNER JOIN Correios AS co ON f.FormaEnvio = co.CorreioID
INNER JOIN Clientes AS cl ON f.ClienteID = cl.ClienteID
INNER JOIN DetalheFatura AS dt ON f.FaturaID = dt.FaturaId
INNER JOIN Produtos AS pr ON pr.ProdutoID = dt.ProdutoID
INNER JOIN Categorias AS ct ON pr.ProdutoID = ct.CategoriaID;
;

-- 2 Crie uma view dos produtos que será usada ​​para controle de estoque. 
-- Inclua o id e nome do produto, preço unitário arredondado sem decimais, unidades
-- em estoque e as unidades encomendadas. Inclua também uma nova coluna PRIORIDADE, com os seguintes valores:
-- BAIXA se as unidades encomendadas forem zero
-- MÉDIA se as unidades pedidas forem menores do que as unidades em estoque
-- URGENTE se as unidades pedidas não dobrarem o número de unidades em estoque
-- PRIORITÁRIO caso contrário
;
CREATE VIEW VW_DADOS_PRODUTOS AS(
SELECT ProdutoID, ProdutoNome, ROUND(PrecoUnitario ,0) AS 'Preço', UnidadesEstoque, 
    CASE
      WHEN UnidadesPedidas = 0 THEN 'BAIXA'
      WHEN UnidadesPedidas < UnidadesEstoque THEN 'MÉDIA'
      WHEN UnidadesPedidas < UnidadesEstoque * 2 THEN 'URGENTE'
      ELSE 'PRIORITÁRIO' 
    END AS 'PRIORIDADE ENVIO'
  FROM Produtos
);

SELECT * FROM VW_DADOS_PRODUTOS;

-- 3 VAMOS INSERIR UM NOVO PRODUTO?
-- ProdutoNome = Paprica
-- ProvedorID = Bigfoot Breweries | Esta chave esta especificada na tabela Provedores, na coluna Empresa.
-- CategoriaID = Condiments | Esta chave esta especificada na tabela Categorias, na coluna CategoriaNome

INSERT INTO Produtos(ProdutoNome, ProvedorID, CategoriaID)
VALUES (
    'Paprica', 
    (SELECT ProvedorID FROM Provedores WHERE Empresa = 'Bigfoot Breweries'), 
    (SELECT CategoriaID FROM Categorias WHERE CategoriaNome = 'Condiments')
);

SELECT * FROM Categorias WHERE CategoriaNome = 'Condiments';

-- 4 VAMOS ATUALIZAR O PRODUTO Ikura?
-- Tabela Produtos
-- Coluna ProdutoNome -> Sikura
-- Coluna UnidadesEstoque -> 14
;

UPDATE Produtos AS p
SET p.ProdutoNome = 'Sikura', p.UnidadesEstoque = '14'
WHERE p.ProdutoID = 10;
SELECT * FROM Produtos WHERE ProdutoNome = 'Sikura';


UPDATE Produtos as po, (SELECT ProdutoID FROM Produtos WHERE ProdutoNome = 'Ikura') as p
SET po.ProdutoNome = 'Sikura', po.UnidadesEstoque = '14'
WHERE po.ProdutoID = p.ProdutoID;
UPDATE Produtos, (SELECT ProdutoID FROM Produtos WHERE ProdutoNome = 'Ikura') as p
SET Produtos.ProdutoNome = 'Sikura', Produtos.UnidadesEstoque = '14'
WHERE Produtos.ProdutoID = p.ProdutoID;



-- 5 VAMOS REMOVER O PRODUTO Konbu?

delete from Produtos where ProdutoNome = 'Konbu';
SELECT * FROM Produtos WHERE ProdutoNome = 'Konbu';
-- o produto Konbu ele possui faturas atrelas
SELECT 
    * 
FROM Produtos P 
INNER JOIN DetalheFatura DF ON DF.ProdutoID = P.ProdutoID
WHERE P.ProdutoNome = 'Konbu';
DELETE FROM DetalheFatura WHERE ProdutoID = (SELECT ProdutoID FROM Produtos WHERE ProdutoNome = 'Konbu');
DELETE FROM Produtos WHERE DetalhesFatura;

-- 6 QUANTAS VEZES O PRODUTO Alice Mutton APARECE NA TABELA DetalheFatura
-- PS.: VAMOS UTILIZAR UM SUBSELECT?
;
-- 7 VAMOS FORMATAR TODAS AS COLUNAS DA TABELA Categorias PARA UM NOME MAIS AMIGAVEL?
-- PS.: SE A MESMA NÃO POSSUIR IMAGEM, VAMOS EXIBIR A MENSAGEM DE 'SEM IMAGEM' NO RETORNO
;
-- 8 VAMOS EXIBIR O NOME DE TODOS OS EMPREGADOS (Tabela Empregados) EM UMA COLUNA 
-- E O NOME DO GESTOR EM OUTRA?
;
-- NA BASE DE DADOS BD_EXERCICIOS (ENVIADA NO DISCORD)
USE BD_EXERCICIOS;

-- 9 A partir dos dados dos clientes (TABELA cliente), eu desejo os 10 primeiros registros da seguinte forma:
-- - Primeiro e último nome concatenados
-- - Status (ativo/inativo)
-- - Data de entrada(criação) dentro do sistema
-- - ID da loja que o mesmo está vinculado
-- - Endereço 1
-- - Endereço 2
-- - Telefone
-- - CEP
-- - Nome da cidade
-- - Nome do país
;    
-- 10 Eu desejo saber a partir de um ator informado pelo ID passado via condição, quantos filmes o mesmo possui da
-- seguinte forma
-- - ID do ator
-- - Primeiro e último nome do ator concatenados
-- - Quantidade de filmes estrelados em minha locadora
;