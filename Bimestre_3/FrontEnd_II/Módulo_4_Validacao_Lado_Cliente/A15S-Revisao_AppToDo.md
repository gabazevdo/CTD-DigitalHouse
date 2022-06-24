# Funções utilitárias
O que vamos tratar nesta aula? Primeiro, começamos por descarregar o projeto da aplicação To-Do e abri-lo no nosso editor de código.

Uma vez que temos preparado nosso espaço de trabalho, começaremos a desenvolver os scripts que são criados, mas sem nenhuma lógica ainda. Durante a aula, vamos focar no desenvolvimento do roteiro chamado utils.js. Além disso, falaremos sobre validação e normalização.

## Front End II Iniciando o desenvolvimento
Nesta mesa de trabalho, buscamos normalizar e validar as informações disponibilizadas pelo usuário da aplicação nas telas de login e registro. 

- Normalizações e validações esperadas:
  - Pagina de Login:
      - Ambos os campos devem ser normalizados (ex: retirar espaços desnecessários);
      - Nenhum dos campos pode ser vazio/nulo;
      - O email deve ser de um tipo válido (ex: aplicar expressões regulares);
      - O botão de acesso deve ser habilitado apenas quando todos os campos do formulário estiverem validados corretamente.
  - Página de Registro:
      - Ambos os campos devem ser normalizados (ex: retirar espaços desnecessários);
      - Nenhum dos campos pode ser vazio/nulo;
      - O email deve ser de um tipo válido (ex: aplicar expressões regulares);
      - Os campos “senha” e “repetir senha” devem possuir a mesma informação para serem considerados válidos;
      - O botão de cadastro deve ser habilitado apenas quando todos os campos do formulário estiverem validados corretamente.


Este passo inicial é fundamental para o desenvolvimento deste projeto, pois no futuro, essas informações serão integradas a uma API de tarefas.