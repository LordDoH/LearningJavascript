// Explicita

// const numero = Number('323')
// const numero = parseInt('323.3')
// const numero = parseFloat('323.3')

// const numero = Number('323a')

// const numeroGrande = 3.141618

// const numero = numeroGrande.toFixed(2)

// console.log(numero)

const bool = Boolean(0)

console.log(bool)

// Operadores lógicos => Boolean

// = => == y ===
// > => > y >=
// < => < y <=
// ! (Negación)

// Bloque condicional if

// if ( Condición ) {
//    Bloque de código a ejecutar
// } else if ( Segunda Condición ) {
//    Bloque de código a ejecutar
// } ... else {
//    Bloque de código a ejecutar
// }

const num1 = 10
const num2 = '10'

if (num1 === num2) {
  console.log('Hello world!')
}

// const sum = num1 + true + false + null + num2

// console.log(sum)

// Operador != y !== y !!

if (num1 !== num2) {
  console.log('Hello world 2!')
}

if (!!num1) {
  console.log('Hello world 3!')
}

if (Boolean(num1)) {
  console.log('Hello world 4!')
}
