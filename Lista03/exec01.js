/*
Crie um objeto representando um produto com as propriedades: nome, preço,
categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
propriedades e seus valores. Em seguida, adicione uma nova propriedade
desconto ao objeto e exiba o preço final calculado.
*/

const produto = new Object()
produto.nome = "Umificador fogueira" ;
produto.preco = 27;
produto.categoria = "umificadores";
produto.qtdEstoque = 69;

for (let p in produto) {
    console.log(`${p}: ${produto[p]}`);
}

produto.desconto = 0.5;

const precoFinal = produto.preco * (1 - produto.desconto);

console.log(`\nPreço final: R$ ${precoFinal}`);