# Procedures em MySQL

#### O que são Stored Procedures?

É um termo em inglês para Procedimentos Armazenados. São conjuntos de ações recorrentes em MySQL, ou seja, são ações que acontecem com frequência para executar funções. Elas foram pensadas para simplificar a execução destas rotinas em SQL.

#### Como criar Stored Procedures?

Para criar as Stored Procedures, usamos as palavras reservadas CREATE PROCEDURE para disparar a criação da procedure. Em seguida, usamos a palavra reservada BEGIN para marcar o início do corpo da procedure. Dentro do corpo da procedure, podemos digitar as operações que queremos automatizar, podendo ser consultas simples, como um select de uma tabela, como operações complexas, como Joins e etc. Com o fim do corpo da procedure, devemos delimitar seu final com a palavra reservada END. Com isso, podemos criar nossa primeira Stored Procedure. Lembrando que você pode criar as Stored Procedures em clientes de bancos de dados como o MySQL Workbench por meio de sua interface gráfica.

#### Como listar minhas Stored Procedures?
Você pode executar o comando SQL SHOW PROCEDURE STATUS. Com esse comando, você terá acesso a informações como: o nome da procedure, usuário que criou a procedure, data de criação e modificação, entre outras informações. Você também pode usar um cliente como MySQL Workbench para visualizar usando a interface gráfica.

#### O que posso fazer com Stored Procedures?
Além de simplesmente armazenar operações, as Stored Procedures têm diversas funções que podem torná-las mais dinâmicas. Por exemplo, podemos: usar variáveis, enviar parâmetros assim como as funções em programação, podemos ainda utilizar estruturas de repetição como While, Repeat e Leave. Outro recurso que podemos usar também são as estruturas condicionais como IF e Case.

#### Como tornar o uso de Procedures seguro?

As Stored Procedures, quando criadas, permitem a adição de uma tag que define os privilégios de usuário em relação a esta procedure. O comando utilizado tem a seguinte sintaxe no cabeçalho da procedure: CREATE DEFINER = root@localhost.


#### Como remover Stored Procedures?
A sintaxe DROP FUNCTION [IF EXISTS] function_name; exclui uma procedure, em primeiro lugar colocamos as palavras reservadas, checamos a existência desta procedure, e inserimos o seu nome. Lembrando que esta exclusão é permanente.



---


## Estrutura da stored procedure

1. DELIMITER: Esta cláusula é escrita seguida por uma combinação de símbolos que não serão usados ​​dentro da SP.
2. CREATE PROCEDURE: Este comando é escrito seguido pelo nome que identificará a  SP.
3. BEGIN: Esta cláusula é usada para indicar o início do código SQL.
Bloco de Instruções SQL.
4. END: Esta cláusula é escrita seguida pela combinação de símbolos definidos em 5. 5. DELIMITER e é usada para indicar o final do código SQL.

~~~sql
DELIMITER $$
CREATE PROCEDURE sp_nome_procedimento()
BEGIN	
     -- Bloco de Instruções SQL;
END $$
~~~

- Os parâmetros são variáveis ​​para onde os dados são enviados e recebidos de programas clientes.
- Eles são definidos na cláusula CREATE.
- As SPs podem ter um, mais ou nenhum parâmetro de entrada e também podem ter um, mais ou nenhum parâmetro de saída.
- Existem 3 tipos de parâmetros:

| Parâmetro  |  Tipo          | Função                 |
| ---------- | ---------------| ---------------------- | 
| IN         | Entrada        | Recebe dados           |
|  OUT       |  Saída         | Retorna dados          |
|  INOUT     |  Entrada-Saída | Recebe e rotorna dados |

- Uma SP pode ter parâmetros. Os parâmetros representam como uma SP pode receber valores, retornar  valores   ou ambos.
- Existem parâmetros de entrada (IN), saída (OUT) e entrada / saída (INOUT).
 Exemplo:

 ~~~sql
 DELIMITER $$
CREATE PROCEDURE sp_produtos(IN filtro_categoria VARCHAR(15))
BEGIN	
    SELECT ProdutoNome, PrecoUnitario FROM produtos p
    JOIN categorias C ON p.CategoriaID = c.CategoriaID
    WHERE CategoriaNome = filtro_categoria
   END $$

CALL sp_produtos('Frutos do mar');
~~~

~~~sql
CREATE PROCEDURE sp_produtos(IN filtro_categoria VARCHAR(15), in nomeproduto varchar(100))
BEGIN	
    SELECT ProdutoNome, PrecoUnitario FROM produtos p
    JOIN categorias C ON p.CategoriaID = c.CategoriaID
    WHERE CategoriaNome = filtro_categoria
      and ProdutoNome = nomeproduto 
END $$

CALL sp_produtos('Frutos do mar', ‘descricao produto’);
~~~

- Dentro de uma SP, é permitido declarar e atribuir valores a uma variável usando SET ou em uma instrução SELECT usando INTO.
- Fora da SP, usamos as variáveis ​​acrescentando o símbolo @.

~~~sql
DELIMITER $$
CREATE PROCEDURE sp_quaantidade_produtos(IN filtro_categoria VARCHAR(15), OUT quantidade INT)
BEGIN	
    SELECT count(*)  INTO quantidade 
      FROM produtos p
    JOIN categorias C ON p.CategoriaID = c.CategoriaID
    WHERE CategoriaNome = filtro_categoria;
END $$

CALL sp_qaantidade_produtos('frutos do mar', @quantidade-frutos_do_mar);
SELECT @quanttidade_frutos_do_maar;
~~~


### Declaração do parâmetro INOUT

É o mesmo parâmetro usado para entrada e saída de dados. Você pode receber valores e retornar os resultados na mesma variável.
~~~sql
-- SINTAXE

CREATE PROCEDURE sp_nome_procedimento(INOUT param1 TIPO_DE_DADO, INOUT param2 TIPO_DE_DADO);

-- EXEMPLO
DELIMITER $$
CREATE PROCEDURE sp_nome_procedimento(INOUT aumento FLOAT)
BEGIN	
     SET aumento = aumento + 25700.50;
END $$

-- EXECUÇÃO
SET @salario = 2000.00; -- Declaração e atribuição de variável (dado)
CALL sp_nome_procedimento(@salario); -- Execução e envío de dado (2000.00)
SELECT @salario; -- Exibe o resultado
~~~

### Vantagens da stored procedure


- Grande velocidade de resposta: tudo é processado no servidor.
- Maior segurança: Limita e impoede o acesso direto às tabelas onde os dados são armazenados, evitando a manipulação direta por aplicativos clientes.
- Independência: Todo o código está dentro do banco de dados e não depende de arquivos externos.
- Reutilização do código: a necessidade de reescrever um conjunto de instruções é eliminada.
- Manutenção mais fácil: Menor custo de modificação quando as regras de negócios mudam.

### Desvantagens da stored procedure

- Modificação difícil: se a modificação for necessária, sua definição deve ser totalmente substituída. Em bancos de dados muito complexos, a modificação pode afetar outras partes do software que direta ou indiretamente se referem a ele.
- Aumento do uso de memória: se usarmos muitos procedimentos armazenados, o uso da memória de cada conexão que usa esses procedimentos aumentará substancialmente.
- Restrito para lógica de negócios complexa: Na realidade, as construções de procedimento armazenado não são projetadas para desenvolver lógica de negócios complexa e flexível.
