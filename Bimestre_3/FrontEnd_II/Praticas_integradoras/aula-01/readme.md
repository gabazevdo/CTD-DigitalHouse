# Atividade 

## Prática Integradora
### Objetivo

Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. 
Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array.

Para ter acesso a atividade [clique aqui](https://docs.google.com/document/d/1N5DLwj2qi70dMJDWG9-qoX6FvGt25o05/edit#).

~~~javascript
// Array de entrada [1,2,4,8]

// O objetivo é somar o valor da posição(iteração) do array com o seu valor:

// 1º - iteração 0 + valor 1 = 1
// 2º - iteração 1 + valor 2 = 3
// 3º - iteração 3 + valor 4 = 7
// 4º - iteração 7 + valor 8 = 15


for(let number in arr){
  // soma =+ arr[number]
  soma = soma + arr[number]
  console.log(soma)
}
~~~
