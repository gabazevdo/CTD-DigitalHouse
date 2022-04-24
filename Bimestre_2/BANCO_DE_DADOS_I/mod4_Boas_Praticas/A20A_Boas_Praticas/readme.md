# Boas práticas

### Por que otimizar?

A otimização permite mapear e compreender melhor o processo e assim
identificar pontos onde ocorrem desperdícios de matérias-primas e recursos, para
direcioná-los de uma maneira melhor e mais eficiente. Ou seja, a otimização torna
possível encontrar onde há falhas e gargalos afetando a produtividade e o resultado
final do processo, acarretando em custos maiores e desperdícios, e cortá-los. 

Alguns dos benefícios em otimizar são:
- Melhores resultados
- Redução de riscos e erros
- Eliminação de etapas desnecessárias
- Maior agilidade nas atividades

Como é possível otimizar banco de dados? Aqui vai algumas
dicas, mas veremos detalhadamente cada uma delas:
- Utilizando índices
- Utilizando o comando Optimize
- Simplificando suas consultas
- Atentando-se às conexões do seu banco de dados.

Vamos juntos ver esses itens?

### Boas práticas em SQL

Neste ponto, devemos ser capazes de escrever consultas SQL à medida que nos solicitam relatórios. Mas ... o que acontece quando trabalhamos com tabelas com milhões e milhões de linhas? Como podemos melhorar o tempo de resposta de um relatório? Quais são as boas práticas para que uma consulta SQL possa ser entendida por qualquer membro da equipe?

A seguir, você encontrará uma apresentação que reúne as principais boas práticas que permitirão melhorar o desempenho dos dados. Essas boas práticas baseiam-se no fato de que a consulta SQL, quando executada, funciona. O que buscamos é melhorá-lo, otimizá-lo, para que quando trabalhemos com casos reais de banco de dados, os tempos de resposta sejam aceitáveis.




### Boas práticas CREATE

<b>Tente usar VARCHAR em vez de TEXT</b>
Se você precisar armazenar grandes volumes de texto, mas eles tiverem menos de 8.000 caracteres, use o tipo de dados VARCHAR em vez de TEXT.

<b>Avalie cuidadosamente o uso de CHAR e VARCHAR</b>
Avalie cuidadosamente o uso de CHAR e VARCHAR dependendo se o tamanho do campo a ser usado varia muito. Isso serve para pesar o desempenho da velocidade em relação ao desempenho do armazenamento. As colunas de tamanho fixo são processadas mais rapidamente pelo mecanismo SQL.
Use CHAR para colunas de pouca variação de tamanho e VARCHAR para aquelas que não têm tamanho estável ou médio.

<b>Tipos de dados em FOREIGN KEY</b>
Não use colunas com tipos de dados FLOAT, REAL ou DATETIME como FOREIGN KEY.
<b>Use CONSTRAINT para manter a integridade dos dados.</b>

<b>Evite chaves primárias COMPOSTAS</b>
Observe que, se você espera que sua tabela com uma chave primária composta tenha milhões de linhas, o desempenho da operação CRUD será seriamente prejudicado.
Nesse caso, é muito melhor usar uma chave primária de ID simples que tenha um índice compacto o suficiente e defina as restrições necessárias do Mecanismo de Banco de Dados para manter a exclusividade.

### Boas práticas SELECT


<b>Evite usar SELECT * FROM tabela</b>
Embora seja fácil e conveniente usar o caractere asterisco (*) para buscar todos os campos, ele deve ser omitido e, em vez disso, especifique os campos que precisam ser buscados.
O uso do asterisco também impede o uso eficaz dos índices de forma eficiente.


<b>Anexe o ALIAS da tabela a cada coluna</b>
Especifique o ALIAS da tabela na frente de cada campo definido no SELECT, isso economiza o tempo do mecanismo de ter que encontrar a qual tabela o campo especificado pertence.


<b>Evite usar GROUP BY, DISTINCT e ORDER BY o máximo possível</b>
Evite sempre que possível o uso de GROUP BY, DISTINCT e ORDER BY, pois consomem uma grande quantidade de recursos.
Considere se realmente é necessário utilizá-lo ou, se por outro lado, a ordenação dos resultados pode ser deixada para o aplicativo que receberá os dados.


### Boas práticas WHERE

<b>Evite usar wilcards em LIKE como "% value%"</b>
Caso a instrução LIKE seja usada, evite usar o wildcard "%" no início da string a ser pesquisada. Isso porque, se aplicada, a busca teria que ler todos os dados da tabela ou tabelas envolvidas para responder à consulta. Recomenda-se que haja pelo menos três caracteres antes do wildcard.


<b>Evite usar IN, é melhor EXISTS</b>
Prefira o uso de EXISTS e NOT EXISTS, ao invés de IN e NOT IN.


<b>Tente não usar funções nas condições WHERE</b>
O SQL não pode pesquisar registros de maneira eficiente quando você usa funções, por exemplo de conversão, dentro de uma coluna.
Nessas condições, tente usar o formato de coluna original.


### Boas práticas UNION

<b>Use UNION ALL para evitar uma distinção implícita</b>
No caso de utilizar a instrução UNION e houver certeza de que registros duplicados não serão obtidos nos SELECTs, é aconselhável neste cenário substituir UNION por UNION ALL para evitar o uso implícito da instrução DISTINCT, já que este consumo de recursos pode aumentar.


### Boas práticas CRUD

<b>Use SET NOCOUNT ON com operações CRUD</b>
Use SET NOCOUNT ON com operações CRUD para evitar a contagem do número de linhas afetadas e obter desempenho, especialmente em tabelas com muitos registros.



