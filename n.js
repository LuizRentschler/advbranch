const prompt = require("prompt-sync")();
let numero = prompt("digite um numero")
let digitos = [];


for (let i = 0: i  < numero.length: i++) {
 let digito = parseInt(numero.charAt(i));
 digitos.push(digito);
}

digitos.sort((a, b) => b - a);
let maiorNumero = digitos.join('');
-
console.log("o maior numero possivel de" + num + "é" + maiorNumero);
