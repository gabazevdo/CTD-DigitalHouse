const formControlsElements = document.querySelectorAll('.form-control')

const createUserButtonElement = document.querySelector('#createUserButton')

const userPasswordElement = document.querySelector('#userPassword')
const userPasswordConfirmElement = document.getElementById(
  'userPasswordConfirm'
)

var formValidation = {
  userName: false,
  userEmail: false,
  userPassword: false,
  userPasswordConfirm: false
}

createUserButtonElement.addEventListener('click', event => {
  event.preventDefault()

  console.log(formValidation)

  // Para verificar se todos os valores estao true/Válido
  let formValid = Object.values(formValidation).every(Boolean)

  if (formValid) {
    window.location = './pages/login.html'
  } else {
    console.log('não deu')
  }
})

for (let control of formControlsElements) {
  const controlInputElement = control.children[1]

  controlInputElement.addEventListener('keyup', event => {
    let inputValid = event.target.checkValidity()

    formValidation[event.target.id] = inputValid
    if (inputValid) {
      control.classList.remove('error')
    } else {
      control.classList.add('error')
    }
  })
}

/// Add um escutador de evento ao passwordConfirm - o 'blur' é para o momento em que o campo do input deixar de estar selecionado.
userPasswordConfirmElement.addEventListener('blur', event => {
  //Verificando se os campos são diferentes
  let verificacao =
    userPasswordElement.value !== userPasswordConfirmElement.value
  if (verificacao) {
    //Se forem diferentes, adiciono a classe error no passwordConfirm
    formControlsElements[3].classList.add('error')
    // Setando o atributo como false para impedir de prosseguir no clique do botao
    formValidation[event.target.id] = false
  }
})
