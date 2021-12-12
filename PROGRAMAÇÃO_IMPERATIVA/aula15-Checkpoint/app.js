var readlineSync = require("readline-sync");

// função construtora alunos

function Aluno(nome, faltas, notas) {
  this._nome = nome;
  this._faltas = faltas;
  this._notas = notas;
}
// crição de arrays para armazenamento
let totalNotas = [];
let infoTotal = [];
let boleanoResult = [];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

// objeto aluno para aplicação de metodos
const infoAluno = {
  Aluno: Aluno,
  novoAluno: function (nome, faltas, notas) {
    const novoAluno = new Aluno(nome, faltas, notas);
    totalNotas.push(notas);
    infoTotal.push(novoAluno);
    return novoAluno;
  },
  calculaMedia: function () {
    return totalNotas.reduce(reducer) / totalNotas.length;
  },
  aumentaFalta: function (aluno) {
    aluno._faltas += 1;
    return aluno._faltas;
  },
};

const aluno1 = new infoAluno.novoAluno("José", 5, 10);
const aluno2 = new infoAluno.novoAluno("Francisco", 6, 20);

// informações curso
const curso = {
  nomeCurso: "DH",
  notaAprovacao: 7,
  faltasMaximas: 10,
  listaAlunos: infoTotal,
  adicionaAluno: infoAluno.novoAluno,
  verificaMedia: function (aluno) {
    return aluno._notas > this.notaAprovacao ? "aluno aprovado" : " ";
  },
  // grade media
  gradeMedia: function () {
    this.listaAlunos.map((aluno) => {
      if (aluno._notas > curso.notaAprovacao) {
        console.log(` - Parabéns ${aluno._nome}, você foi aprovado.`);
        boleanoResult.push(true);
      } else {
        console.log(` - Infelizmente ${aluno._nome}, você foi reprovado.`);
        boleanoResult.push(false);
      }
    });
  },
};

const aluno3 = new curso.adicionaAluno("João", 1, 1);

// Adicionando novo aluno via terminal
const aluno = readlineSync.question(`Qual o nome do aluno? `);
const falta = Number(readlineSync.question(`Quantas faltas? `));
const nota = Number(readlineSync.question(`Qual sua nota? `));
const novoAluno = infoAluno.novoAluno(aluno, falta, nota);


// testes funcionalidades
console.log(` 
Passo 3`);
console.log(curso.listaAlunos);

console.log(`
Passo 6`)
curso.gradeMedia();

console.log(`
Passo 6`);
console.log(boleanoResult);