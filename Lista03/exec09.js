/*
Crie um array de objetos onde cada objeto representa um contato com nome,
telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
uma mensagem de "não encontrado".
*/
const contatos = [
    {nome: 'Bia', telefone: 51999999999, mail: 'bia@email.com'},
    {nome: 'Bruna', telefone: 51999999998, mail: 'bruna@email.com'},
    {nome: 'Vinicius', telefone: 51999999997, mail: 'vinicius@email.com'},
    {nome: 'Maria', telefone: 51999999996, mail: 'mari@email.com'},
    {nome: 'Cristiane', telefone: 51999999995, mail: 'tiane@email.com'},
    {nome: 'Julio', telefone: 51999999994, mail: 'julio@email.com'},
]

contatos.forEach(contato => {
    console.log(
        `Nome: ${contato.nome}
        Telefone: ${contato.telefone}
        Email: ${contato.mail}
        ----------------------`
    );
});

const prompt = require("prompt-sync")();

let busca = prompt("Qual nome deseja buscar? ");

let encontrado = false;

for (let contato of contatos) {
    if (contato.nome.toLowerCase() === busca.toLowerCase()) {
        console.log("Contato encontrado:");
        console.log(`Nome: ${contato.nome}`);
        console.log(`Telefone: ${contato.telefone}`);
        console.log(`Email: ${contato.mail}`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("Contato não encontrado");
}