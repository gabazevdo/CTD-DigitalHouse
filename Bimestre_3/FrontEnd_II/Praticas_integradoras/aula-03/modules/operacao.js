import { somar } from "./somar.js";
import { subtrair } from "./subtrair.js";
import { dividir } from "./dividir.js";
import { multiplicar } from "./multiplicar.js";


export function operacao(operacao){
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
    deNovo();
  }
}


function deNovo(){
  if (confirm('mais um calculo?') == true) {
    calculadora()
  } else {
    alert('Vlw, flw')
    console.clear();
  }
}