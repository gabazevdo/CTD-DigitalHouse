/////////////////////////////// AULA 24/05
// A ideia era criar um botão para trocar o tema do site
// Modificamos o style.css adicionando atributos e valores para o dark-mode

const bodyElement = document.querySelector('body')

function replaceTheme() {
    bodyElement.classList.toggle('dark-mode')
}




/////////////////////////////// AULA 25/05
// A ideia aqui foi criar um objeto para armazenar os dados e replica-los utilizando o innerHTML e o FOR OF



let containerElement = document.querySelector('.container')

let post = {
    foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLBt-BdbZc4xeOLj3_Bu81aPKyRkuBQv3e8w&usqp=CAU',
    titulo: 'Gato',
    texto: `O gato (Felis silvestris catus), também conhecido como gato caseiro, gato urbano ou gato doméstico,[4] é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação. Ocupando o topo da cadeia alimentar, é predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetos. Segundo pesquisas realizadas por instituições norte-americanas, os gatos consistem no segundo animal de estimação mais popular do mundo, estando numericamente atrás apenas dos peixes de aquário.`,
}

let posts = [
    {
        foto:`https://api.lorem.space/image/burger?w=150&h=150`,
        titulo:'Teste new post',
        texto:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis itaque, quibusdam porro, fugit perspiciatis a ipsa dolore sit obcaecati quisquam impedit eius eligendi quia assumenda iusto quod aut, commodi minus placeat. Aliquam sapiente eligendi exercitationem ipsam in aperiam fugiat modi provident nobis. Corrupti debitis laboriosam, vitae quo obcaecati a quidem.'
    },
    {
        foto:`https://api.lorem.space/image/burger?w=150&h=150`,
        titulo:'Teste new post',
        texto:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis itaque, quibusdam porro, fugit perspiciatis a ipsa dolore sit obcaecati quisquam impedit eius eligendi quia assumenda iusto quod aut, commodi minus placeat. Aliquam sapiente eligendi exercitationem ipsam in aperiam fugiat modi provident nobis. Corrupti debitis laboriosam, vitae quo obcaecati a quidem.'
    },{
        foto:`https://api.lorem.space/image/burger?w=150&h=150`,
        titulo:'Teste new post',
        texto:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis itaque, quibusdam porro, fugit perspiciatis a ipsa dolore sit obcaecati quisquam impedit eius eligendi quia assumenda iusto quod aut, commodi minus placeat. Aliquam sapiente eligendi exercitationem ipsam in aperiam fugiat modi provident nobis. Corrupti debitis laboriosam, vitae quo obcaecati a quidem.'
    },{
        foto:`https://api.lorem.space/image/burger?w=150&h=150`,
        titulo:'Teste new post',
        texto:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis itaque, quibusdam porro, fugit perspiciatis a ipsa dolore sit obcaecati quisquam impedit eius eligendi quia assumenda iusto quod aut, commodi minus placeat. Aliquam sapiente eligendi exercitationem ipsam in aperiam fugiat modi provident nobis. Corrupti debitis laboriosam, vitae quo obcaecati a quidem.'
    },
]



// Adicionando apenas um item a partir de um objeto
containerElement.innerHTML +=`
<div class="item">
<img src=${post.foto}>
<h2>${post.titulo}</h2>
<p>
${post.texto}
</p>
</div>
`

// Adicionando vários itens a partit de um array de objetos
for(let post of posts){

    containerElement.innerHTML +=`
        <div class="item">
            <img src=${post.foto}>
            <h2>${post.titulo}</h2>
            <p>${post.texto}</p>
        </div>
    `
}


