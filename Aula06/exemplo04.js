class Livro {
    constructor(pNome, pPreco){
        this.Nome = pNome;
        this.Preco = pPreco;
    }

    get Nome() {return this.Nome;}
    set Nome(pNome) {this.Nome = pNome;}

    get Preco() {return this.Preco;}
    set Preco(pPreco) {this.preco = pPreco;}

    calcularDesconto(pDesconto){
        this.preco = this.preco -pDesconto;
    }
}

var obj_livro1 = new Livro("Use a cabeça Java",100);
obj_livro1.calcularDesconto(30);
console.log("Nome do livro: " + obj_livro1.Nome + "Custa " + obj_livro1.preco + "reais");