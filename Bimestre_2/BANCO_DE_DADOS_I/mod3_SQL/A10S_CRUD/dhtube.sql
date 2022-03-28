CREATE DATABASE DHTUBE;

USE DHTUBE;

CREATE TABLE AVATAR(
	ID_AVATAR INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(45),
    UTL_IMAGEM VARCHAR (100)
);

CREATE TABLE PAIS(
	ID_PAIS INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(100)
);

CREATE TABLE USUARIO (
	ID_USUARIO INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	NOME VARCHAR(45),
    EMAIL VARCHAR(45),
    SENHA VARCHAR(45),
    DATA_NASCIMENTO DATETIME,
    CEP VARCHAR(45),
    ID_PAIS INT,
    ID_AVATAR INT,
	CONSTRAINT FK_USUARIO_PAIS FOREIGN KEY (ID_PAIS) REFERENCES PAIS (ID_PAIS),
	CONSTRAINT FK_USUARIO_AVATAR FOREIGN KEY (ID_AVATAR) REFERENCES AVATAR (ID_AVATAR)    
);

CREATE TABLE PLAYLIST (
	ID_PLAYLIST INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	NOME VARCHAR(45),
    DATA_CRIACAO DATETIME,
    PRIVADO SMALLINT(6),
    ID_USUARIO INT,
	CONSTRAINT FK_PLAYLIST_USUARIO FOREIGN KEY (ID_USUARIO) REFERENCES USUARIO (ID_USUARIO)
);

CREATE TABLE VIDEO (
	ID_VIDEO INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	TITULO VARCHAR(100),
    DESCRICAO TEXT,
    TAMANHO DOUBLE,
    NOME_ARQUIVO VARCHAR(100),
    DURACAO DOUBLE,
    IMAGEM VARCHAR(100),
    QTD_REPRODUCOES INT,
    QTD_LIKES INT,
    QTD_DESLIKES INT,
    PRIVADO SMALLINT,
    DATA_PUBLICACAO DATETIME,
    ID_USUARIO INT,
	CONSTRAINT FK_VIDEO_USUARIO FOREIGN KEY (ID_USUARIO) REFERENCES USUARIO (ID_USUARIO)
);

CREATE TABLE PLAYLIST_VIDEO (
	ID_VIDEO INT,
    ID_PLAYLIST INT,
	CONSTRAINT FK_PLAYLIST_VIDEO_VIDEO FOREIGN KEY (ID_VIDEO) REFERENCES VIDEO (ID_VIDEO),
	CONSTRAINT FK_PLAYLIST_VIDEO_PLAYLIST FOREIGN KEY (ID_PLAYLIST) REFERENCES PLAYLIST (ID_PLAYLIST)
);

CREATE TABLE CANAL (
	ID_CANAL INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	NOME VARCHAR(45),
    DESCRICAO TEXT,
    DATA_CRIACAO DATETIME,
    ID_USUARIO INT,
	CONSTRAINT FK_CANAL_USUARIO FOREIGN KEY (ID_USUARIO) REFERENCES USUARIO (ID_USUARIO)
);