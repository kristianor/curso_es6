//************* Classes ******************
class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}
//Classes extendida da classe List
class TodoList extends List {

    constructor() {
        super();
        this.usuario = 'Kristiano';
    }

    monstraUsuario() {
        console.log(this.usuario);
    }
}

//Instanciando o objeto MinhaLista
const MinhaLista = new TodoList();

//comando do botão para adicionar item na lista
document.getElementById('novoTodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

//Usando um metodo da classe
MinhaLista.monstraUsuario();


import { soma, sub } from './funcoes';

console.log(soma(6, 1));
console.log(sub(4,1));