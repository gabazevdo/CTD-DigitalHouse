import { somar } from './modules/somar.js'
import { subtrair } from './modules/subtrair.js'
import { dividir } from './modules/dividir.js'
import { multiplicar } from './modules/multiplicar.js'

function calculadora() {
  let operacao = prompt(` Bem vindo a calculadora 22.6.0
  Digite a opção correspondente a operação desejada:

  [1]- SOMA
  [2]- DIVISÃO
  [3]- SUBTRAÇÃO
  [4]- MULTIPLICAÇÃO
  `)

  if (operacao == 0 || operacao > 4) {
    alert('Opção inválida, tente novamente')
    calculadora()
  } else {
    let num1 = Number(prompt('Digite o primeiro número'))
    let num2 = Number(prompt('Digite o segundo número'))

    switch (Number(operacao)) {
      case 1:
        somar(num1, num2)
        break
      case 2:
        dividir(num1, num2)
        break
      case 3:
        subtrair(num1, num2)
        break
      case 4:
        multiplicar(num1, num2)
        break
      default:
        console.log('Opção inválida')
    }
    if (confirm('mais um calculo?') == true) {
      calculadora()
    } else {
      alert('Vlw, flw')
      console.clear();
    }
  }
}
calculadora()
