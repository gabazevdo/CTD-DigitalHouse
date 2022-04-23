USE EMarket;


-- EX1.
SELECT  
    c.ClienteID AS 'Cliente', 
    UPPER(c.Titulo) AS 'Cargo',  
    DATE_FORMAT(f.DataRegistro, '%d/%m/%Y') AS 'Data_Registro' 
FROM Clientes AS c
INNER JOIN Faturas AS f
ON  c.ClienteID = f.ClienteID
WHERE DATE_FORMAT(f.DataRegistro, '%Y') = '1996';


-- EX2.
SELECT  
	c.Cidade AS 'Cidade', 
    f.CidadeEnvio AS 'Cidade_Envio', 
    LPAD(f.FaturaID,8,'0') AS 'IDFatura', 
    DATE_FORMAT(f.DataFatura, '%d/%m/%Y') AS 'Data_Fatura'
FROM Clientes AS c
INNER JOIN Faturas AS f
ON  c.ClienteID = f.ClienteID
WHERE  c.Cidade != f.CidadeEnvio AND c.Cidade = 'Reino Unido';


-- --------------------- EXERCÍCIO MESA DE TRABALHO


-- EX1.
SELECT
    c.Empresa AS 'Empresa',
    COUNT(f.DataFatura) AS 'Total_transpotes',
    ROUND(SUM(f.Transporte), 2) AS 'Valor_total'
FROM Correios as c
INNER JOIN Faturas as f
ON c.CorreioID = f.FormaEnvio
GROUP BY c.Empresa;


-- EX2.
SELECT
	CONCAT('Sr/a ', Contato) AS 'Cliente', 
    Titulo AS 'Funcao', 
    CONCAT(Endereco,', ' ,Cidade,', ', Pais,', ', CodigoPostal) AS 'Endereco'
FROM Clientes
ORDER BY Contato ASC;


-- EX3.
SELECT 
	c.CategoriaNome AS 'Categoria',
    c.Descricao,
    p.QuantidadePorUnidade AS 'Quantidade'
FROM Produtos AS p
INNER JOIN Categorias AS c
ON p.CategoriaID = c.CategoriaID;
