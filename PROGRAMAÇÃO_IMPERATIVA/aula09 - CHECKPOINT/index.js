// Declaração variável para informar o tempo do preparo
let tempoPreparo = 0;

let opcao = Number(
  prompt(
    `Informe qual prato deseja fazer:

1 - Pipoca
2 - Macarrão
3 - Carne
4 - Feijão
5 - Brigadeiro
`
  )
);

const microondas = () => {
  if (opcao == 1) {
    //alert("Pipoca");
    tempoPreparo = prompt(
      "Informe quantos em quantos segundos deseja preparar a pipoca"
    );

    if (tempoPreparo < 10) {
      alert("Tempo insuficiente!");
    } else if (tempoPreparo == 10 || tempoPreparo <= 19) {
      alert("Prato pronto, bom apetite!!! - Cuidado está quente");
    } else if (tempoPreparo == 20 || tempoPreparo <= 29) {
      alert("Queimou");
    } else if (tempoPreparo == 30 || tempoPreparo > 30) {
      alert("KABUMMMM");
    }
  } else if (opcao == 2) {
    //alert("Macarrão");
    tempoPreparo = prompt(
      "Informe quantos em quantos segundos deseja preparar o macarrão"
    );

    if (tempoPreparo < 8) {
      alert("Tempo insuficiente!");
    } else if (tempoPreparo == 8 || tempoPreparo <= 16) {
      alert("Prato pronto, bom apetite!!! - Cuidado está quente");
    } else if (tempoPreparo == 17 || tempoPreparo <= 23) {
      alert("Queimou");
    } else if (tempoPreparo >= 24) {
      alert("KABUMMMM");
    }
  } else if (opcao == 3) {
    //alert("Carne");
    tempoPreparo = prompt(
      "Informe quantos em quantos segundos deseja preparar a carne"
    );

    if (tempoPreparo < 15) {
      alert("Tempo insuficiente!");
    } else if (tempoPreparo == 15 || tempoPreparo <= 29) {
      alert("Prato pronto, bom apetite!!! - Cuidado está quente");
    } else if (tempoPreparo == 30 || tempoPreparo <= 44) {
      alert("Queimou");
    } else if (tempoPreparo >= 45) {
      alert("KABUMMMM");
    }
  } else if (opcao == 4) {
    //alert("Feijão");
    tempoPreparo = prompt(
      "Informe quantos em quantos segundos deseja preparar o feijão"
    );

    if (tempoPreparo < 12) {
      alert("Tempo insuficiente!");
    } else if (tempoPreparo == 12 || tempoPreparo <= 24) {
      alert("Prato pronto, bom apetite!!! - Cuidado está quente");
    } else if (tempoPreparo == 25 || tempoPreparo <= 35) {
      alert("Queimou");
    } else if (tempoPreparo >= 36) {
      alert("KABUMMMM");
    }
  } else if (opcao == 5) {
    //alert("Brigadeiro");
    tempoPreparo = prompt(
      "Informe quantos em quantos segundos deseja preparar o brigadeiro"
    );

    if (tempoPreparo < 8) {
      alert("Tempo insuficiente!");
    } else if (tempoPreparo == 8 || tempoPreparo <= 16) {
      alert("Prato pronto, bom apetite!!! - Cuidado está quente");
    } else if (tempoPreparo == 17 || tempoPreparo <= 23) {
      alert("Queimou");
    } else if (tempoPreparo >= 24) {
      alert("KABUMMMM");
    }
  } else {
    alert("Prato inexistente");
  }

  
};

microondas();