const userNameElement = document.querySelector('#userName')

// validação simples
/*
userNameElement.addEventListener('keyup', event => {
  console.log(event.target.checkValidity())

  if (event.target.checkValidity()) {
    event.target.classList.remove('error')
  } else {
    event.target.classList.add('error')
  }
})

*/

// Validação intermediária
/* 
const userMailControlerElement = document.querySelector('#userMailControler')
const userEmailInputElement = userMailControlerElement.children[1]

userEmailInputElement.addEventListener('keyup', event =>{

  if (event.target.checkValidity()) {
    event.target.classList.remove('error')
  } else {
    event.target.classList.add('error')
  }

}) */

//Validação avançada

const formControlsElements = document.querySelectorAll('.form-control')

for (let control of formControlsElements) {
  const controlInputElement = control.children[1]

  controlInputElement.addEventListener('keyup', event => {
    if (event.target.checkValidity()) {
      control.classList.remove('error')
    } else {
      control.classList.add('error')
    }
  })
  
}
