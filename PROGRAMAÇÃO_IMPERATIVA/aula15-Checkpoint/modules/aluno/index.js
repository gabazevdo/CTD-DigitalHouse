function Aluno(nome, faltas, nota){
    this.nomeAluno = nome
    this.qtdFaltas = faltas
    this.notaAluno = nota
}

const aluno1 = new Aluno('Maria',5,9);
const aluno2 = new Aluno('José',9,7);
const aluno3 = new Aluno('João',4,8);
const aluno4 = new Aluno('Miranda',1,10);
const aluno5 = new Aluno('Pedro',12,5);

let arrayAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5]

module.exports = {
    novoAluno:function(nome, faltas, nota){
        
    }
}