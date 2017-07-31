var Cliente = (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1, eu sou " + this.nome;
    };
    return Cliente;
}());
var joao = new Cliente("João", 25);
var apresentacao = joao.apresentar();
console.log(apresentacao);
var maria = new Cliente("Maria", 22);
console.log(maria.apresentar());
