-- Utilizando a base de dados musimundos_v2, na tabela faturas crie as procedures:

-- Gabriel Azevedo Silva
-- Glaucia Ximenes
-- Dainele Mendes
-- Ricardo de Freitas
-- Mariana Moraites 

use musimundos;

-- -------------- PARTE 1 ---- tabela faturas

-- 1.1 Crie uma procedure que selecione o valor da fatura com o valor mais baixo.
DELIMITER $$
CREATE PROCEDURE SP_FATURA_VALOR_BAIXO()
BEGIN
	SELECT valor_total AS 'Valor mais baixo' FROM faturas ORDER BY valor_total LIMIT 1;
END $$
CALL SP_FATURA_VALOR_BAIXO();

-- 1.2 Crie uma procedure que retorna a quantidade de faturas que tem o país de cobrança como “Canada”
DELIMITER $$
CREATE PROCEDURE SP_FATURA_PAIS_CANADA(
IN paramPais VARCHAR(255)
)
BEGIN
	SELECT * FROM faturas WHERE pais_cobranca = paramPais;
END $$
CALL SP_FATURA_PAIS_CANADA('Canada');

-- 1.3 Uma procedure que retorna o valor somado de todas as faturas.
DELIMITER $$
CREATE PROCEDURE SP_SOMA_FATURAS()
BEGIN
	SELECT SUM(valor_total) AS 'Valor total das faturas' FROM faturas;
END $$
CALL SP_SOMA_FATURAS();

-- 1.4 Uma procedure que retorna o valor médio de todas as faturas.
DELIMITER $$
CREATE PROCEDURE SP_MEDIA_FATURAS()
BEGIN
	SELECT AVG(valor_total) AS 'Media valor total das faturas' FROM faturas;
END $$
CALL SP_MEDIA_FATURAS();


-- -------------- PARTE 2 ---- tabela cancoes
-- 2.1 Crie uma procedure que retorna o tamanho em bytes e a duração de uma canção pelo seu id.
DELIMITER $$
CREATE PROCEDURE SP_CANCOES_BYTES_DURACAO(
IN paramId INT
)
BEGIN
	SELECT bytes, duracao_milisegundos  FROM cancoes WHERE id = paramId;
END $$
CALL SP_CANCOES_BYTES_DURACAO(15);

-- 2.2 Crie uma procedure que retorna o preço unitário de uma canção pelo seu id.
DELIMITER $$
CREATE PROCEDURE SP_CANCOES_PRECO_UNITARIO(
IN paramId INT
)
BEGIN
	SELECT preco_unitario  FROM cancoes WHERE id = paramId;
END $$
CALL SP_CANCOES_PRECO_UNITARIO(5);

-- 2.3 Crie uma procedure que retorna o id da canção, o nome da canção e o tipo de arquivo
-- (table tipos_de_arquivo) desta canção á partir de um id da canção informado.

DELIMITER $$
CREATE PROCEDURE SP_CANCAO_TIPO_ARQUIVO(
IN paramIdCancao INT
)
BEGIN
	SELECT c.id AS 'ID da Canção', 
			c.nome AS 'Nome', 
            t.nome AS 'Tipo Arquivo' 
	FROM cancoes c 
	INNER JOIN tipos_de_arquivo t 
	ON t.id = c.id_tipo_de_arquivo
	WHERE c.id = paramIdCancao;
END $$
CALL SP_CANCAO_TIPO_ARQUIVO(5);


-- -------------- PARTE 3 ---- tabela clientes

-- 3.1 Crie uma procedure que retorna o nome e sobrenome concatenados e também o email de todos os clientes.
DELIMITER $$
CREATE PROCEDURE SP_CLIENTES_NOME_EMAIL()
BEGIN
SELECT CONCAT(nome, ' ', sobrenome) AS 'Nome completo', email AS 'Email' FROM clientes;
END $$
CALL SP_CLIENTES_NOME_EMAIL();

-- 3.2 Crie uma procedure que retorna o nome completo (nome e sobrenome concatenados)  e também o endereço completo 
-- (endereço, cidade, estado e país) de um cliente pelo id informado.
DELIMITER $$
CREATE PROCEDURE SP_CLIENTES_NOME_ENDERECO(
	IN paramIdCliente INT
)
BEGIN
SELECT 
	CONCAT(nome, ' ', sobrenome) AS 'Nome completo', 
    CONCAT(endereco, ', ', cep, ', ', cidade, ', ', estado, ', ', pais) AS 'Endeço', 
    email AS 'Email' 
FROM clientes
WHERE id = paramIdCliente;
END $$
CALL SP_CLIENTES_NOME_ENDERECO(3);


-- 3.3 Crie uma procedure que retorna o nome do cliente e o valor total de cada uma das suas faturas pelo id do cliente informado.

DELIMITER $$
	CREATE PROCEDURE SP_CLIENTES_TOTAL_FATURAS(
		IN paramIdCliente INT
    )
BEGIN
		SELECT 
		cli.id AS 'ID do cliente',
		cli.nome AS 'Nome',
		fat.id AS 'ID da fatura',
		fat.data_fatura  AS 'Data da fatura',
		fat.valor_total AS 'Valor fatura'
	FROM clientes AS cli
	INNER JOIN faturas AS fat
	ON fat.id_cliente = cli.id
	WHERE cli.id = paramIdCliente;
END$$
CALL SP_CLIENTES_TOTAL_FATURAS(20);

