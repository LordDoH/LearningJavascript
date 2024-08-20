const name = 'Daniel'
console.log(name)
const surname = "'Ochoa'"
const pronoun = `Him`

const title = '`Civil Engineer`'

// const fullname = name.concat(' ', surname, ' Henao')
// const fullname = ` ${name} ${surname} ${1 + 1} Henao `
const fullname = name + ' ' + surname + ' Henao'

console.log(fullname)

// console.log(typeof fullname)

// console.log(fullname.length)
// console.log(fullname.endsWith('nao'))
// console.log(fullname.includes('Ochoa'))

// console.log(fullname.indexOf('a'))

// console.log(fullname.lastIndexOf('o'))
// const newString = fullname.padStart(40, '/')
// console.log(newString)
// console.log(fullname.padEnd(35, 'x'))

// console.log(fullname.substring(1, 4))

// console.log(fullname.toLowerCase())

// console.log(fullname.toUpperCase())

const otherName = 'daniel'

if (name.toLowerCase() === otherName) {
  console.log('Son nombres iguales')
}

// Múltiples líneas en un string \n \n\ y ``
const longString = 'Hola, mi nombre es Daniel Ochoa Henao \n\n\n y soy un ingeniero civil'
const otherLongString = `Hola, mi nombre es Daniel Ochoa Henao

y soy un ingeniero civil`

const lastString =
  'Hola, mi nombre es Daniel Ochoa Henao\n\
y soy un ingeniero civil'

console.log(lastString)
