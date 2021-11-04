<h1>Atividade em sala </h1>

Faça o download desse documento [index.html](https://drive.google.com/file/d/1XecESd6z6tq2FoA-KOJ7NVjHfOqGEJ_R/view) em sua máquina.
Abra a página utilizando o navegador de sua preferência para visualizar sua exibição sem nenhum estilo, que deve ser semelhante à seguinte:



- Analise o código HTML, identificando as tags utilizadas, assim como seus atributos, como class e id.
- Crie uma pasta css e dentro dela crie um arquivo style.css
- Modifique o documento index.html adicionando a tag <link> para vincular corretamente a folha de estilos externa que você acabou de criar.
- Em seu arquivo style.css adicione a importação da sua fonte personalizada, para isso é só colar: 

~~~
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap') 
~~~ 

Isso irá importar a nossa fonte Roboto diretamente do Google Fonts sem precisarmos fazer qualquer download. O @import irá importar um arquivo que for especificado dentro de url(‘  ’), no nosso caso a fonte.
- Após a importação das fontes, adicione as seguintes regras de estilo ao arquivo style.css:
- - cor de fundo da tag body em modo hexadecimal no valor #131313
- - cor do texto da tag h1 em cor predefinida de nome ‘white’
- - fonte do texto da tag h1 para Roboto
- - altura da classe media-picture em 400px
- - imagem de fundo da classe media-picture à sua escolha
- - cor do texto da classe review-score em cor predefinida de nome ‘white’
- - cor do fundo da classe review-score em modo hexadecimal no valor #e6bd09
- - padding na classe review-score com valor de 12px
- - cor de texto da tag h2 em cor predefinida de nome ‘steelblue’
- - cor do texto da tag p em modo hexadecimal no valor #bdbdbd
- - fonte do texto da tag p para Roboto
- - cor de texto da tag a em cor predefinida de nome ‘yellow’

Caso não hajam erros na vinculação da folha de estilos nem na definição das regras CSS, seu site deve estar se parecendo com o seguinte:

----

### Exercício resolvido!
[Clique aqui e confira](https://atividade-aula08-frontend.netlify.app/)