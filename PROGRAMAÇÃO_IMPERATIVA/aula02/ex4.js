/* Exercício:
Um nutricionista enviou a seguinte tabela com os dados de seus clientes e, você será responsável por calcular o Índice de Massa Corporal de cada registro:


Quais são as variáveis? Quais são as constantes? De que tipo são? Qual variável poderia armazenar o valor null segundo estes dados?

O Índice de Massa Corporal (IMC) se calcula dividindo o peso pela altura2  (a altura deve estar em metros e o peso em quilogramas). Por exemplo, no caso de Carlos de Souza, a altura ao quadrado é 3,09. 

Você deverá criar 6 variáveis:
Nome
Idade
Peso
Altura
Plano (só nos interessa saber se TEM ou NÃO TEM)
Índice de Massa Corporal (IMC)
 */


// Declaração das variáveis
let nome, idade, peso, altura, plano, IMC

//Paciente 1
nome = "Jose da Silva"
idade = 27
peso = 83.5
altura = 1.70
plano = "ouro"
console.log(`Paciente ${nome} tem ${idade} anos, seu peso é ${peso}. Tem plano? ${plano}.\nO IMC é ${(peso/(altura**2)).toFixed(2)}\n`)


//Paciente 2
nome = "Carlos de Souza"
idade = 28
peso = 80.1
altura = 1.76
plano = "Diamante" 
console.log(`Paciente ${nome} tem ${idade} anos, seu peso é ${peso}. Tem plano? ${plano}.\nO IMC é ${(peso/(altura**2)).toFixed(2)}\n`)


//Paciente 3
nome = "Aline Ferreira"
idade = 33
peso = 63.7
altura = 1.53
plano = "não possui" 
console.log(`Paciente ${nome} tem ${idade} anos, seu peso é ${peso}. Tem plano? ${plano}.\nO IMC é ${(peso/(altura**2)).toFixed(2)}\n`)


//Paciente 4
nome = "Ana Paula"
idade = 26
peso = 55
altura = 1.62
plano = "prata" 
console.log(`Paciente ${nome} tem ${idade} anos, seu peso é ${peso}. Tem plano? ${plano}.\nO IMC é ${(peso/(altura**2)).toFixed(2)}\n`)


//Utilizando Função 

const massaCorporal_IMC = (nome, idade, peso, altura, plano) =>{
    return console.log(`Paciente ${nome} tem ${idade} anos, seu peso é ${peso}. Tem plano? ${plano}.\nO IMC é ${(peso/(altura**2)).toFixed(2)}\n`)
}
massaCorporal_IMC("Gabriel Azevedo", 30, 80, 1.85, "Gold")

