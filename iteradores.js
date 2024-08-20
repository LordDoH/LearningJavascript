const nums = [1, 2, 5, 4, 3]

// for (let i = nums.length - 1; i >= 0; i--) {
//   if (nums[i] % 2 === 0) {
//     console.log(nums[i])
//     // continue
//     // break
//     // return
//   }
//   console.log('Hello world')
// }

// for (const num of nums) {
//   if (num % 2 === 0) {
//     console.log(num)
//   }
// }

// const encontrado = nums.find((num) => num > 2) undefined

// const encontrados = nums.filter((num) => num > 2) []

// const encontrado = nums.some((num) => num > 2)

// const encontrado = nums.every((num) => num > 2)

// console.log(encontrado)

// const emojis = {
//   1: '😀',
//   2: '😂',
//   3: '😍',
//   4: '😜',
//   5: '😎',
// }

// const arrayStyled = nums.map((num) => {
//   const newText = num + '-☢️'
//   return newText
// })

// nums.forEach((num) => {
//   console.log(num)
// })

// console.log(arraynew)

// console.log(arrayStyled)

// let num = 1

// console.log(++num)
// console.log(num)
// console.log(--num)
// console.log(num)

const result = nums.reduce((acum, num) => {
  return (acum = acum + num)
}, 0)

console.log(result)
