// Início programa
console.log(
  `     
        |--------------.:: MICROONDAS ::.---------------|
        _________________________________________________
        | Opção |  Alimento  | Tempo preparo |          |
        -------------------------------------------------
        |   1   |   Pipoca   |  10 segundos  | (padrão) |
        |   2   |  Macarrão  |  8 segundos   | (padrão) |
        |   3   |   Carne    |  15 segundos  | (padrão) |
        |   4   |   Feijão   |  12 segundos  | (padrão) |
        |   5   | Brigadeiro |  8 segundos   | (padrão) |
        _________________________________________________        
      `
);

const microondas = (opcao, tempo) => {
  console.log(`Opção ${opcao} com o tempo de preparo em ${tempo}s`);
  if (opcao == 1) {
    if (tempo < 10) {
      console.log(`Tempo insuficiente!`);
    } else if (tempo == 10 || tempo <= 19) {
      console.log(`Está pronto, bom apetite!!! - Cuidado, pode estar quente`);
    } else if (tempo == 20 || tempo <= 29) {
      console.log(`Passou do ideal - Queimou`);
    } else if (tempo == 30 || tempo > 30) {
      console.log(`Eita, colocou muito tempo - KABUMMMM`);
    }
  } else if (opcao == 2) {
    if (tempo < 8) {
      console.log(`Tempo insuficiente!`);
    } else if (tempo == 8 || tempo <= 16) {
      console.log(`Está pronto, bom apetite!!! - Cuidado, pode estar quente`);
    } else if (tempo == 17 || tempo <= 23) {
      console.log(`Passou do ideal - Queimou`);
    } else if (tempo >= 24) {
      console.log(`Eita, colocou muito tempo - KABUMMMM`);
    }
  } else if (opcao == 3) {
    if (tempo < 15) {
      console.log(`Tempo insuficiente!`);
    } else if (tempo == 15 || tempo <= 29) {
      console.log(`Está pronto, bom apetite!!! - Cuidado, pode estar quente`);
    } else if (tempo == 30 || tempo <= 44) {
      console.log(`Passou do ideal - Queimou`);
    } else if (tempo >= 45) {
      console.log(`Eita, colocou muito tempo - KABUMMMM`);
    }
  } else if (opcao == 4) {
    if (tempo < 12) {
      console.log(`Tempo insuficiente!`);
    } else if (tempo == 12 || tempo <= 24) {
      console.log(`Está pronto, bom apetite!!! - Cuidado, pode estar quente`);
    } else if (tempo == 25 || tempo <= 35) {
      console.log(`Passou do ideal - Queimou`);
    } else if (tempo >= 36) {
      console.log(`Eita, colocou muito tempo - KABUMMMM`);
    }
  } else if (opcao == 5) {
    if (tempo < 8) {
      console.log(`Tempo insuficiente!`);
    } else if (tempo == 8 || tempo <= 16) {
      console.log(`Está pronto, bom apetite!!! - Cuidado, pode estar quente`);
    } else if (tempo == 17 || tempo <= 23) {
      console.log(`Passou do ideal - Queimou`);
    } else if (tempo >= 24) {
      console.log(`Eita, colocou muito tempo - KABUMMMM`);
    }
  } else {
    console.log("Prato inexistente");
  }
};
//1º parâmetro - opção do prato (o ideial é entre 1 e 5)
//2º parâmtreo - tempo do preparo
microondas("pipoca", 89);

// Fiz tbm utilizando o prompt =>  https://checkpoint1-microondas.netlify.app/
