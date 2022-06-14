const formControlsElements = document.querySelectorAll('.form-control')

for(let control of formControlsElements) {

    const controlInputElement = control.children[1]

    controlInputElement.addEventListener('keyup', event => {

        if(event.target.checkValidity()) {

            control.classList.remove('error')

        } else {

            control.classList.add('error')

        }

    })

}