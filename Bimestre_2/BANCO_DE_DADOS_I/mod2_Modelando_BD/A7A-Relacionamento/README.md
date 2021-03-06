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


![cardinaliade](https://user-images.githubusercontent.com/16105546/158064910-5762de08-a531-42e9-aa4a-f7c0c0d44344.png)


<h2>Atividade realizada em aula </h2>

<p>
Montar o DER de uma biblioteca, dada das informações fornecidas pelo conteúdo da DH.
</p>
<a href="https://github.com/gabazevdo/CTD-DigitalHouse/blob/main/Bimestre_2/BANCO_DE_DADOS_I/mod2_Modelando_BD/A7A-Relacionamento/DER-BIBLIOTECA.mwb"> clique aqui</a> e tenha acesso a construção do DER.


<h4> Print DER </h4>


![A7S-Relacionamento_Biblioteca](https://user-images.githubusercontent.com/16105546/158938792-3483f778-5876-42be-ac44-9673899e1bfc.png)


