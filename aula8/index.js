
const nome = 'Robério';
const sobrenome = 'Júnior';
const idade = 36;
const peso = 74;
const aulturaEmM = 1.87;
let imc;     // peso / (aultura * altura)
let anoNascimento; 

imc = peso / (aulturaEmM * aulturaEmM);
console.log(imc);
anoNascimento = 2024 - idade;

console.log(nome +' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' KG ');
console.log(`Tem ${aulturaEmM} de altura e seu IMC é de ${imc}`);

console.log(`${nome} nasceu em ${anoNascimento}.`);

// template strings  colocando ${} 