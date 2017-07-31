// define automaticamente o tipo number
let quantidade = 20;
// não compila -> quantidade = "nome";

let x = [1, 2, ""];
// não compila (só aceita number ou string) -> x[0] = true;

// contextual typing
window.onmousedown = function (evento) {
    console.log(evento.button);
    //não compila -> console.log(evento.buton);    
}
// agora compila
window.onmousedown = function (evento: any) {
    console.log(evento.buton);    
}
