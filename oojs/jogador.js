function Pessoa(nome){
    this.nome = nome;
    this.souGoat = function() {
        console.log(this.nome + " 8 bolas de ouro na conta")
    }
    this.dizPosicao = function() {
        console.log(this.posicao);
    }
}


function JogadordeFutebol(nome, posicao, salario){

    this.posicao = posicao;
    //this.salario = salario;
    let _salario = salario;

    this.retornaSalario = function() {
        return _salario;
    }

    Pessoa.call(this, nome);
}

const jogadordeFutebol1 = new JogadordeFutebol("Messi", "atacante", 54000000);

const jogadordeFutebol2 = new JogadordeFutebol("Cr7", "atacante", 200000000);


jogadordeFutebol1.souGoat();
jogadordeFutebol1.dizPosicao();
console.log(jogadordeFutebol1.retornaSalario())

jogadordeFutebol2.souGoat = function() {
    console.log(this.nome + " 5 bolas de ouro na conta"); // Modificando a mensagem
};


jogadordeFutebol2.souGoat(); // Saída: Cr7 7 bolas de ouro na conta
console.log(jogadordeFutebol2.retornaSalario())
jogadordeFutebol2.dizPosicao(); // Saída: atacante

function JogadorNeymar(nome, posicao, salario) {
    this.posicao = posicao;
    let _salario = salario;

    this.retornaSalario = function() {
        return _salario;
    };

    Pessoa.call(this, nome);
}

const jogadorNeymar = new JogadorNeymar("Neymar", "atacante", 30000000);

jogadorNeymar.souGoat = function() {
    console.log("Uma copa das Confederacoes");
};
console.log(jogadorNeymar.nome);
console.log(jogadorNeymar.posicao);
console.log(jogadorNeymar.retornaSalario());
jogadorNeymar.souGoat();