/*
Crie um objeto representando o orçamento mensal de uma pessoa, com
categorias como alimentação, transporte, lazer e saúde, cada uma com valor
planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.
*/

const planoMensal = {
    alimentacao: 500,
    transporte: 150,
    lazer: 120,
    saude: 100
}

const realizadoMensal = {
    alimentacao: 720,
    transporte: 62.70,
    lazer: 50,
    saude: 283
}

for (let categoria in planoMensal) {
    const planejado = planoMensal[categoria];
    const realizado = realizadoMensal[categoria];
    const diferenca = realizado - planejado;

    console.log(`${categoria}:`);
    console.log(`Planejado: R$ ${planejado}`);
    console.log(`Realizado: R$ ${realizado}`);
    console.log(`Diferença: R$ ${diferenca}`);

    if (diferenca <= 0) {
        console.log("Status: Dentro da meta.");
    } else {
        console.log("Status: Acima da meta.");
    }

    console.log("----------------");
}

let saldoGeral = 0;

for (let categoria in planoMensal) {
    const planejado = planoMensal[categoria];
    const realizado = realizadoMensal[categoria];

    const diferenca = realizado - planejado;

    saldoGeral += (planejado - realizado);

    console.log(`${categoria}: ${diferenca <= 0 ? "Dentro da meta" : "Acima da meta"}`);
}

console.log(`Saldo geral do mês: R$ ${saldoGeral}`);