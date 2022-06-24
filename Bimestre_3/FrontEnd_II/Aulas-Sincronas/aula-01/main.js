let arrayNumeros = [1, 2, 4, 8];

// As interações com o FOR deve seguir este curso:
// 1º iteração 0 + 1 = 1
// 2º iteração 1 + 2 = 3
// 3º iteração 3 + 4 = 7
// 4º iteração 7 + 8 = 15

// Utilizando o FOR IN
let somaForIn = 0;
for(let indiceArray in arrayNumeros){
  somaForIn = somaForIn + arrayNumeros[indiceArray]
  console.log(somaForIn)
}

// Utilizando o FOR OF
let somaForOf = 0;
for(let indiceArray of arrayNumeros){
  somaForOf += indiceArray
  console.log(somaForOf)
}

// Utilizando o FOR comum
let somaFor = 0;
for (let i = 0; i < arrayNumeros.length; i++) {
  somaFor += arrayNumeros[i]
  console.log(`Indice(posição) ${i} + Propriedade(valor) Array ${arrayNumeros[i]} = ${somaFor}`)
}



