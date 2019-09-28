
class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {

    constructor() {
        super();
        this.usuario = 'Kristiano';
    }

    monstraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.monstraUsuario();