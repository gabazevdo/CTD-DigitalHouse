///// Dark Theme
const bodyElement = document.querySelector('body')

function replaceTheme() {
  bodyElement.classList.toggle('dark-mode')
}

///////////// Variáveis que armazenam a classe e o id que estão no HTML
var containerElemento = document.querySelector('.container')
var novaPostagemElemento = document.querySelector('#novaPostagem')

///////////// variaveis para armazenar os dados do input
var inputFoto = document.querySelector('#foto')
var inputTitulo = document.querySelector('#titulo')
var inputTexto = document.querySelector('#texto')

let arrayNovosPosts = []

///////////// Inserindo um novo post depois de preencher o formulário
// Utilizando o event listenner para adicionar. E nessa caso, foi removido o onclick do botao lá no html
novaPostagemElemento.addEventListener('click', event => {
  // Para evitar o recarregamento da página no momento em que o botão de dentro do formulário é clicado.
  event.preventDefault()

  let novoPost = {
    foto: inputFoto.value,
    titulo: inputTitulo.value,
    texto: inputTexto.value
  }

  containerElemento.innerHTML += ` 
        <div class="item"> 
            <img src="${novoPost.foto}"> 
            <h2>${novoPost.titulo}</h2> 
            <p>${novoPost.texto}</p>
        </div>`



  arrayNovosPosts.push(novoPost)

  //////////// Para limpar os campos de inout depois de enviar
  inputFoto.value = ''
  inputTitulo.value = ''
  inputTexto.value = ''
})

/////////////// Inserindo posts a partir de um objeto

var posts = [
  {
    foto: 'https://s3.static.brasilescola.uol.com.br/be/2022/01/tigre.jpg',
    titulo: 'O tigre',
    texto:
      'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
  },
  {
    foto: 'https://vejasp.abril.com.br/wp-content/uploads/2021/12/20211202-Tigre-de-bengala9-foto-Paulo-Gil-2.jpg-1.jpg',
    titulo: 'O tigre versão Shine',
    texto:
      'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
  },
  {
    foto: 'https://img.r7.com/images/leao-branco-juba-moya-19012022005116744',
    titulo: 'O leão',
    texto:
      'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.'
  }
]

for (let post of posts) {
  containerElemento.innerHTML += `
        <div class="item">
            <img src="${post.foto}">
            <h2>${post.titulo}</h2>
            <p>${post.texto}</p>
        </div>
    `
}