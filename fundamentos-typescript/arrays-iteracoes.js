var notasAlunos = [10, 8, 8.5, 7];
// índices
for (var i in notasAlunos) {
    console.log(i);
}
// valores
for (var _i = 0, notasAlunos_1 = notasAlunos; _i < notasAlunos_1.length; _i++) {
    var notaAluno = notasAlunos_1[_i];
    console.log(notaAluno);
}
notasAlunos.forEach(function (i) {
    console.log(i);
});
notasAlunos.forEach(function (i) {
    console.log(i + 1);
});
