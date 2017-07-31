// var, let e const
// var -> escopo global
function iniciarTimeVar(iniciarJogo) {
    var nome = "Messi e amigos";
    if (iniciarJogo) {
        var cidade = "em Uberlândia";
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
// let -> apenas no escopo que foi declarado
function iniciarTimeLet(iniciarJogo) {
    var nome = "Messi e amigos";
    var cidade;
    if (iniciarJogo) {
        cidade = "em Uberlândia";
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
// const -> apenas no escopo que foi declarado e é uma constante
function iniciarTimeConst(iniciarJogo) {
    var nome = "Messi e amigos";
    var cidade;
    if (iniciarJogo) {
        cidade = "em Uberlândia";
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTimeVar(true);
