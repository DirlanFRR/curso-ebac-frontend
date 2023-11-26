// Função para criar aluno com encapsulamento
function criarAluno(nome, nota) {
    // Nota é privada, acessível apenas por funções internas
    let _nota = nota;
  
    // Método para obter a nota
    function getNota() {
      return _nota;
    }
  
    // Retorna um objeto contendo métodos para acessar a nota e o nome
    return {
      nome,
      getNota
    };
  }
  
  // Array de objetos representando alunos
  let alunos = [
    criarAluno('João', 4),
    criarAluno('Maria', 3),
    criarAluno('Dirlan', 9),
    criarAluno('Ana', 6),
    criarAluno('Pedro', 5)
  ];
  
  // Função para retornar alunos com nota maior ou igual a 6
  function filtrarAlunos(aprovacao) {
    return alunos.filter(aluno => aluno.getNota() >= aprovacao);
  }
  
  // Chamar a função e imprimir os dados dos alunos aprovados
  let alunosAprovados = filtrarAlunos(6);
  alunosAprovados.forEach(aluno => console.log(`Nome: ${aluno.nome}, Nota: ${aluno.getNota()}`));

  

  let joaoAprovado = alunosAprovados.some(aluno => aluno.nome === 'João');
  console.log(joaoAprovado);
 