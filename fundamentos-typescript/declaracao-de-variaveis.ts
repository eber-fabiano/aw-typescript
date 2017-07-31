// var, let e const

// var -> escopo global
function iniciarTimeVar(iniciarJogo: boolean) {
    var nome: string = "Messi e amigos";

    if (iniciarJogo) {
        var cidade: string = "em Uberlândia";
    }

    console.log(`${nome} vão jogar ${cidade}`);
}

// let -> apenas no escopo que foi declarado
function iniciarTimeLet(iniciarJogo: boolean) {
    var nome: string = "Messi e amigos";
    let cidade: string;

    if (iniciarJogo) {
        cidade = "em Uberlândia";
    }

    console.log(`${nome} vão jogar ${cidade}`);
}

// const -> apenas no escopo que foi declarado e é uma constante
function iniciarTimeConst(iniciarJogo: boolean) {
    const nome: string = "Messi e amigos";
    let cidade: string;

    if (iniciarJogo) {        
        cidade = "em Uberlândia";
    }
    console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTimeVar(true);