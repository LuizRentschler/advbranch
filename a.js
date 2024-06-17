let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let impares = [];
let pares = [];

for (let i= 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(nums[i]);
  } else {
    impares.push(nums[i]);
  }
}
numeros = pares.concat(impares);
console.log(numeros)
