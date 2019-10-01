const arr = [1,3,4,5,6];

//Percorre cada item retornando o valor dele multiplicado por 2
const newArr = arr.map(item => item * 2);

console.log(newArr);

//Arrow function retornando um objeto
const teste = () => ({nome : 'Kristiano'});

console.log(teste());