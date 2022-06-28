const escola = "Cod3r";

console.log(escola.charAt(4)); //Mostra o elemento escolhido por seu indice
console.log(escola.charCodeAt(3)) //Mostrou o código do elemento no indice escolhido
console.log(escola.indexOf('3')) //Mostrou o indice do elemento 
console.log(escola.substring(1)) //Mostra o valor da variavel com o indice escolhido removido
console.log(escola.substring(0, 3))
console.log(`Escola `.concat(escola).concat("!")) //Concatena strings e outras variaveis 
console.log(escola.replace(3, 'e')) //Substitui o indice escolhido pelo elemento digitado
console.log('Ana, Maria, Pedro'.split(',')) //transforma a string em um array