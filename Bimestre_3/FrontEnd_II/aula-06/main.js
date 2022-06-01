///// Dark Theme

const bodyElement = document.querySelector('body')

function replaceTheme() {
    bodyElement.classList.toggle('dark-mode')
}

/////


var novoPost = {
    foto: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info',
    titulo: 'Gato',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, accusamus?'
}
var containerElemento = document.querySelector('.container')

var posts = [
    {
        foto: 'https://s3.static.brasilescola.uol.com.br/be/2022/01/tigre.jpg',
        titulo: 'O tigre',
        texto: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
    },
    {
        foto: 'https://vejasp.abril.com.br/wp-content/uploads/2021/12/20211202-Tigre-de-bengala9-foto-Paulo-Gil-2.jpg-1.jpg',
        titulo: 'O tigre versão Shine',
        texto: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
    },
    {
        foto: 'https://img.r7.com/images/leao-branco-juba-moya-19012022005116744',
        titulo: 'O leão',
        texto: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.'
    },
    {
        foto: "./imagens/leopardo.jpg",
        titulo: 'O Leopardo',
        texto: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outrosfelinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do ossohióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negramelanista.'
    },
    {
        foto: './imagens/pantera-negra.jpg',
        titulo: 'A Pantera',
        texto: 'A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente oleopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.',
    },
    {
        foto: './imagens/jaguar.jpg',
        titulo: 'O Jaguar',
        texto: 'O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Pantheraleo).',
    },
    {
        foto: './imagens/chita.jpg',
        titulo: 'O Guepardo',
        texto: 'O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.',
    },
    {
        foto:'https://www.zooplus.pt/magazine/wp-content/uploads/2021/08/caracal_2.jpeg',
        titulo: 'Caracal ou Lince-do-deserto',
        texto: 'O Caracal sente-se em casa nas regiões secas da Ásia e África. As suas características orelhas com longos tufos pretos nas pontas fazem lembrar os linces e por isso estes animais são também conhecidos como Lince-do-deserto. Como são relativamente fáceis de domesticar algumas pessoas têm um Caracal como animal de estimação. No entanto, estes felinos são indiscutivelmente animais selvagens e por isso desadequados para viver em família.'
    },
    {
        foto: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info',
        titulo: 'Gato doméstico (Felis silvestris catus)',
        texto: 'O gato doméstico é um dos felinos mais populares e muito comum como animal de estimação. Possui aproximadamente 250 espécies deste felino de pequeno porte. Sua alimentação é composta por pequenos animais, especialmente roedores, aves e répteis. Seu tempo médio de vida é de 15 anos, seu peso varia de acordo com a espécie, podendo chegar a até 7 quilos. Com hábitos noturnos, os gatos tendem a dormir mais do que outros animais, entre 13 e 14 horas diárias, especialmente como forma de conservar energia. Seu comportamento independente e preguiçoso é uma de suas principais características, inspirando inclusive personagens de diferentes filmes como Garfield, O Gato de Botas e Gato Félix.'

    },
    {
        foto: 'https://static.natgeo.pt/files/styles/image_3200/public/serval.webp?w=1450&h=816',
        titulo: 'Serval',
        texto: 'O serval é um mamífero carnívoro da família dos felídeos. Mede cerca de 85 cm, mais 40 cm de cauda. São felinos de porte médio, sendo que em seu habitat são menores do que felinos de grande porte como as panteras e guepardos mas maiores do que felinos de pequeno porte como os gatos selvagens africanos.'
    },
    {
        foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Manoel.jpg/1024px-Manoel.jpg',
        titulo:'Gato-di-Pallas',
        texto: 'O gato-de-pallas (Felis manul ou Otocolobus manul) também conhecido como manul, é um pequeno gato selvagem da Ásia Central e sul da Sibéria. Três tipos de gatos são conhecidos no mundo: o gato-de-pallas siberiano, o gato-de-pallas da Ásia Central e o o gato-de-pallas tibetano. O seu nome vulgar é derivado do nome daquele que primeiro o descreveu, em 1776: Peter Simon Pallas. Eles não toleram bem a presença de humanos e não podem ser domesticados.'
    },
    {
        foto: 'https://static.todamateria.com.br/upload/fe/li/felinospuma-cke.jpg?auto_optimize=low',
        titulo: 'Puma',
        texto: 'O puma é um felino nativo da América que também pode ser conhecido como onça-parda ou suçuarana. Encontrado em diversos ambientes, fazendo deste o mamífero terrestre com maior distribuição geográfica no ocidente, passando por locais com clima tropical, desertos e subártico.'

    },
   {
        foto: 'https://static.todamateria.com.br/upload/ja/gu/jaguatiricafelinos-cke.jpg?auto_optimize=low',
        titulo: 'Jaguatirica (Leopardus pardalis)',
        texto: 'A jaguatirica é um felino que pode ser encontrado no Brasil, pois seu habitat costuma ser florestas tropicais, subtropicais, savanas e mangues.Com uma aparência semelhante à outros felinos, especialmente a onça-pintada, a jaguatirica possui pelos curtos, na cor dourada ou cinza claro e diversas manchas pretas distribuídas pelo corpo.É considerado um felino de médio porte, mede cerca de 50 cm e pode pesar até 15 quilos.'

    },
    {
        foto: 'https://static.todamateria.com.br/upload/fe/li/felinosgatoleopardoasiatico-cke.jpg?auto_optimize=low',
        titulo: 'Gato-leopardo-asiático',
        texto: 'O gato-leopardo-asiático é uma espécie de felino que vive principalmente no sudoeste asiático e subcontinente indiano. Leva este nome devido a sua semelhança física com o leopardo, porém pertence a gêneros diferentes: enquanto o gato-leopardo é do gênero Prionailurus, o leopardo pertence ao gênero Panthera. Muito semelhante ao gato doméstico, o gato-leopardo pode medir até 45 cm, cerca de 20 cm de cauda e pesar até 7 quilos.'
    }
                               
]

for(let post of posts) {

    containerElemento.innerHTML += `
        <div class="item">
            <img src="${post.foto}">
            <h2>${post.titulo}</h2>
            <p>${post.texto}</p>
        </div>
    `

}
// Alicia Oliveira
// Lara Mangabeira
// Glaucia Ximenes
// Gabriel Azevedo
// Fabio Silva
// Josemar Silva