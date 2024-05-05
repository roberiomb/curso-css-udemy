let varA = 'A'
let varB = 'B'
let varC = 'C'

const varATemp = varA;
varA = varB; 
varB = varC;
varC = varATemp


console.log(varA, varB, varC );

// O valor de A tem que ter o valor de B
// O valor de B tem que ter o valor de C
// o valor de C tem que ter o valor de A

// variavel B agora é C e a var de C agora é A