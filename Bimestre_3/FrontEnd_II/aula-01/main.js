let arr = [1, 2, 4, 8];
let soma = 0;

// 1º iteração 0 + 1 = 1
// 2º iteração 1 + 2 = 3
// 3º iteração 3 + 4 = 7
// 4º iteração 7 + 8 = 15

for(let number in arr){
  // soma =+ arr[number]
  soma = soma + arr[number]
  console.log(soma)
}


////////////////// Realizando a mesma atividade com o FOR

// for (let i = 0; i < arr.length; i++) {
//   soma += arr[i]
//   console.log(`${i} + ${arr[i]} = ${soma}`)
// }

