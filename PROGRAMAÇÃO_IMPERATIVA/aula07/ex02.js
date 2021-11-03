/* 
Operando Logicamente
É chegado o momento de colocar em prática todas essas informações sobre os operadores e como podemos utilizá-los para criar sequências lógicas e de comparação. 
Para isso, vamos realizar uma série de exercícios que nos ajudarão a fixar os conceitos aprendidos até aqui.
Ex1. O que cada expressão retorna?
Dê uma olhada nestes exemplos e pense sobre o que cada um retorna:
1. !true //False 
2. !false //true
3. !!false //false
4. !!true // true
5. !1 //false 
6. !!1 // true
7. !0 // true
8. !!0 // false
9. !!"" // false  
10. let x = 5 
    let y = 9;
    x < 10 && x!==5 // false
    x>9 || x === 5  // true
    !(x===y) // true

Ex2. O que cada expressão retorna?
Sem testar no console, o que você acha que cada uma destas expressões irá retornar? Elas são true ou false?

1.  
    let x=10
    let y ="a"
    y==="b" || x >= 10

    // true

2.
    let x=3
    let y=8
    !(x == "3" || x === y) && !(y !== 8 && x <= y)

    // false

3.
    let str = ""
    let msg = "haha!"
    let eBonito = "false"
    !((str || msg) && eBonito)

    // false

 */

