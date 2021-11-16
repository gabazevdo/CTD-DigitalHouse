let arrayString = ["maça", "banana", "abacaxi", "manga"]
let arrayNumeros = [1,2,3,4]

//Imprimindo arrays originais
console.log(`Array de strings original: ${arrayString}`)
console.log(`Array de números original: ${arrayNumeros}
`)

//1 - Imprimindo um item específico dos arrays
console.log(`Acessando um item específico (índice [2]) do array de strings: ${arrayString[2]}`)
console.log(`Acessando um item específico (índice [3]) do array de números: ${arrayNumeros[3]}
`)

//2 - Modificando um item do array

arrayString[3] = "melancia"
console.log(`Índice [3] (manga substituído por melancia) do array modificado: ${arrayString}`)

arrayNumeros[2] = 100
console.log(`Índice [2] (3 substituído por 100) do array modificado: ${arrayNumeros}
`)


//3 - Adicionando um item ao arra com o método .push()
arrayString.push("mamão")
console.log(`Adicionando um item ao array de strings: ${arrayString}`)

arrayNumeros.push(5)
console.log(`Adicionando um item ao array de números: ${arrayNumeros}
`)

//4 - Removendo um item do array com o pop() - este, irá remover o último item do array
arrayString.pop()
console.log(`Removendo o último índice do array de string: ${arrayString} - índice [4] mamão removido`)

arrayNumeros.pop()
console.log(`Removendo o último índice do array de números: ${arrayNumeros} - índice [4] 5 removido
`)

//5 - Comparar elementos de um array com outro

console.log(`O ${arrayString[2]} é igual ao ${arrayNumeros[3]}? ${arrayNumeros[2] === arrayString[2]} `)
console.log(`O ${arrayString[0]} é igual ao ${arrayNumeros[4]} (índice inexistente) ? ${arrayNumeros[4] === arrayString[0]}
`)
console.log(`Comparação de índices do mesmo array. ${arrayString[0]} é igual ao ${arrayString[2]}? ${arrayString[0]==arrayString[2]}`)

console.log(`Comparação de índices do mesmo array. ${arrayNumeros[0]} é igual ao ${arrayNumeros[2]}? ${arrayNumeros[0]==arrayNumeros[2]}
`)






