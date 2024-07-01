const prompt = require("prompt-sync")();
while(true) {
    let numero = prompt("Digite um num: ")
    numero = numero.split("")
    for(let i = 0; i < numeros.length; i++) {
        for (let j = i + 1; j < numeros.length; j++)
            if(numeros[i] < numero[j]) {
                let aux = numero[i]
                numero[i] = numero[j]
                numero[j] = aux
    }
}
}
console.log(numero.join(""))
