# Exercicios 

## Verificando o BD eMarket


Vamos praticar em consultas SELECT, com foco em Joins.

Dicas:
Cada declaração corresponde a uma consulta SELECT.
Lembre-se de salvar as consultas. SQL.


Consultas
1. Liste os clientes que fizeram compras durante 1996.
A lista deve conter as seguintes colunas:
- Contato 
- Título
Obs: Apresente os dados da coluna Titulo em maiúsculo.

~~~SQL
SELECT  
    c.ClienteID AS 'Cliente', 
    UPPER(c.Titulo) AS 'Cargo',  
    DATE_FORMAT(f.DataRegistro, '%d/%m/%Y') AS 'Data_Registro' 
FROM Clientes AS c
INNER JOIN Faturas AS f
ON  c.ClienteID = f.ClienteID
WHERE DATE_FORMAT(f.DataRegistro, '%Y') = '1996';
~~~

2. Liste as faturas para as quais a remessa foi para uma cidade diferente da cidade do cliente. Considere apenas os clientes do Reino Unido.
A listagem deve incluir:
- O número da fatura completando com zeros principais 8 itens. Por exemplo, 00001234
- A data da fatura no formato YYYY-MM-DD. Por exemplo, 1996-12-01
- Para a cidade do cliente

~~~sql
SELECT  
    c.Cidade AS 'Cidade', 
    f.CidadeEnvio AS 'Cidade_Envio', 
    LPAD(f.FaturaID,8,'0') AS 'IDFatura', 
    DATE_FORMAT(f.DataFatura, '%d/%m/%Y') AS 'Data_Fatura'
FROM Clientes AS c
INNER JOIN Faturas AS f
ON  c.ClienteID = f.ClienteID
WHERE  c.Cidade != f.CidadeEnvio AND c.Cidade = 'Reino Unido';
~~~

---

## Mesa de trabalho

### Atividade

Revisão de adesões e funções

1. Liste o nome das empresas de correio, a quantidade de vendas (faturas geradas)  e o valor total do transporte. Para esta consulta, utilize as tabelas correios e faturas.
~~~SQL
SELECT
    c.Empresa AS 'Empresa',
    COUNT(f.DataFatura) AS 'Total_transpotes',
    ROUND(SUM(f.Transporte), 2) AS 'Valor_total'
FROM Correios as c
INNER JOIN Faturas as f
ON c.CorreioID = f.FormaEnvio
GROUP BY c.Empresa;
~~~


2. Liste os dados dos clientes que fizeram compras (contato, titulo, endereco, cidade, etc). Utilize o CONCAT para personalizar os dados de cada coluna Ex. CONCAT('Sr/a ',Contato). Atente para não exibir clientes repetidos e ordene os clientes de forma ascendente..

~~~sql
SELECT
	CONCAT('Sr/a ', Contato) AS 'Cliente', 
    Titulo AS 'Funcao', 
    CONCAT(Endereco,', ' ,Cidade,', ', Pais,', ', CodigoPostal) AS 'Endereco'
FROM Clientes
ORDER BY Contato ASC;
~~~

3. Liste todas as categorias, a descrição e a quantidade de produtos existentes de cada categoria. Neste relatório deve aparecer apenas categorias que possuam produtos vinculados.

~~~sql
SELECT 
	c.CategoriaNome AS 'Categoria',
    c.Descricao,
    p.QuantidadePorUnidade AS 'Quantidade'
FROM Produtos AS p
INNER JOIN Categorias AS c
ON p.CategoriaID = c.CategoriaID;
~~~