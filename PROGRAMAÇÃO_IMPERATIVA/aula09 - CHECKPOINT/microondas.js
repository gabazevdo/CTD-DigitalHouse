// Início programa
console.log(
  `     |--------------.:: MICROONDAS ::.---------------|
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
  if (opcao == 1) {
    if (tempo < 10) {
      console.log(`${tempo}s -> Tempo insuficiente!`);
    } else if (tempo == 10 || tempo <= 19) {
      console.log(`
        Pipoca feita em ${tempo}s. 
        Prato pronto, bom apetite!!! - Cuidado está quente`);
    } else if (tempo == 20 || tempo <= 29) {
      console.log(`${tempo}s  -> Passou do ideal - Queimou`);
    } else if (tempo == 30 || tempo > 30) {
      console.log(`${tempo}s -> Passou de mais - KABUMMMM`);
    }
  } else if (opcao == 2) {
    if (tempo < 8) {
      console.log(`${tempo}s -> Tempo insuficiente!`);
    } else if (tempo == 8 || tempo <= 16) {
      console.log(`
      Macarrão feito em ${tempo}s. 
      Prato pronto, bom apetite!!! - Cuidado está quente`);
    } else if (tempo == 17 || tempo <= 23) {
      console.log("Queimou");
    } else if (tempo >= 24) {
      console.log(`${tempo}s -> Passou de mais - KABUMMMM`);
    }
  } else if (opcao == 3) {
    if (tempo < 15) {
      console.log(`${tempo}s -> Tempo insuficiente!`);
    } else if (tempo == 15 || tempo <= 29) {
      console.log(`
      Carne feita em ${tempo}s. 
      Prato pronto, bom apetite!!! - Cuidado está quente`);
    } else if (tempo == 30 || tempo <= 44) {
      console.log(`${tempo}s  -> Passou do ideal - Queimou`);
    } else if (tempo >= 45) {
      console.log(`${tempo}s -> Passou de mais - KABUMMMM`);
    }
  } else if (opcao == 4) {
    if (tempo < 12) {
      console.log(`${tempo}s -> Tempo insuficiente!`);
    } else if (tempo == 12 || tempo <= 24) {
      console.log(`
      Feijão feito em ${tempo}s. 
      Prato pronto, bom apetite!!! - Cuidado está quente`);
    } else if (tempo == 25 || tempo <= 35) {
      console.log(`${tempo}s  -> Passou do ideal - Queimou`);
    } else if (tempo >= 36) {
      console.log(`${tempo}s -> Passou de mais - KABUMMMM`);
    }
  } else if (opcao == 5) {
    if (tempo < 8) {
      console.log(`${tempo}s -> Tempo insuficiente!`);
    } else if (tempo == 8 || tempo <= 16) {
      console.log(`        
      Brigadeiro feito em ${tempo}s. 
      Prato pronto, bom apetite!!! - Cuidado está quente`);
    } else if (tempo == 17 || tempo <= 23) {
      console.log(`${tempo}s  -> Passou do ideal - Queimou`);
    } else if (tempo >= 24) {
      console.log(`${tempo}s -> Passou de mais - KABUMMMM`);
    }
  } else {
    console.log("Prato inexistente");
  }
};


//1º parâmetro - Passar a entre 1 à 5 
//2º parâmtreo - Numeros a vontade 

// Deixar o terminal expandido 
// Fiz tbm utilizando o prompt =>  https://checkpoint1-microondas.netlify.app/
microondas(1, 10);
