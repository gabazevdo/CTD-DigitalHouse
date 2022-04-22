USE ODONTO_DH;


-- --------------------------- EXERCÍCIO 1 ---------------------------------------
-- Precisamos de uma VIEW chamada VW_DETALHES_FATURAMENTO com todos os detalhes das faturas, conforme solicitação dos nossos usuários, descrita abaixo:
-- ID da fatura OK
-- Nome do associado OK
-- Código da carteirinha OK 
-- CPF do associado OK
-- Nome de sua categoria OK
-- Nome do plano atual OK
-- Valor total da fatura OK
-- Data de geração da fatura no formato DD/MM/YYYY OK 
-- Data de vencimento da fatura no formato DD/MM/YYYY OK 
-- Fatura quitada (retornar SIM ou NÃO) OK
-- Data de quitação da fatura OK

CREATE VIEW VW_DETALHES_FATURAMENTO AS 
SELECT 
	TBFAT.ID_FATURA AS 'ID_FATURA', 
	TBASS.NOME_COMPLETO AS 'NOME_ASSOCIADO', 
	TBASS.COD_CARTEIRINHA AS 'CARTEIRINHA', 
	TBASS.CPF AS 'CPF',
	TBCAT.NOME AS 'CATEGORIA',
    TBPLA.NOME_PLANO AS 'PLANO_ATUAL',
    TBFAT.VALOR_TOTAL_FATURA AS 'VALOR_TOTAL',
    DATE_FORMAT(TBFAT.DATA_GERACAO_FATURA, '%d/%m/%Y') AS 'FATURA_GERADA_EM',
    DATE_FORMAT(TBFAT.DATA_VENCIMENTO_FATURA, '%d/%m/%Y') AS 'VENCIMENTO_DA_FATURA',
    TBFAT.FATURA_QUITADA AS 'VENCEU', -- SIM OU NÃO ESTÃO CHUMBADOS, CASO CONTRÁRIO PODERIAMOS UTILIZAR UM CASE OU UM IF(ELSE)
    DATE_FORMAT(TBFAT.DATA_QUITACAO_FATURA, '%d/%m/%Y') AS 'FATURA_QUITADA_EM' -- SEM DADOS CADASTRADOS
FROM TB_FATURA AS TBFAT
LEFT JOIN TB_ASSOCIADO AS TBASS
ON TBFAT.ID_ASSOCIADO = TBASS.ID_ASSOCIADO
LEFT JOIN TB_CATEGORIA AS TBCAT
ON TBASS.ID_CATEGORIA = TBCAT.ID_CATEGORIA
LEFT JOIN TB_PLANO AS TBPLA
ON TBASS.ID_PLANO_ATUAL = TBPLA.ID_PLANO;

-- UTILIZANDO A VIEW
SELECT * FROM VW_DETALHES_FATURAMENTO;


-- --------------------------- EXERCÍCIO 2 ---------------------------------------
-- Faça uma consulta na view criada passando como parâmetro o usuário Ailsun McCart
SELECT * FROM VW_DETALHES_FATURAMENTO WHERE NOME_ASSOCIADO = 'Ailsun McCart';


-- --------------------------- EXERCÍCIO 3 ---------------------------------------
-- Faça uma consulta que retorne todos os associados do nosso sistema que não possuem nenhuma fatura. 
-- Neste caso, queremos apenas o nome do associado e a sua carteirinha.
SELECT 
	TBASS.NOME_COMPLETO AS 'NOME', 
    TBASS.COD_CARTEIRINHA AS 'CARTEIRINHA', 
    DATE_FORMAT(TBFAT.DATA_VENCIMENTO_FATURA, '%d/%m/%Y') AS 'VENCIMENTO'
FROM TB_FATURA AS TBFAT
RIGHT JOIN TB_ASSOCIADO AS TBASS -- RIGHT JOIN PARA TRAZER OS DADOS APENAS DA TABELA DE ASSOCIADOS, E ASSIM PODENDO ENCONTRAR OS QUE NÃO TEM FATURA.
ON TBFAT.ID_ASSOCIADO = TBASS.ID_ASSOCIADO
WHERE TBFAT.DATA_VENCIMENTO_FATURA IS NULL;


-- --------------------------- EXERCÍCIO 4 ---------------------------------------
-- Precisamos criar uma procedure chamada SP_GERA_FATURA_ASSOCIADO responsável pela geração da fatura para os nossos associados. 
-- Esta procedure precisa receber como parâmetro o ID do associado, a data de vencimento da fatura, bem como, o valor total da fatura. 
-- Por padrão, ao cadastrar uma nova fatura, o status de quitação da mesma deve vir como NAO.
DELIMITER $$
CREATE PROCEDURE SP_GERA_FATURA_ASSOCIADO(
	IN paramIdAssociado INT,
    IN paramDataVencimento DATE,
    IN paramValorTotalFatura INT
)
BEGIN
	INSERT INTO TB_FATURA(ID_ASSOCIADO, VALOR_TOTAL_FATURA, DATA_GERACAO_FATURA, DATA_VENCIMENTO_FATURA, FATURA_QUITADA, DATA_QUITACAO_FATURA)
	VALUES (paramIdAssociado, paramValorTotalFatura, current_date(), paramDataVencimento, 'NÂO', NULL);
END $$

-- INSERINDO DADOS ATRAVÉS DA PROCEDURE. TODOS OS DADOS FORAM INSERIDOS NO ASSOCIADO DE ID = 1
CALL SP_GERA_FATURA_ASSOCIADO(1,'2025/01/10',100);
CALL SP_GERA_FATURA_ASSOCIADO(1,'2025/01/10',200);
CALL SP_GERA_FATURA_ASSOCIADO(1,'2025/01/10',300);
-- PARA TER A CERTEZA DO INSERT
SELECT * FROM TB_FATURA WHERE ID_ASSOCIADO = 1;


-- --------------------------- EXERCÍCIO 5 ---------------------------------------
-- Precisamos criar uma procedure chamada SP_QUITA_FATURA responsável pela quitação das faturas. 
-- O objetivo dela é receber o ID da fatura que estará sendo quitada, bem como a data de quitação da fatura.
DELIMITER $$
CREATE PROCEDURE SP_QUITA_FATURA(
	IN paramIdFatura INT,
    IN paramDataQuitacao DATE
)
BEGIN
	UPDATE TB_FATURA
    SET FATURA_QUITADA = 'SIM', DATA_QUITACAO_FATURA = paramDataQuitacao
    WHERE ID_FATURA = paramIdFatura;
END $$

-- ALTERANDO ID 11 E 12
CALL SP_QUITA_FATURA(11,CURRENT_DATE());
CALL SP_QUITA_FATURA(12,CURRENT_DATE());
-- PARA TER A CERTEZA DA ALTERAÇÃO UM SELECT
SELECT * FROM TB_FATURA;



-- --------------------------- EXERCÍCIO 6 ---------------------------------------
-- Precisamos de uma procedure chamada P_GET_VENDEDOR_ASSOCIADO responsável por nos devolver o vendedor que realizou a 
-- venda do plano para determinado associado. Esta procedure precisa receber como parâmetro o ID do associado e devolver 
-- na própria procedure através de um parâmetro de saída o nome do vendedor correspondente. Teste a chamada da procedure com o associado Ailsun McCart.
DELIMITER $$
CREATE PROCEDURE SP_GET_VENDEDOR_ASSOCIADO(
		IN paramIdAssociado INT,
		OUT paramNomeVendedor VARCHAR(255)
)
BEGIN
	SELECT TBASS.NOME_COMPLETO AS 'CLIENTE', TBVEN.NOME AS 'VENDEDOR'
    FROM TB_VENDEDOR AS TBVEN 
    RIGHT JOIN TB_ASSOCIADO_CONTRATO AS TBASS_CON
    ON TBVEN.ID_VENDEDOR = TBASS_CON.ID_VENDEDOR
    RIGHT JOIN TB_ASSOCIADO AS TBASS
    ON TBASS_CON.ID_ASSOCIADO = TBASS.ID_ASSOCIADO
    WHERE TBASS.ID_ASSOCIADO = paramIdAssociado;
END $$

CALL SP_GET_VENDEDOR_ASSOCIADO(4,@paramNomeVendedor);

SELECT @paramNomeVendedor; -- NÃO SALVOU O NOME DO VENDEDOR, E AO COLOCAR O INTO (PARA INSERIR O NOME) DEU ERRO.