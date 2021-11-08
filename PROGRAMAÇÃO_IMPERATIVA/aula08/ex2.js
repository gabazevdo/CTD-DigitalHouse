/* Exercício “Pode Subir”

Objetivo
Vamos determinar em que momento usar uma estrutura condicional.

Microdesafios

Em um parque de diversões nos pedem um programa para verificar se os
passageiros da montanha-russa podem entrar no brinquedo.
1) Crie uma função podeSubir() que receba dois parâmetros:
- altura da pessoa;
- se está acompanhada.

Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode
subir ou não, baseado nas seguintes condições:

a) A pessoa deve medir mais de 1.40m e menos de 2 metros.
b) Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
c) Se a pessoa medir menos de 1.20m, não poderá subir, nem
acompanhada.

2) Modifique a função podeSubir(), de modo que ela exiba uma mensagem
de autorização ou de impedimento no acesso ao brinquedo dependendo
se a pessoa se enquadra ou não nas condições do exercício anterior. Por
exemplo:

a) Em caso de autorização, exiba a mensagem: “Acesso
autorizado” ou “Acesso autorizado somente com
acompanhante”;
b) Em caso de impedimento, exiba a mensagem: “Acesso
negado.” 
*/



let altura = parseFloat(Math.random()) + 1; // gera um número randômico entre 0 e 1 e soma +1 
let companhia = Math.floor(Math.random() * 2); // gera um número randômico booleano (entre 0 e 1) valor 0 é false / valor 1 é true

const podeSubir = (altura, companhia) => {
  if (altura >= 1.4 && altura <= 2) {
    return `
        Altura: ${altura.toFixed(2)} 
        Companhia: ${companhia == 1 ? "Sim" : "Não"}
        Acesso autorizado, tem altura ideal.
        `;
  } else if (altura < 1.4 && companhia) {
    return `
        Altura: ${altura.toFixed(2)}
        Companhia: ${companhia == 1 ? "Sim" : "Não"}
        Acesso autorizado somente com acompanhante.
        `;
  } else {
    return `
        Altura: ${altura.toFixed(2)}
        Companhia: ${companhia == 1 ? "Sim" : "Não"}
        Acesso negado. Você não tem a altura ideal e não tem companhia.
        `;
  }
};
console.log(podeSubir(altura, companhia));
