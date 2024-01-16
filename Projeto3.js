const nota1 = Primeira Nota;
const nota2 = Segunda Nota;
const nota3 = Terceira Nota;
const nota4 = Quarta Nota;

const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media)
if (media < 7) {
    console.log('Aluno Abaixo da Media');
} else if (media === 7) {
    console.log('ALuno na Media');
} else if(media > 7) {
    console.log('Aluno Acima da Media');
}
