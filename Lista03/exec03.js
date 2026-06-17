/*
Crie um objeto representando um funcionário com nome, cargo, salário e anos de
experiência. Use for...in para listar todos os dados. Com base nos anos de
experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
anos = 10%, acima de 5 anos = 15%.
*/

const funcionario = {
    nome: "Bia",
    cargo: "Desenvolvedora Júnior",
    salario: 3000,
    anosExperiencia: 4
};

for (let propriedade in funcionario) {
    console.log(`${propriedade}: ${funcionario[propriedade]}`);
}

let bonus;

if (funcionario.anosExperiencia <= 2) {
    bonus = funcionario.salario * 0.05;
} else if (funcionario.anosExperiencia <= 5) {
    bonus = funcionario.salario * 0.10;
} else {
    bonus = funcionario.salario * 0.15;
}

console.log(`Bônus anual: R$ ${bonus.toFixed(2)}`);