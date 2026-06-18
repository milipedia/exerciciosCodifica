/*
Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
listar o inventário completo. Permita que o usuário informe um item para usar:
reduza a quantidade em 1 ou exiba "item esgotado" se for zero.
*/

const inventario = {
    espada: 1,
    pocao: 5,
    escudo: 2
};

for (let item in inventario) {
    console.log(`${item}: ${inventario[item]}`);
}

const prompt = require("prompt-sync")();
let itemUsado = prompt("Qual item deseja usar?");

if (inventario[itemUsado] > 0) {
    inventario[itemUsado]--;
    console.log(`${itemUsado} utilizado com sucesso!`);
} else {
    console.log("Item esgotado.");
}

console.log("Inventário atualizado:");
for (let item in inventario) {
    console.log(`${item}: ${inventario[item]}`);
}