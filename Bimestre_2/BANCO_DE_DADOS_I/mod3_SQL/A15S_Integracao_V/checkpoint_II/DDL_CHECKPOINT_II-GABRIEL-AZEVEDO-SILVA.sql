-- CHECKPOINT II

-- DML
-- 1. Criação do banco de dados.
-- 2. Criação das tabelas com chaves primárias e estrangeiras.
-- DDL
-- 3. Inserção de dados em uma das tabelas.
-- 4. Atualização de dados em uma das tabelas.
-- 5. Exclusão de dados em uma das tabelas.
-- 6. Seleção de dados de uma das tabelas.
-- Especificar em um parágrafo seu projeto e a utilização e quais suas regras



-- O projeto a seguir é uma representação do processo que pode acorrer em uma emrpesa de construção ou reforma de maneira organica.
-- Meu pai tem uma pequena empresa que presta serviços de gesso, pintura e elétrica. Daí veio a ideia.

-- As regras:
-- 1. O CLIENTE pode ter vários ORCAMENTOs
-- 2. O ORCAMENTO pode ter muitas OBRAs
-- 3. OBRA pode ter apenas um ORCAMENTO
-- 4. EMPRESA pode ter muitas OBRAS
-- 5. A EMPRESA pode ter muitos FUNCIONARIOs 
-- 6. FUNCIONARIO pode ter apenas um CARGO
-- 7. A EMPRESA pode ter muitos FORNECEDORes 
-- 8. O FORNECEDOR pode ter muitos PRODUTOS
 


------------------------------ DML ------------------------------

CREATE DATABASE checkpointII_gabazevdo;

USE checkpointII_gabazevdo;

CREATE TABLE cliente(
	idCliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    rg VARCHAR(16),
    endereco VARCHAR(45) NOT NULL,
    telefone VARCHAR(45) NOT NULL,
    profissao VARCHAR(45)    
);

CREATE TABLE orcamento(
	idOrcamento INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    servico VARCHAR(50) NOT NULL,
    empreita TINYINT, -- 1 com empreita -- 0 sem empreita
    periodo VARCHAR(10) NOT NULL, -- periodo do dia: diurno ou noturno
    inicio_previsto DATE NOT NULL,
    urgencia TINYINT, -- 1 com urgencia - 0 sem urgencia
    metragem DECIMAL(10,2) NOT NULL,
    aprovacao TINYINT NOT NULL, -- 1 aprovado - 0 não aprovado
    observacao TEXT,
    id_orcamento_obra INT,
    
    CONSTRAINT fk_orcamento_cliente FOREIGN KEY(id_orcamento_obra) REFERENCES cliente(idCliente) 
);

CREATE TABLE empresa(
	idEmpresa INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    razao_social VARCHAR(150) NOT NULL,
    nome_fantasia VARCHAR(150) NOT NULL,
    cnpj CHAR(14) NOT NULL,
    inscricao_estadual CHAR(9),
    endereco VARCHAR(150) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    site VARCHAR(45)
);

CREATE TABLE obra(
	idObra INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    endereco VARCHAR(200) NOT NULL,
    data_inicio DATE NOT NULL,
    data_entrega DATE NOT NULL,
    id_obra_orcamento INT,
    id_obra_empresa INT,
    
	CONSTRAINT fk_obra_orcamento FOREIGN KEY(id_obra_orcamento) REFERENCES orcamento(idOrcamento),
	CONSTRAINT fk_obra_empresa FOREIGN KEY(id_obra_empresa) REFERENCES obra(idObra)
);

CREATE TABLE funcionario(
	idFuncionario INT PRIMARY KEY NOT NULL AUTO_INCREMENT ,
    nome VARCHAR(150) NOT NULL,
    sobrenome VARCHAR(150) NOT NULL,
    cpf CHAR(11) NOT NULL,
    ENDERECO VARCHAR(150) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    data_nascimento DATE,
    id_funcionario_empresa INT,
    
    CONSTRAINT fk_funcionario_empresa FOREIGN KEY(id_funcionario_empresa) REFERENCES empresa(idEmpresa)
);

CREATE TABLE cargo(
	idCargo INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cargo VARCHAR(50) NOT NULL,
    funcao VARCHAR(50) NOT NULL,
    id_cargo_funcionario INT,
    
    CONSTRAINT fk_cargo_funcionario FOREIGN KEY(id_cargo_funcionario) REFERENCES funcionario(idFuncionario)
);

CREATE TABLE fornecedor(
	idFornecedor INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    razao_social VARCHAR(150) NOT NULL,
    nome_fantasia VARCHAR(150) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    cnpj CHAR(14) NOT NULL,
    responsavel VARCHAR(45) NOT NULL,
    id_fornecedor_empresa INT,
    
    CONSTRAINT fk_fornecedor_empresa FOREIGN KEY(id_fornecedor_empresa) REFERENCES empresa(idEmpresa)
);

CREATE TABLE produtos(
	idProdutos INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    peso DECIMAL(5,2) NOT NULL,
    tamanho INT,
    tipo_materal VARCHAR(45) NOT NULL,
    valor_unitario DECIMAL(5,2) NOT NULL, 
    id_produtos_fornecedor INT,
    
    CONSTRAINT fk_produtos_fornecedor FOREIGN KEY(id_produtos_fornecedor) REFERENCES fornecedor(idFornecedor)
);

