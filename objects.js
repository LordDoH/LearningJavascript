const Paula = {
  name: 'Paula',
  hairColor: 'Blonde',
  skinTone: 'Caucasic',
  age: 25,
  height: 160,
  'dog name': 'Chispa',
  // key : value
  greetings() {
    console.log(`Hello world, my name is ${this.name}, and i'm ${this.age} years old`)
  },
  goodbye: function bye() {
    console.log('Good bye')
  },
}

Paula.greetings()
Paula.goodbye()

Paula.surname = 'Rey'
Paula['new hobbies'] = ['Read', 'Listening Music', 'Skin Care', 'Makeup']

delete Paula.surname // !☢️

// console.log(Paula)

// console.log(Object.keys(Paula))
// console.log(Object.values(Paula))

const object2 = Object.assign(Paula, { mycar: 'gray' })

// console.log(object2)

const object3 = structuredClone(Paula)
object3.hasTablet = false

console.log('Paula', Paula)
console.log('Object', object2)

const fruits = ['🍍', '🍇', '🍏']
const basket = JSON.parse(JSON.stringify(fruits))
basket.push('🥐')

console.log(fruits, basket)
