<h1>Relacionamento </h1>

<h2>Relações</h2>

<p>Quando estamos modelando e detectamos as entidades ou tabelas, é normal que elas estejam relacionadas entre si.
</p>

<p>
Por exemplo, poderíamos ter uma tabela que armazena os dados Pessoais dos Alunos e outra tabela que armazena a Presença de cada uma das aulas que eles assistem.
</p>

<p>
Vamos repetir TODOS os dados dos alunos de atendimento por atendimento? Ou devemos simplesmente ter o ID do aluno para assistir às aulas?
</p>

<p>
Se você escolheu este último cenário, você está correto! Podemos notar que essas duas tabelas estão relacionadas entre si. Bem, se queremos saber o nível de assiduidade de um aluno devemos conectá-las.
</p>

<p>
Chamamos isso de <b>RELACIONAMENTOS</b> e vale esclarecer que existem vários tipos.
</p>


<h2> Tipos de relaciomentos </h2>

- Um para um (1:1): cada elemento de uma entidade pode apenas se relacionar com um elemento de outra entidade. 

- Um para muitos (1:N): um elemento de uma entidade A pode se relacionar com diversos elementos de uma entidade B.

- Muitos para muitos (N:N): Muitos elementos se relacionam com mais de um elemento de outra tabela. Vemos nesse caso que não se trata de entidades mas sim de três tabelas. Onde é necessário duas com chaves primárias e se cria uma terceira para ter o relacionamento.  


<h2> Cardinalidade </h2>

<p>
Em modelagem de dados a cardinalidade é um dos princípios fundamentais sobre o relacionamento de um banco de dados relacional. Nela são definidos o graus de relação entre duas entidades ou tabelas. No modelo relacional, podemos ter os seguintes níveis de relacionamento: 1:N, N:N, 1:1.
</p>

        inserir print cardinalidade