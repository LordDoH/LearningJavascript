const nums = [0, 6, 4, 1, 2, 3]

// while
let i = 0

// while (nums[i] !== 3 && nums[i] !== 4 && i < nums.length) {
//   // Aserción o condicional
//   // Narrowing, acotación
//   // Declaraciones de control
//   console.log('The number is not equal to 3')
//   i++
// }

// true || false => true
// false || true => true
// true || true => true
// false || false => false

// true && false => false
// false && true => false
// false && false => false
// true && true => true

// if (nums[i] === 3) {
//   console.log('The number in the index ', i, ' is equal to 3')
// }

// do while

do {
  console.log('No he encontrado el número 5 aún')
  i++
} while (nums[i] !== 5 && i < nums.length)
