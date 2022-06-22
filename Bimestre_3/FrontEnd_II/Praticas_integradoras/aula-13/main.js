const cepInputElement = document.querySelector('#cep')
const cidadeInputElement = document.querySelector('#cidade')
const estadoInputElement = document.querySelector('#estado')
const ruaInputElement = document.querySelector('#rua')


const inputTeste = document.querySelector('#teste')

cepInputElement.addEventListener('keyup', event => {
  let inputValue = event.target.value

  console.log(cepInputElement.value)

  if (inputValue.length === 8) {
    fetch(`https://viacep.com.br/ws/${inputValue}/json/`).then(response => {
      console.log(response)
      response.json().then(
        success =>{
          let teste = success


          inputTeste.innerHTML = `
          

          <p>Rua</p>
          <li> ${teste.logradouro} </li>
          <p>Bairro</p>
          <li> ${teste.bairro} </li>
          <p>Cidade</p>
          <li> ${teste.localidade} </li>
          <p>Estado</p>
          <li> ${teste.uf} </li>
          <p>CEP</p>
          <li> ${teste.cep} </li>

          
          `
          console.log(teste)
          // cidadeInputElement.value = success.localidade
          // estadoInputElement.value = success.uf
          // ruaInputElement.value = success.logradouro

/* 

bairro: "Jardim da Rainha"
cep: "06656-370"
complemento: ""
ddd: "11"
gia: "3736"
ibge: "3522505"
localidade: "Itapevi"
logradouro: "Rua Rodolpho Voight"
siafi: "6551"
uf: "SP"

*/


          

        }
      )
    })
   
    
    
  }
})
