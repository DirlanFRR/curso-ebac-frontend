"use strict";

// Função para criar aluno com encapsulamento
function criarAluno(nome, nota) {
  // Nota é privada, acessível apenas por funções internas
  var _nota = nota;

  // Método para obter a nota
  function getNota() {
    return _nota;
  }

  // Retorna um objeto contendo métodos para acessar a nota e o nome
  return {
    nome: nome,
    getNota: getNota
  };
}

// Array de objetos representando alunos
var alunos = [criarAluno('João', 4), criarAluno('Maria', 3), criarAluno('Dirlan', 9), criarAluno('Ana', 6), criarAluno('Pedro', 5)];

// Função para retornar alunos com nota maior ou igual a 6
function filtrarAlunos(aprovacao) {
  return alunos.filter(function (aluno) {
    return aluno.getNota() >= aprovacao;
  });
}

// Chamar a função e imprimir os dados dos alunos aprovados
var alunosAprovados = filtrarAlunos(6);
alunosAprovados.forEach(function (aluno) {
  return console.log("Nome: ".concat(aluno.nome, ", Nota: ").concat(aluno.getNota()));
});
var joaoAprovado = alunosAprovados.some(function (aluno) {
  return aluno.nome === 'João';
});
console.log(joaoAprovado);