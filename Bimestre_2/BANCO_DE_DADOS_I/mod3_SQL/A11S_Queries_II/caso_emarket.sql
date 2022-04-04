use EMarket;


--------------------- Categorias e produtos ---------------------------
-- 1. Queremos ter uma lista de todas as categorias.
SELECT * FROM Categorias;

-- 2. Como as categorias não possuem imagens, você está interessado em obter apenas um Nome e descrição da lista de categorias.
SELECT CategoriaNome AS "Categoria", Descricao FROM Categorias;

-- Obtenha uma lista dos produtos.
SELECT * FROM Produtos;

-- Existem produtos descontinuados? (Descontinuado = 1). Não.
SELECT Descontinuado FROM Produtos WHERE Descontinuado = 1;

-- Na sexta-feira, você deve se reunir com o fornecedor nr. 8. Quais são os produtos que eles fornecem? 4 produtos, chocolate e biscoitos.
SELECT ProvedorID AS 'ID Fornecedor', ProdutoNome AS 'Produto' FROM Produtos
WHERE ProvedorID = 8;

-- Queremos saber todos os produtos cujo preço unitário se encontra entre 10 e 22.
SELECT PrecoUnitario
FROM Produtos
WHERE PrecoUnitario
BETWEEN 10 AND 22
ORDER BY PrecoUnitario;

-- Fica definido que um produto deve ser solicitado ao fornecedor se suas unidades em estoque forem inferiores ao nível de reabastecimento. Existem produtos a solicitar? Sim.
SELECT UnidadesEstoque, NivelReabastecimento FROM Produtos WHERE UnidadesEstoque < NivelReabastecimento;

-- Você quer saber todos os produtos da lista anterior, mas que as unidades pedidas sejam iguais a zero.
SELECT UnidadesEstoque, NivelReabastecimento FROM Produtos WHERE UnidadesEstoque < NivelReabastecimento AND UnidadesPedidas = 0;



--------------------- Clientes ---------------------------

-- Obtenha uma lista de todos os clientes com contato, empresa, cargo, País. Classifique a lista por país.
SELECT Empresa, Contato, Titulo AS "Cargo", Pais FROM Clientes;

-- Queremos atender todos os clientes que possuem o título de “Proprietário". Esse título estará em inglês (Owner).

SELECT Contato, Titulo AS 'Cargo' FROM Clientes WHERE Titulo = 'Owner'


-- A operadora de telefonia atendeu um cliente e não lembra o nome dele. Sabe apenas que começa com "C". Podemos ajudá-lo a obter uma lista com todos os contatos que começam com a letra C?

SELECT Contato FROM Clientes WHERE Titulo LIKE '%C%';

--------------------- Fatura ---------------------------

-- Obtenha uma lista de todas as faturas, ordenadas por data da fatura em ordem ascendente.
SELECT DataRegistro FROM Faturas ORDER BY DataRegistro;

-- Agora é necessário uma lista de faturas com o país de envio "EUA" e que a FormaeEnvio seja diferente de 3.
SELECT PaisEnvio, FormaEnvio FROM Faturas WHERE PaisEnvio = 'USA' AND FormaEnvio <> 3;

-- O cliente 'GOURL' fez um pedido? Sim.
SELECT ClienteID AS 'Cliente', NomeEnvio AS 'Restaurante', DataEnvio AS 'Data Envio' FROM Faturas WHERE ClienteID = "GOURL";


-- Você deseja visualizar todas as faturas dos funcionários 2, 3, 5, 8 e 9.
SELECT * FROM Faturas WHERE EmpregadoID IN (2,3,5,8,9); 

--------------------- Produtos

--Obtenha a lista de todos os produtos em ordem decrescente por preço unitário.
SELECT ProdutoNome, PrecoUnitario FROM Produtos ORDER BY PrecoUnitario DESC;

--Obtenha a lista dos 5 melhores produtos cujo preço unitário é o mais "Caro".
SELECT ProdutoNome, PrecoUnitario FROM Produtos WHERE PrecoUnitario > 60;

--Obtenha um top 10 dos produtos com mais unidades em estoque.
SELECT * FROM Produtos WHERE UnidadesEstoque ORDER BY UnidadesEstoque DESC LIMIT 10;



--------------------- DetalheFatura

--Obtenha uma lista de FaturaId, Produto, Quantidade.
SELECT FaturaID, ProdutoID, Quantidade FROM DetalheFatura;

--Classifique a lista acima por Quantidade decrescente.
SELECT FaturaID, ProdutoID, Quantidade FROM DetalheFatura ORDER BY Quantidade DESC;

--Filtre a mesma lista apenas para os produtos cuja quantidade esteja entre 50 e 100.
SELECT FaturaID, ProdutoID, Quantidade FROM DetalheFatura WHERE Quantidade BETWEEN 50 AND 100 LIMIT 50;

--Em outra nova consulta, obtenha uma lista com os seguintes nomes de coluna: Número da fatura (FaturaId), Produto (ProdutoId), Total (Preço Unitário * Quantidade).
SELECT FaturaID AS 'Nº Fatura', ProdutoID AS 'ID Produto', Quantidade, PrecoUnitario AS 'Preco Unitario', PrecoUnitario * Quantidade AS "Valor total" FROM DetalheFatura;



-------------------- EXTRAS


-- Obtenha uma lista de todos os clientes que moram no “Brasil” ou “México” ou que tenham um título que começa com "Vendas" (o termo estará em inglês: ‘Sales’);
select Titulo from Clientes;

SELECT * FROM Clientes WHERE Titulo LIKE 'Sales%' AND Pais = 'Brazil' ;

--Obtenha uma lista de todos os clientes que pertencem a uma empresa que comece com a letra “A”.

SELECT * FROM Clientes WHERE Empresa LIKE 'A%';


-- Obtenha uma lista com os seguinte dados: Cidade, Contato( renomeie para Nome e Sobrenome), Título (renomeie para Cargo), de todos os clientes que são da cidade "Madrid".
SELECT Cidade, Contato AS 'Nome e Sobrenome', Titulo AS 'Cargo' FROM Clientes WHERE Cidade = 'Madrid';


-- Obenha uma lista de todas as faturas com ID entre 10.000 e 10.500
SELECT * FROM Faturas WHERE FaturaId BETWEEN 10000 AND 10500;

-- Obtenha uma lista de todas as faturas com ID entre 10.000 e 10.500 ou de clientes com IDs começando com "B".
SELECT * FROM Faturas WHERE FaturaId BETWEEN 10000 AND 10500 || ClienteID LIKE 'B%';

-- Existem notas fiscais que informam a cidade expedidora “Vancouver” ou que utilizam FormaEnvio = 3?
SELECT * FROM Faturas WHERE CidadeEnvio = 'Vancouver' || FormaEnvio = 3;

-- Qual é a identificação do funcionário de “Buchanan”? 5.
use EMarket;

SELECT EmpregadoID, Sobrenome, Cidade, Nome FROM Empregados WHERE Sobrenome = 'Buchanan';

-- Existem Notas Fiscais com o EmpregadoId do funcionário acima? SIm muitas.
SELECT EmpregadoID, Sobrenome, Nome, Notas FROM Empregados WHERE Sobrenome = 'Buchanan';