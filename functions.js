// Funciones declarativas
function sum(a, b) {
  const suma = a + b
  return suma
}

// Expresión de función
const sum1 = function (a, b) {
  const suma = a + b
  return suma
}

// ;(function (a, b) {
//   const suma = a + b
//   console.log(suma)
// })(1, 2) // Funciones autoinvocadas

// void, funcion que no retorna nada

// console.log(sum1(1, 2))

// Arrow Functions

// const sum2 = (a,b) => {
//   const suma = a + b
//   return suma
// }

const sum2 = (a, b) => a + b
