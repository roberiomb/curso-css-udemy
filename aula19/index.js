
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25, 

    fala () {  // não precisa da palavra function
        console.log(`A minha idade atual é ${this.idade}.`);

    },
    incrementaIdade() {
         this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();



/* 

Usando a palavra THIS para indicar o objeto em si 

function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
};

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa('Maria', 'Otavio', 25);
const pessoa3 = criaPessoa('Antonio', 'Otavio', 25);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*


// criar função para criar objeto

   no return eu não preciso criar duas vezes o valor    quando o valor for igual. 
   ex: nome : nome
    idade: idade
    é so fazer assim: return { nome, idade};


*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-


const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';

console.log(array);

*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
*/