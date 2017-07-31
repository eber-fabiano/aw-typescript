// boolean
var estaPago = true;
// number
var idade = 20;
var valor = 29.99;
// string
var empresa = "Algaworks";
// template string
var nome = "João";
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos.");
// tradicional
console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");
// arrays
var notas = [8, 6, 7, 9];
// tuple
var alunos = ["João", 10, "Matemática"];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
// enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
console.log(corFundo);
// any
var algumValor = 4;
algumValor = "Agora é uma string";
algumValor = true;
console.log(algumValor);
// void -> sem retorno
function alerta() {
}
// null e undefined
var u = undefined;
var n = null;
// null e undefined são subtipos dos outros tipos
nome = undefined;
nome = null;
