USE EMarket;
-- Clientes
-- 1. Crie uma View com os seguintes dados do cliente: Id, contato, Fax e o telefone.

CREATE VIEW VW_CONTATO_CLIENTES AS (
SELECT
    ClienteID, Contato, Fax, Telefone
FROM
    Clientes);

SELECT * FROM VW_CONTATO_CLIENTES;

-- 2. Liste os números de telefone dos clientes que não possuem fax. Faça isso de duas maneiras diferentes: a. Consultando a tabela clientes b. Consultando a view do cliente

SELECT
    Fax, Telefone
FROM 
    VW_CONTATO_CLIENTES
WHERE fax = '';

SELECT
    Fax, Telefone
FROM 
    Clientes
WHERE fax = '';

-- Fornecedores

-- 1. Crie uma view com os seguintes dados do fornecedor: Id, contato, empresa e endereço. Para o endereço, pegue o endereço, cidade, código postal e país.
CREATE VIEW VW_FORNECEDOR AS(
SELECT 
    ProvedorID, Contato, Empresa, CONCAT(Endereco,' ', Cidade, ' ', CodigoPostal, ' ',Pais) as Endereco
FROM
    Provedores);
SELECT * FROM VW_FORNECEDOR;

-- 2. Liste os fornecedores que moram na Avenida das Americanas, no Brasil. Faça de duas formas diferentes: a. Consultando a tabela de fornecedores b. Consultando a view do fornecedor

SELECT
    Empresa, Contato, Endereco
FROM 
    Provedores
WHERE Endereco LIKE '%Americanas%';

SELECT
    Empresa, Contato, Endereco
FROM 
    VW_FORNECEDOR
WHERE Endereco LIKE '%Americanas%';