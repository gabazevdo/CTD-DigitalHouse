--Utilizamos a base de dados Projeto_Spotify
USE Projeto_Spotify;



-- PROCEDURE SEM PARAMETRO NENHUM PARA RETORNAR A DATA ATUAL ESCRITA
DELIMITER $$
CREATE PROCEDURE SP_GET_DATE()
BEGIN
	SELECT
		concat(
			dayname(current_date()), ', ', 
			DAY(current_date()), ', ', 
            monthname(current_date()), ', ', 
            year(current_date())
         );
END $$

CALL SP_GET_DATE();


-- PROCEDURE PARA CRIPTOGRAFAR A SENHA DO USUARIO A PARTIR DO ID INFORMADO NO PARAMETRO
DELIMITER $$
CREATE PROCEDURE SP_CRIPTOGRAFA_SENHA (
	IN paramIdUsuario INT
)
BEGIN
	UPDATE
		usuario
	SET
		senha = MD5(senha)
	WHERE
		IdUsuario = paramIdUsuario;
END $$

CALL SP_CRIPTOGRAFA_SENHA(3);
-- Analisando a mudança 
SELECT
	senha
FROM usuario
WHERE
	idUsuario = 3;

    
-- PROCEDURE PARA VALIDAR SE O LOGIN DO USUARIO ESTA AUTORIZADO A PARTIR DO ID E SENHA INFORMADOS
DELIMITER $$
CREATE PROCEDURE SP_VALIDA_LOGIN(
	IN paramIdUsuario INT,
    IN paramSenha VARCHAR(255), 
    OUT retorno VARCHAR(255)
)
BEGIN
	SELECT
		CASE WHEN md5(paramSenha) = senha
		THEN 'Login autorizado'
        ELSE 'Login nÃ£o autorizado'
        END
	INTO retorno
	FROM usuario
    WHERE
		idUsuario = paramIdUsuario;
END $$

CALL SP_VALIDA_LOGIN(3, 'RAMIREZ&88', @retorno);
SELECT @retorno;


-- PROCEDURE PARA VERIFICAR SE DUAS STRINGS SÃO IGUAIS
DELIMITER $$
CREATE PROCEDURE SP_VALIDA_STRINGS_IGUAIS(
	IN paramPrimeiraString VARCHAR(255), 
	INOUT paramSegundaString VARCHAR(255)
)
BEGIN
	IF paramPrimeiraString = paramSegundaString 
		THEN SET paramSegundaString = 'Strings iguais';
    ELSE 
    	SET paramSegundaString = 'Strings diferentes';
    END IF;
END $$

SET @paramSegundaString = 'TURMA 2';
CALL SP_VALIDA_STRINGS_IGUAIS('TURMA 2', @paramSegundaString);
SELECT @paramSegundaString;
