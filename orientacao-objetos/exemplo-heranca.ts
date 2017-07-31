class Funcionario {
    nome: string;
    salario: number;

    constructor (nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    pagarImposto(taxa: number = 7.5): void {
        console.log(`Pagando ${this.salario * taxa / 100} de imposto.`);
    }
}

class Secretario extends Funcionario {

}

class Executivo extends Funcionario {

    pagarImposto(taxa: number = 27.5): void {
        console.log("Executivo paga mais!");
        super.pagarImposto(taxa);        
    }
}

let sarah = new Secretario("Sarah", 2000);
sarah.pagarImposto();

let jorge = new Executivo("Jorge", 30000);
jorge.pagarImposto();