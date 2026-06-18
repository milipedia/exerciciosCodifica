/*
Crie um array de objetos representando músicas, cada uma com título, artista e
duração em segundos. Use for...of para exibir cada música no formato "Artista —
Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
mesmo formato.
*/

const musicas = [
    {titulo: '505', artista: 'Arctic Monkeys', duracaoSeg: 254},
    {titulo: 'Like a Stone', artista: 'Audioslave', duracaoSeg: 294},
    {titulo: 'Chop Suey', artista: 'System of a Down', duracaoSeg: 207},
    {titulo: 'Disfruto', artista: 'Carla Madera', duracaoSeg: 246},
    {titulo: 'A Cera', artista: 'O Surto', duracaoSeg: 227},
    {titulo: 'Bodies', artista: 'Drowning Pool', duracaoSeg: 204},
    {titulo: 'A Little Piece of Heaven', artista: 'Avenged Sevenfold', duracaoSeg: 481},
    {titulo: 'Sonne', artista: 'Rammstein', duracaoSeg: 272},
    {titulo: 'Down Under', artista: 'Men At Work', duracaoSeg: 222},
    {titulo: 'The Winner Takes It All', artista: 'ABBA', duracaoSeg: 294},
    {titulo: 'Girls Just Wanna To Have Fun', artista: 'Cindy Lauper', duracaoSeg: 238},
    {titulo: 'Every Breath You Take', artista: 'The Police', duracaoSeg: 254},
]

for (let musica of musicas){
    console.log(
        `Artista - ${musica.artista}
Titulo - ${musica.titulo} (${(musica.duracaoSeg / 60).toFixed(2)} min)\n`
    );
}

let duracaoTotal = 0;

musicas.forEach(musica => {
    duracaoTotal += musica.duracaoSeg;
});

const minutos = Math.floor(duracaoTotal / 60);
const segundos = duracaoTotal % 60;

console.log(`Duração total: ${minutos}min ${segundos}s`);
