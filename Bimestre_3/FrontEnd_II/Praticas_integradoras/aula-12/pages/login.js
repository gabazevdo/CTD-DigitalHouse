const loginButtonElement = document.querySelector('#buttonLogin')
let userEmailValue

loginButtonElement.addEventListener('click', event => {
  event.preventDefault()

  // Para verificar se todos os valores estao true/Válido

  let formValid = Object.values(formValidation).every(Boolean)

  if (formValid) {


    let user = {
      name: 'Gabriel',
      surname : 'Azevedo',
      age: 30,
      email: userEmailValue
      
    }

    localStorage.setItem(`userEmail`, userEmailValue)

    localStorage.setItem('user', JSON.stringify(user)) 

    window.location = './home.html'
  } else {
    console.log(formValid)
    console.log(formValidation)
    alert('Preencha os dados corretamente')
  }
})

const formControlsElements = document.querySelectorAll('.form-control')

console.log(formControlsElements)

var formValidation = {
  userEmail: false,
  userPassword: false
}

for (let control of formControlsElements) {
  const controlInputElement = control.children[1]

  controlInputElement.addEventListener('keyup', event => {
    let inputValid = event.target.checkValidity()
    console.log(inputValid)

    formValidation[event.target.id] = inputValid

    if (event.target.id == 'userEmail') {
      userEmailValue = event.target.value
    }

    if (inputValid) {
      control.classList.remove('error')
    } else {
      control.classList.add('error')
    }
  })
}
