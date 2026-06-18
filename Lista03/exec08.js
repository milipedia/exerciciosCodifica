/*
Crie um array de objetos representando produtos com nome, preço e quantidade.
Use forEach para calcular o valor total em estoque de cada produto (preço ×
quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
estoque.
*/

const produtos = [
    {nome: 'Teclado roxo', preco: 579, estoque: 124},
    {nome: 'Teclado verde', preco: 879, estoque: 36},
    {nome: 'Controle recarregavel', preco: 400, estoque: 7},
    {nome: 'Monitor curvo', preco: 1684, estoque: 32},
    {nome: 'Mouse bluetooth', preco: 299, estoque: 347},
    {nome: 'CPU branca', preco: 285, estoque: 24},
    {nome: 'Headset', preco: 285, estoque: 100},
]

let somaProdutos = 0;

console.log("RELATÓRIO DE ESTOQUE\n");

produtos.forEach(produto => {
    const valorEstoque = produto.preco * produto.estoque;
    somaProdutos += valorEstoque;

    let alerta = "";

    if (produto.estoque < 10) {
        alerta = "ESTOQUE BAIXO";
    }

    console.log(
        `${produto.nome}
        Preço: R$ ${produto.preco}
        Estoque: ${produto.estoque}
        Valor em estoque: R$ ${valorEstoque}
        ${alerta}
        ---------------------`
    );
});

console.log(`Valor total do estoque: R$ ${somaProdutos}`);


