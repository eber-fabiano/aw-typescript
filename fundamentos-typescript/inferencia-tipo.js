// define automaticamente o tipo number
var quantidade = 20;
// não compila -> quantidade = "nome";
var x = [1, 2, ""];
// não compila (só aceita number ou string) -> x[0] = true;
// contextual typing
window.onmousedown = function (evento) {
    console.log(evento.button);
    //não compila -> console.log(evento.buton);    
};
// agora compila
window.onmousedown = function (evento) {
    console.log(evento.buton);
};
