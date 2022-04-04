use Projeto_Spotify;

-- Liste as músicas que possuem a letra "z" no título.
SELECT * FROM cancao WHERE titulo LIKE '%z%';

-- Liste as músicas que têm a letra "a" como segundo caractere e a letra "s" como último caractere.
SELECT * FROM cancao WHERE titulo LIKE '_a%s';

-- Mostre a lista de reprodução que contém mais músicas, renomeando as colunas, colocando em maiúscula a primeira letra, os acentos correspondentes e adicionando os espaços entre as palavras.
SELECT titulo AS 'Playlist', qtdcancoes AS "Quantidade" FROM playlist ORDER BY qtdcancoes DESC LIMIT 1;

SELECT 
	idPlaylist AS 'Id da playlist',
    idusuario AS 'Id do usuário',
    titulo AS 'Nome playlist',
    qtdcancoes AS 'Quantidade de canções',
    idEstado AS 'Estado da playlist',
    Datacriacao AS 'Data de criação',
    Dataexclusao AS 'Data de exclusão'    
FROM playlist 
ORDER BY 
	qtdcancoes DESC 
LIMIT 1;



-- Em outro momento, obtenha uma lista com os 5 usuários mais jovens, a partir dos próximos 10 registros.
SELECT * FROM usuario ORDER BY Data_nac LIMIT 5 OFFSET 10;

-- Liste as 5 músicas com mais reproduções, em ordem decrescente.
SELECT * FROM cancao ORDER BY qtdreproducao DESC LIMIT 5;


-- Gere um relatório de todos os álbuns em ordem alfabética.
SELECT * FROM album ORDER BY titulo;


-- Liste todos os álbuns que não possuem imagem, organizados em ordem alfabética.
SELECT * FROM album WHERE imagemcapa IS NULL ORDER BY titulo;


-- Insira um novo usuário com os seguintes dados (leve em consideração os relacionamentos):
-- nomeusuario: novousuariodespotify@gmail.com
-- Nome e sobrenome: Elmer Santos
-- password: S4321m
-- Data de nacimiento: 15/11/1991
-- Sexo: Masculino
-- Código Postal:
-- País: Brasil

INSERT INTO usuario(idUsuario, Nomeusuario, NomeCompleto, senha, Data_nac, sexo, Cod, Pais_idPais, idTipoUsuario)
VALUES (20, 'novousuariodespotify@gmail.com', 'Elmer Santos','S4321m', '1991-11-15', 'M', '', 9, NULL)

SELECT * FROM usuario;

-- 10.  Exclua todas as músicas do gênero "pop" da tabela generoxcancao.
SELECT * FROM genero WHERE Genero = 'Pop'; -- Consulta para pegar o id do genero pop
DELETE FROM generoxcancao WHERE IdGenero = 9;

-- 11.   Edite todos os artistas que não possuem uma imagem carregada e 
-- carregue para eles o texto "Imagem em falta" na coluna de imagens.
UPDATE artista SET imagem = 'Imagem em falta' WHERE imagem IS NULL;