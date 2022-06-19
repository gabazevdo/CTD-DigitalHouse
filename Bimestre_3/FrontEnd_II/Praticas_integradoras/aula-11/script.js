const formControlsElements = document.querySelectorAll('.form-control')

const createUserButtonElement = document.querySelector('#createUserButton')

var formValidation = {
  userName: false,
  userEmail: false,
  userPassword: false,
  userPasswordConfirm: false
}

createUserButtonElement.addEventListener('click', event => {
  event.preventDefault()

  let formValid = Object.values(formValidation).every(Boolean)

  window.location('./pages/login.html')
  
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


