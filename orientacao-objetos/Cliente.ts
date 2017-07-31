class Cliente {

    nome: string;
    idade: number;

    constructor (nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    
    apresentar(): string {
        return `Olá, eu sou ${this.nome}`;
    }
}

let joao: Cliente = new Cliente("João", 25);
let apresentacao: string = joao.apresentar();
console.log(apresentacao);

let maria: Cliente = new Cliente("Maria", 22);
console.log(maria.apresentar());