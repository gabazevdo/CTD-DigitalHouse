<h1>PROJETO ODONTO DH</h1>

---


Olá Houser,
Continuando o desenvolvimento da base de dados ODONTO_DH, precisamos implementar
novas funcionalidades as quais foram solicitadas pelos nossos usuários.

DICAS:
Lembrem-se de utilizar os ALIAS em TODAS as consultas que retornam dados para os
nossos usuários, de modo a deixar a visualização dos dados mais amigável para eles.

Vamos lá!

---

<h2> Exercício para fixação </h2>

No e-mail, o líder técnico do projeto solicita os scripts que compreendem as seguintes informações:

1 - Precisamos de uma VIEW chamada VW_DETALHES_FATURAMENTO com todos os detalhes das faturas, conforme solicitação dos nossos usuários, descrita abaixo:
- ID da fatura
- Nome do associado
- Código da carteirinha
- CPF do associado
- Nome de sua categoria
- Nome do plano atual
- Valor total da fatura
- Data de geração da fatura no formato DD/MM/YYYY
- Data de vencimento da fatura no formato DD/MM/YYYY
- Fatura quitada (retornar SIM ou NÃO)
- Data de quitação da fatura

2 - Faça uma consulta na view criada passando como parâmetro o usuário Ailsun McCart

3 - Faça uma consulta que retorne todos os associados do nosso sistema que não possuem nenhuma fatura. Neste caso, queremos apenas o nome do associado e a sua carteirinha.

4 - Precisamos criar uma procedure chamada SP_GERA_FATURA_ASSOCIADO responsável pela geração da fatura para os nossos associados. Esta procedure precisa receber como parâmetro o ID do associado, a data de vencimento da fatura, bem como, o valor total da fatura. Por padrão, ao cadastrar uma nova fatura, o status de quitação da mesma deve vir como NAO.

5 - Precisamos criar uma procedure chamada SP_QUITA_FATURA responsável pela quitação das faturas. O objetivo dela é receber o ID da fatura que estará sendo quitada, bem como a data de quitação da fatura.

6 - Precisamos de uma procedure chamada P_GET_VENDEDOR_ASSOCIADO responsável por nos devolver o vendedor que realizou a venda do plano para determinado associado. Esta procedure precisa receber como parâmetro o ID do associado e devolver na própria procedure através de um parâmetro de saída o nome do vendedor correspondente. Teste a chamada da procedure com o associado Ailsun McCart.