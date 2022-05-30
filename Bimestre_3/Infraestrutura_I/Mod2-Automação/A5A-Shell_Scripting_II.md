# Automatize os processos de tarefas para o sistema
Nesta aula, vamos apresentar a interface Bash como um shell Unix, onde o usuário pode programar comandos para o sistema operacional a serem executados. Bash nos ajuda a nos comunicar com nosso sistema. Um exemplo claro é a forma de automatizar a ordem de fazer um backup a cada determinado momento do banco de dados.

### Variáveis globais ou de ambiente
O sistema Linux define algumas variáveis ​​globais de ambiente quando efetuamos login em nosso sistema e elas estão sempre em LETRAS MAIÚSCULAS. Se quisermos ver as variáveis ​​de ambiente que estamos usando e estão carregadas em nossa sessão, escrevemos o comando printenv ou env em nossa shell. Para declarar uma variável global, faça o seguinte:

~~~
export VARIABLENAME=valor
~~~
Para acessá-lo, usamos a instrução:
~~~
$VARIABLENAME
~~~

## Variáveis locais ou de usuário
As variáveis ​​do tipo usuário ou local possuem a particularidade de que só podem ser acessadas pelo usuário e pela sessão em que foram criadas. Uma variável local é declarada da maneira simples:

~~~ 
nomeadariavel=valor
~~~

Para acessá-lo, usamos a instrução:
~~~
$nomedavariavel
~~~


