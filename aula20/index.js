// obs array são [] e {} são objetos

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = {...a}; 

a.nome = 'joão'
console.log(b);
console.log(a);


















/*

Primitivos (imutáveis)- String, Number, Boolean, undefined, null (bigint, symbol) - valores copiados

Tipo de dados por refefência (mutável) - array, objetc, function -> são valores passados por referência


exemplos

let a = [1, 2, 3];
let b = [...a];
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiza');
console.log(c); 

*/