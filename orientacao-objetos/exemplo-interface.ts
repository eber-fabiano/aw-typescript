function imprimirIdade(pessoa: {idade: number}) {
    console.log(pessoa.idade);    
}

let joaoMarcos = {nome: "João", idade: 25};

imprimirIdade(joaoMarcos);

// ou

interface Pessoa {
    idade: number;
    sexo?: string; // ? não é obrigatório
}

function imprimirIdade2(pessoa: Pessoa) {
    console.log(pessoa.idade);   
    console.log(pessoa.sexo);
     
}

let eber = {nome: "Eber", idade: 25};

imprimirIdade2(eber);