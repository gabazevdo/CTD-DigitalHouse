<h1>LISTA DE EXERCÍCIOS </h1>

<h2>Escreva um programa utilizando a linguagem JS para cada um dos problemas abaixo:</h2>

<br>

1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.

~~~ Javascript
const alturaRetangulo = 10;
const baseRetangulo = 20
console.log(`O perímetro do retangulo é: ${2*(alturaRetangulo+baseRetangulo)}`)
console.log(`A base do retangulo é: ${alturaRetangulo*baseRetangulo}`)
~~~

2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.
~~~Javascript
const ladoQuadrado = 10;
console.log(`O perímetro do Quadrado é: ${2*(ladoQuadrado+ladoQuadrado)}`)
console.log(`A base do Quadrado é: ${ladoQuadrado*ladoQuadrado}`)
~~~

3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.
~~~Javascript
const raioCircunferencia = 10;
console.log(`A área do círculo é: ${(Math.PI*raioCircunferencia).toFixed(2)}`)
console.log(`O perímetro do círculo é: ${((Math.PI*2)*raioCircunferencia).toFixed(2)}`)
~~~

4. Dado os três lados de um triângulo determinar o perímetro do mesmo.
~~~Javascript
const ladoTriangulo = 10;
console.log(`O perímetro do triângulo é: ${ladoTriangulo*3}`)
~~~

5. Ler um número inteiro e exibir o seu sucessor.
~~~Javascript
const numInteiro = 10;
console.log(`Variável com o valor ${numInteiro}, seu sucessor é: ${numInteiro+1}`)
~~~

6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.
~~~Javascript
const num1 = 50;
const num2 = 3;
console.log(`${num1} / ${num2} = ${(num1/num2).toFixed(2)}. O resto da divisão é ${((num1/num2)%2).toFixed(2)}`)
~~~

7. Solicitar a idade de uma pessoa em dias e informar na tela a idade em anos, meses e dias.
~~~Javascript
const diasVida = 11065;
const anosVida = ((diasVida/365).toFixed(0));
const mesesVida = ((anosVida/12).toFixed(0));
const diasVividos = ((mesesVida/31).toFixed(1));
console.log(`${diasVida} dias de vida. Sua idade é de ${anosVida} anos, ${mesesVida} meses e ${diasVividos} dias.`)
~~~

8. Dado que a fórmula para conversão de Fahrenheit para Celsius é JS = 5/9 (F – 32), leu um valor de temperatura em Fahrenheit e exibi-lo em Celsius
~~~Javascript
const grausF = 89;
const grausC = ((grausF - 32) * (5/9)).toFixed(2);
console.log(`Graus em Fahrenheit é ${grausF}. Em Celsius é ${grausC}`)
~~~

11. Faça um algoritmo para calcular a nota semestral de um aluno. A nota semestral é obtida pela média aritmética entre a nota de 2 bimestres.
Cada nota de bimestre é composta por 2 notas de provas.
~~~Javascript
const semestre = [8,7]
console.log(`Nota 1ºBim ${semestre[0]}. Nota 2ºBim ${semestre[1]}. Media semestre: ${(semestre[0]+semestre[1])/semestre.length}`)
~~~

12. Faça um algoritmo que transforme uma velocidade fornecida em m/s pelo usuário para
Km/h. Para tal, multiplique o valor em m/s por 3,6.


15. Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa. Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, faça um programa para ler os dados necessários e calcular a altura do prédio.
 
16. Escreva um programa para gerar o invertido de um número com três algarismos (exemplo: o invertido de 498 é 894).

17. Um programa para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para decidir o número de notas de cada valor que deve ser disponibilizado para o cliente que realizou o saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor fossem distribuídas em número mínimo possível. Por exemplo, se a quantia solicitada fosse R$ 87,00, o programa deveria indicar uma nota de R$ 50,00, três notas de R$ 10,00, uma nota de R$ 5,00 e duas notas de R$ 1,00. Escreva um programa que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o critério da distribuição ótima (considere existir notas de R$1,00; R$2,00; R$5,00; R$10,00; R$20,00; R$50,00 e R$100,00).

19. Escreva um programa que calcule a raiz de uma equação do primeiro grau.

20. Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada
maior do que ou igual às duas prestações, as quais devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da mercadoria for R$ 302,75, a entrada é de R$ 102,75 e as duas prestações são a iguais a R$ 100,00. Escreva um programa que receba o valor da mercadoria e forneça o valor da entrada e das duas prestações, de acordo com as regras acima. Observe que uma justificativa para a adoção desta regra é que ela facilita a confecção e o consequente pagamento dos boletos das duas prestações.


21. Escreva um programa que receba um número e exiba se ele é positivo ou negativo.

22. Escreva um programa que receba um número e exiba o seu módulo.

23. Escreva um programa que receba um número e imprima se este número é ou não par.

24. Escreva um programa que receba três números e mostre o maior entre eles.

25. Escreva um programa que receba o número equivalente ao mês e imprima a quantidade de dias deste mês.

26. Escreva um programa que receba 3 valores e escreva a soma dos 2 maiores.

27. Escreva um programa que receba 3 números e calcule a média ponderada entre eles.
Considere que o maior número recebe peso 5 e os outros dois recebem peso 2,5.

28. Escreva um programa que receba uma letra e mostre se ela é vogal ou consoante.

29. Escreva um programa que calcula o desconto previdenciário de um funcionário. Dado um
salário, o programa deve retornar o valor do desconto proporcional ao mesmo. O cálculo segue a regra: o desconto é de 11% do valor do salário, entretanto, o valor máximo de desconto é 334,29, o que seja menor.

30. Um posto está vendendo combustíveis com a seguinte tabela de descontos:
Álcool Até 25 litros, desconto de 2% por litro Acima de 25 litros, desconto de 4% por litro
Gasolina Até 25 litros, desconto de 3% por litro Acima de 25 litros, desconto de 5% por litro
Escreva um algoritmo que receba o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,70 e o preço do litro do álcool é R$ 1,90.

31. No Futebol Americano, usa-se o Quarterback Rating como um índice que indica o desempenho do quarterback (quando maior, melhor). Ele é calculado como indicado a seguir: Calcula-se o percentual de passes completados em relação aos passes tentados pelo quarterback. Deste valor subtrai-se 0,3 e divide-se por 0,2. Este valor não deve ser maior que 2,375 ou menor que 0 (caso seja, ajusta-se o valor para 2,375 ou 0,
        
respectivamente).
Em seguida, calcula-se a razão de jardas passadas pela quantidade de passes tentados. Deste valor, subtrai-se 3 e divide-se por 4. Novamente, este valor não deve ser maior que 2,375 ou menor que 0 (caso seja, procede-se como no caso anterior).
Agora, calcula-se a razão de passes para touchdows pelo número de passes tentados. Divide-se o valor por 0,05. Mais uma vez, este valor não deve ser maior que 2,375 ou menor que 0 (caso seja, procede-se como de costume).
Então, calcula-se a razão entre passes interceptados e o número de passes tentados. Deste valor, subtrai-se 0,095 e divide-se o resultado por 0,04. Como de praxe, este valor não deve ser maior que 2,375 ou menor que 0 (caso seja, atua-se como explicado).
O quarterback rating é calculando somando-se as quatro parcelas anteriores, multiplicando a soma por 100 e dividindo-se o produto por 6.
Escreva um programa, que receba o número de passes tentados, o número de passes completos, o número de jardas passadas, o número de passes para touchdown e o número de passes interceptados e informe o QB Rating do quarterback.

32. Escreva um programa que receba um caracter e diga se ele é uma vogal, consoante, número ou um símbolo (qualquer outro caracter, que não uma letra ou número).


34. Uma financeira usa o seguinte critério para conceder empréstimos: o valor total do empréstimo deve ser até dez vezes o valor da renda mensal do solicitante e o valor da prestação deve ser no máximo 30% da renda mensal do solicitante. Escreva um programa que receba a renda mensal de um solicitante, o valor total do empréstimo solicitado e o número de prestações que o solicitante deseja pagar e informe se o empréstimo pode ou não ser concedido.

35. Escreva um programa que receba um número inteiro de 1 a 7 e informe o dia da semana correspondente, sendo domingo o dia de número 1. Se o número não corresponder a um dia da semana, mostre uma mensagem de erro.

36. Em uma certificação são feitos são feitos 5 exames (I, II, III, IV e V). Escreva um programa que receba as notas destes exames e imprima a classificação do aluno, sabendo que a média é 70.
Classificação: A – passou em todos os exames;
B – passou em I, II e IV, mas não em III ou V; JS – passou em I e II, III ou IV, mas não em V. Reprovado – outras situações.

37. Uma Cia de pulverização utiliza avião para pulverizar lavouras. Os custos de pulverização dependem do tipo de praga e da área a ser contratada conforme a tabela:
Tipo 1 – ervas daninhas R$ 50,00 por acre; Tipo 2 – gafanhotos R$ 100,00 por acre; Tipo 3 – broca R$ 150,00 por acre;
Tipo 4 – todos acima R$ 250,00 por acre.
Se a área a ser pulverizada for superior a 1000 acres, o fazendeiro tem um desconto de 5%. Em adição, qualquer fazendeiro cujo custo for maior do que R$ 750,00 tem um desconto de 10% sobre o valor que ultrapassar os R$ 750,00. Caso ambos os descontos se aplicam o da área é calculado antes. Fazer um algoritmo que receba: o tipo de pulverização (1 a 4) e área a ser pulverizada; e imprima o valor a ser pago.

38. Chama-se ano bissexto o ano ao qual é acrescentado um dia extra, ficando ele com 366 dias, um dia a mais do que os anos normais de 365 dias, ocorrendo a cada quatro anos. Escreva um programa que verifique se um ano é bissexto. Um ano é bissexto se ele é divisível por 4. Entretanto, se o ano é divisível por 100, ele não é bissexto. Mas, se ele for

divisível por 400, ele volta a ser bissexto.
a. São bissextos os anos: 1600, 1996, 2000, 2004, 2008, 2012, 2016, 2400, 2800, ...
b. Não são bissextos: 1500, 1974, 1982, 1983, 1990, 2018, 2022, 2030, 2038, ...


                  40. Escreva um programa que receba um numero inteiro de 1 a 4 e mostre na tela o numero por extenso.

41. Escreva um programa que imprima todos os números inteiros do intervalo fechado de 1 a 100.

42. Escreva um programa que imprima todos os números inteiros de 100 a 1 (em ordem decrescente).

43. Escreva um programa que imprima todos os números pares do intervalo fechado de 1 a 100.


44. Escreva um programa que imprima todos os números de 1 até 100, inclusive, e a soma de todos eles.

45. Escreva um programa que receba 5 números, e imprima a média entre eles.

48. Escreva um programa que determine se um dado número N  é
primo ou não.

49. Escreva um programa que determine se um dado número N é
primo ou não.

50. Escreva um programa que receba um valor e imprima todas as possíveis combinações em
que o lançamento de um par de dados tenha como resultado da soma dos valores dos dados o número lido. Por exemplo, se a entrada for o número 7, o programa deve imprimir as seguintes combinações:
•16

•25 •34 •43 •52 •61

51. A série de Fibonacci é formada pela sequencia: • 1,1,2,3,5,8,13,21,34,55,...
Escreva um programa que gere a série de FIBONACCI até o N-ésimo termo (com N
sendo uma entrada do algoritmo).


53. Dado um país A, com 5.000.000 de habitantes e uma taxa de natalidade de 3% ao ano, e um país B com 7.000.000 de habitantes e uma taxa de natalidade de 2% ao ano, escreva um programa, que imprima o tempo necessário para que a população do país A ultrapasse a população do país B.
54. Construa um programa que receba um número e verifique se ele é um número triangular. (Um número é triangular quando é resultado do produto de três números consecutivos. Exemplo: 24 = 2 x 3 x 4)

56. Um número se diz perfeito se é igual à soma de seus divisores próprios. Divisores próprios de um número positivo N são todos os divisores inteiros positivos de N exceto o próprio N. Por exemplo, o número 6, seus divisores próprios são 1, 2 e 3, cuja soma é igual à 6 (1 + 2 + 3 = 6). Outro exemplo é o número 28, cujos divisores próprios são 1, 2, 4, 7 e 14, e a soma dos seus divisores próprios é 28 (1 + 2 + 4 + 7 + 14 = 28).

60. A famosa conjectura de Goldbach diz que todo inteiro par maior que 2 é soma de dois números primos. Testes foram feitos, mas ainda não se achou um contra-exemplo. Escreva um programa mostrando que a afirmação é verdadeira para todo número par entre 500 e 1000. O programa deve imprimir o número par e os dois primos que somados dão o número par.

61. Faça um programa em JS que crie e inicialize um array de 20 posições de inteiros com 0 para cada elemento. Imprima o vetor em seguida, indicando a posição e o valor na posição (um por linha).

62. Faça um programa em JS que receba um array de 10 posições e conte quantos números pares são elementos do array. Imprima esta quantidade.

63. Escreva um programa que receba dois vetores de números reais de mesma dimensão (10 posições), e imprima o vetor resultante da soma destes vetores.

64. Faça um programa em JS que receba um array de 20 inteiros e imprima o menor e o maior valor dentre os elementos do array.

65. Faça um programa em JS que receba um array de 20 inteiros e imprima o menor e o maior valor dentre os elementos do array, bem como suas respectivas posições.

66. Faça um programa em JS que copie o conteúdo de um vetor de 10 posições de inteiro em um segundo vetor e imprima este último.

67. Faça um programa em JS que receba dois vetores de 10 posições de inteiros e copie o maior valor dos dois em cada posição em um terceiro vetor. Em seguida, imprima este terceiro vetor.

68. Escreva um programa que receba o índice pluviométrico de cada dia do mês de junho e informe o dia que mais choveu, o dia que menos choveu e as médias pluviométricas de cada uma das duas quinzenas.

69. Escreva um programa que receba um vetor de 15 posições de inteiros. Em seguida, o programa deve ler um valor inteiro e imprimir o número de vezes que este valor ocorre no vetor.


73. Escreva um programa em JS que receba um array de 20 inteiros, calcule e imprima:
a. A moda dos elementos no array (elemento mais freqüente).
b. A mediana dos elementos no array (elemento central)
c. A média

74. Escreva um programa em JS que armazene um vetor de até 30 inteiros. O programa deve fornecer as seguintes operações:
a. Inserir um elemento no final do vetor
b. Inserir um elemento em uma dada posição
c. Remover um elemento de uma posição indicada
d. Remover todos elementos iguais a um valor indicado

e. Gerar um novo array sem duplicidades a partir deste array


76. Escreva um programa em JS, que receba uma string e conte quantas ocorrências de vogais
existem nesta string.

77. Escreva um programa em JS, que receba uma string, gere uma nova string com o texto
invertido e imprima esta nova string.

78. Escreva um programa em JS, que receba uma string e um caracter e conte o número de
ocorrências do caracter lido na string.

79. Escreva um programa em JS, que gere a substring de uma string original, dado a posição
inicial e a final da substring.

80. Escreva um programa em JS que receba duas string e informe se a primeira contém a
segunda.

81. Escreva um programa em JS que normalize uma string lida, em uma nova string.
Normalizar uma string é o processo de remover os espaços excedentes que separam as
palavras.

82. Escreva um programa em JS, que dada uma string (normalizada), imprima a maior palavra
dela.

83. Escreva um programa em JS, que gere a substring de uma string original, dado a posição
inicial e a final da substring.

84. Escreva um programa em JS que verifique se uma string normalizada é palíndrome (os
mesmos caracteres quando lida da direita para a esquerda).

85. Escreva um programa que receba uma string representando um número hexadecimal (base
16) e imprima sua representação em decimal (base 10).

86. Escreva um número que receba um número em Romano e imprima o equivalente em
decimal (base 10)

87. Escreva um programa em JS, que verifique se duas strings são iguais, independente da
caixa das letras. Por exemplo, este programa deve dizer que “Teste”é igual a “TeStE”.

88. Escreva um programa em JS, que coloque a string lida toda em caixa alta.

89. Escreva um programa em JS, que gere uma string composta pelo último nome, seguido de
virgula e as iniciais dos demais nomes (em ordem), seguida de ponto. Por exemplo, se a
string entrada for “Gabriel Garcia Marquez”, a string gerada deve ser “Marquez, G. G.”.

90. Escreva um programa em JS, que dado uma string, crie uma nova string contendo na
ordem em que aparecem no string dado, as vogais no começo e as consoantes no final.








