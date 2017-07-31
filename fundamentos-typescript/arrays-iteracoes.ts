let notasAlunos: number[] = [10, 8, 8.5, 7];

// índices
for (let i in notasAlunos) {
    console.log(i);   
}

// valores
for (let notaAluno of notasAlunos) {
    console.log(notaAluno);    
}

notasAlunos.forEach((i) => {
    console.log(i);
});

notasAlunos.forEach(function (i) {
    console.log(i + 1); 
});