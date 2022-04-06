-- PARTE 2 - DDL - Inserindo dados nas tabelas

-- 3. Inserção de dados em uma das tabelas.
-- 4. Atualização de dados em uma das tabelas.
-- 5. Exclusão de dados em uma das tabelas.
-- 6. Seleção de dados de uma das tabelas.

USE checkpointII_gabazevdo;

SHOW TABLES; -- para mostrar todas as tabelas que foram construídas a partir do DML

-- 3. Inserção de dados em uma das tabelas.
INSERT INTO cliente(nome, sobrenome, rg, endereco, telefone, profissao)
VALUES 
('Janaina','Barros','45265789','Rua do Anzol, 56 Jd Morelo SP','(11) 95642-3214','Empresaria'),
('Marcelo', 'Nunes', '394573259', 'Av. dos Maicázi, 1254 Jd. Osasco S/P', '(11) 95656-4545', 'Lojista'),
('Rosa','Maria','202220248','Estrada da Granja, 235, Itapevi S/P','(11) 4587-6598', 'Aposentada'),
('Jose', 'Aldo', '4578932154', 'Av. Copacabana, 1200, Rio de Janeiro RJ', '(11) 95654-5654', 'Lutador'),
('Maria','Marques','21565478','','(11) 96587-4567','Costureira') -- ID 5 ficou sem o endereço e será inserindo com o UPDATE
;


INSERT INTO orcamento(servico, empreita, periodo, inicio_previsto, urgencia, metragem, aprovacao, observacao, id_orcamento_obra)
VALUES
('Forro com Drywall',0,'Diurno','2022-04-15',1,123.8,1,'Remover forro de madeira existente em 3 ambientes: sala, cozinha e quarto. Banheiros não irão forro, mas terão molduras de 10cm que cobrem paredes e teto modelo em L estilo egípicio.',1),
('Paredes com Drywall',0,'Diurno','2022-04-20',1,50.5,0,'Ambiente livre para trabalho. Os funcionários podem ficar até a hora que quiserem. O local é protegido e não irá incomodar a vizinhança em caso de barulho. Bairro novo.',2);



INSERT INTO obra(endereco, data_inicio, data_entrega, id_obra_orcamento,id_obra_empresa)
VALUES
('Rua dos Amendoas','2022-04-25','2022-05-03',2,null),
('Av. dos Abacates','2022-02-15','2022-02-23',1,null);


--INSERT INTO obra(endereco, data_inicio, data_entrega, id_obra_orcamento,id_obra_empresa)
--VALUES
--('Rua dos Amendoas','2022-04-25','2022-05-03', (SELECT MAX(o.idOrcamento) + 1 FROM orcamento AS o),null),
--('Av. dos Abacates','2022-02-15','2022-02-23',(SELECT MAX(o.idOrcamento) + 1 FROM orcamento AS o),null);
--select * from obra;


-- (SELECT o.idOrcamento + 1 FROM orcamento AS o ORDER BY o.idOrcamento DESC LIMIT 1); subconsulta para inserir o ID de forma dinamica

select * from obra;

-- 4. Atualização de dados em uma das tabelas. 
UPDATE cliente SET endereco = 'Rua das Carmelias, 88' WHERE idCliente = 5; -- O ID 5 não foi incluso o endereço.
UPDATE orcamento SET aprovacao = 1 WHERE idOrcamento = 2; -- cliente aprovou o orcamento . Mudando o campo para 1 = TRUE.

-- 4.1 Inserindo coluna em uma tabela
ALTER TABLE orcamento 
ADD COLUMN valor_orcamento DECIMAL(10,2) NOT NULL;

-- 4.2 Inserindo dados na nova coluna.
UPDATE orcamento SET valor_orcamento = 13500 WHERE idOrcamento = 1;
UPDATE orcamento SET valor_orcamento = 7800 WHERE idOrcamento = 2;



-- 5. Exclusão de dados em uma das tabelas.
DELETE FROM cliente WHERE idCliente BETWEEN 3 AND 5; -- Excluindo dados dos IDs 3, 4 e 5.

-- 6. Seleção de dados de uma das tabelas.
SELECT * FROM cliente;
SELECT * FROM orcamento;
SELECT * FROM obra;
SELECT COUNT(*) FROM cliente; -- para saber a quantidade de registros da tabela de clientes.
SELECT COUNT(*) FROM obra; -- para saber a quantidade de registros da tabela de obras.

-- JOINS entre as tabelas de CLIENTE, ORCAMENTO e OBRA.
-- É uma maneira de quem irá executar o serviço 
SELECT  cl. nome AS 'Nome cliente', cl.telefone AS 'Contato', ob.endereco AS 'Local da Obra', oc .servico AS 'Executar o serviço', oc.metragem AS 'Área total', DATE_FORMAT(ob.data_inicio, '%W %e %M %Y') AS 'Inicio da obra', oc.observacao
FROM obra AS ob
INNER JOIN orcamento AS oc
ON ob.idObra = oc.idOrcamento
INNER JOIN cliente AS cl
ON cl.idCliente = oc.idOrcamento;