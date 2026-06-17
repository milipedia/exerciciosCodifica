/*
Crie dois objetos representando personagens de um jogo, cada um com as
propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
cada personagem lado a lado e determine qual deles tem maior poder total
(soma de vida + ataque + defesa).
*/

function Personagem(nome, vida, ataque, defesa){
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa
}

const personagem01 = new Personagem ('Zezim', 670, 27, 12);
const personagem02 = new Personagem ('Lua', 236, 38, 39);


for (let atributo in personagem01) {
    console.log(
        `${atributo}: ${personagem01[atributo]} | ${personagem02[atributo]}`
    );
}

const poder1 =
    personagem01.vida +
    personagem01.ataque +
    personagem01.defesa;

const poder2 =
    personagem02.vida +
    personagem02.ataque +
    personagem02.defesa;

console.log(`Poder de ${personagem01.nome}: ${poder1}`);
console.log(`Poder de ${personagem02.nome}: ${poder2}`);