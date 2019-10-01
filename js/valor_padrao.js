//Valor padrão em função
function soma(a = 3, b = 6) {

    return a + b;
}

const teste = (a = 3, b = 6) => a + b;

console.log(soma());
console.log(teste());