export function dividir(numero1, numero2){

  let total = 0;

  if(!numero1 || numero2 === 0){
    console.log("não é possível dividir por 0")
  }else{
    total = numero1 / numero2
  }
  return console.log(total)
}


