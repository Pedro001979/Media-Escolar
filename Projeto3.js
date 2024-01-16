/* Este é um programa que calcula a média de um aluno e classifica-o entre;
 abaixo da Média, na Média e acima da Média.
*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;
const nota4 = 7;

const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media)
if (media < 7) {
    console.log('Aluno Abaixo da Media');
} else if (media === 7) {
    console.log('ALuno na Media');
} else if(media > 7) {
    console.log('Aluno Acima da Media');
}
