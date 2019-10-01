const usuario = {
    nome : 'Kristiano',
    idade : 41,
    endereco : {
        logradouro : 'Rua Olaria',
        numero : '167',
        cidade : 'Barão de Cocais',
        estado : 'MG'
    }
};

console.log(usuario);

const { nome, idade, endereco: {cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({nome, idade}) {
    console.log(nome);
    console.log(idade);
}

mostraNome(usuario);