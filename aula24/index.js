/*

&& (operador and)-> Todas as expressões precisam ser verdadeiras
|| -> vai retornar a expressão verdadeira

fALSY
*false
0
'' "" ``
null / undefined
NaN

exemplo:
let corUsuario = null; // o usuário não selecionou cor
let corPadrao = corUsuario ||'red';
console.log(corPadrao);

*/
let a = 0;
let b = null;
let c = 'False'; // vai retornar esse pq é uma string
let d = false;
let e = NaN;

console.log(a || b || c || d || e);
