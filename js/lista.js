//************* Listas ******************
const arr = [1,3,4,5,8,10]

//Percorre a lista somando cada item com a posição dele
const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

//Percorre cada item da lista somando o valor anterior com o atual
const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

//Filtra os itens pares
const filter = arr.filter(function(item) {

    return item % 2 === 0;
});

console.log(filter);

//Localizando item na lista
const find = arr.filter(function(item){
    return item === 2;
});

console.log(find);