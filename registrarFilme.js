// faça uma função para registrar um filme no banco de dados
// a função deve receber um objeto com os seguintes atributos: nome, ano, diretor, duração, atores
// a função deve retornar o id do filme registrado
// o id do filme deve ser gerado automaticamente
// o id do filme deve ser um número inteiro sequencial, começando em 1
// o id do filme deve ser único
// o banco de dados deve ser um array de objetos

function registrarFilme(filme) {
    filme.id = filmes.length + 1;
    filmes.push(filme);
    return filme.id;
}

const filmes = [];

const filme = {
    id: 1,
    nome: 'Pulp Fiction',
    ano: 1994,
    diretor: 'Quentin Tarantino', 
    duracao: 154,
    atores: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman'],
    sinopse: 'Um filme muito bom',
    genero: 'Crime'
}

const id = registrarFilme(filme);
console.log(id);
// 1

const filme2 = {
    id: 2,
    nome: 'O Senhor dos Aneis: A Sociedade do Anel',
    ano: 2001,
    diretor: 'Peter Jackson',   
    duracao: 201,
    atores: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
    sinopse: 'Um filme muito bom',
    genero: 'Aventura'
}