const numero = Number (prompt ('Digite um núnero: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const raiz = document.getElementById('raiz');


numeroTitulo.innerHTML = numero; 
texto.innerHTML = ' ';
texto.innerHTML += `<p>Seu número + 2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>A raiz quadrada do seu número é ${raiz ** 0.5}.</p>`;

