// Arrays, arreglos o listas

const fruits = ['🍍', '🍇', '🍏', '🍍']
//  fruits2 = ['Piña', 'Uvas', 'Manzana']
const fruits2 = ['Piña', 'Uvas', 'Manzana', 'Banana']

//const list = [1, '🚀', null, undefined, Symbol('Cosita'), true, 1n, [], {}]

// const todolist = ['Lavarme los dientes', 'tender la cama', ['estudiar javascript', 'hacer los ejercicios', 'hacer el examen']]

// console.log(fruits[1])

// const name = 'Paula'

// console.log(name.split(''))
// console.log(name.split('u'))
// console.log(fruits.length)

// const list2 = new Array(5)

// list2[0] = 'Hola pirulo'

// list2.fill('Hola mundo', 2, 4)

// console.log(list2)

//console.log(fruits.push('🍉'))
// console.log(fruits)
//console.log(fruits.unshift('🍈'))
// console.log(fruits)

//console.log(fruits.pop(2))
// console.log(fruits)
//console.log(fruits.shift())
// console.log(fruits)

// fruits[5] = '🥭'
// console.log(fruits[3])

// console.log(fruits.lastIndexOf('🍍'))
//console.log(fruits.concat(fruits2))

const fruits3 = [fruits].flat()

for (let i = 0; i <= fruits3.length; i++) {
  if (fruits3[i] === '🍏') {
    fruits3[i] = 'Apple'

    break
  }
  console.log(fruits3[i])
}

// const string = [...'Daniel']

// Spread Operator ...

// const fruits3 = [...fruits, ...fruits2]

console.log(fruits3)
