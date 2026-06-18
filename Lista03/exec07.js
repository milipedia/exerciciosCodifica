/*
Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
forEach para calcular e exibir separadamente a média dos aprovados e a média
dos reprovados.
*/

const alunos = [
    {nome: 'Bia', nota: 10},
    {nome: 'Bruna', nota: 7},
    {nome: 'Vinicius', nota: 8},
    {nome: 'Fabricio', nota: 3},
    {nome: 'Lua', nota: 5},
    {nome: 'Lucas', nota: 6},
]
for (let aluno of alunos) {
    let status = "";

    if (aluno.nota >= 6) {
        status = "Aprovado";
    } else if (aluno.nota >= 5) {
        status = "Recuperação";
    } else {
        status = "Reprovado";
    }

    console.log(`Aluno - ${aluno.nome} - ${status}`);
}

let somaAprovados = 0;
let qtdAprovados = 0;

let somaReprovados = 0;
let qtdReprovados = 0;

alunos.forEach(aluno => {
    if (aluno.nota >= 6) {
        somaAprovados += aluno.nota;
        qtdAprovados++;
    } else {
        somaReprovados += aluno.nota;
        qtdReprovados++;
    }
});

const mediaAprovados = somaAprovados / qtdAprovados;
const mediaReprovados = somaReprovados / qtdReprovados;

console.log(`Média aprovados: ${mediaAprovados.toFixed(2)}`);
console.log(`Média reprovados: ${mediaReprovados.toFixed(2)}`);