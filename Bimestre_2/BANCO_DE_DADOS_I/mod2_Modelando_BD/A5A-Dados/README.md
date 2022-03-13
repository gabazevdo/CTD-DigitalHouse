<h1> Dados </h1>

<b>Sobre Dados…!</b>

Nesta aula vamos dar continuidade ao aprendizado sobre Modelagem de Banco de Dados. Vamos conhecer os Tipos de Dados a fim de entendermos quais temos que salvar e o nível de detalhe que vamos registrá-los em nosso Banco de Dados.

<h2> Tipos de dados </h2>

<p> O <b>MySql</b> nos apresenta 3 tipos de dados, são eles:

<h3>Numéricos</h3>

- INT
    - -2147483648 to 214748364, 0 a 4294967295

- TINYINT
    - -128 a 128, 0 a 255

- SMALLINT
    - -32768 a 32767, 0 a 65535

- MEDIUINT
    - -8388608 a 8388607, 0 a 16777215

- BIGINT
    - -32768 a 32767, 0 a 65535

- DECIMAL
- FLOAT
- BOOLEAN
    - 0 ou 1

Os valores máximos, os valores máximos e mínimos são conforme a expressão de seus nomes, e podem variar. 
Quanto mais presição nos tipos de dados, maior será o desempenho do MySQL. 

<h3>Datas</h3>

- DATA
    - YYYY-MM-DD

- TIME
    - HH:MM:SS

- DATETIME
    - 1967-01-03 08:00:00


<h3>Texto</h3>

- CHAR
    - char(100) → 100 caracteres sempre

- VARCHAR
    - varchar(100) → 100 caracteres como máximo


- TEXT
    - Determina um dado de tipo texto sem limite de caracteres

