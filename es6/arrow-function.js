const precos = ["10", "23", "19"];

// tradicional
const precosEmReais = precos.map(function (preco) {
    return `R$ ${preco},00`;
});

console.log(precosEmReais);


// arrow function
const precosEmReais2 = precos.map((preco) => {
    return `R$ ${preco},00`;
});

console.log(precosEmReais2);

const precosEmReais3 = precos.map(preco => `R$ ${preco},00`);

console.log(precosEmReais3);

const acimaDeVinte = precos.filter(preco => preco > 20).map(preco => `R$ ${preco},00`);

console.log(acimaDeVinte);