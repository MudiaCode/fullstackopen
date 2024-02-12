// Variables
const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed

// Arrays
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
    console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
})

const m1 = t.map(x => x * 2)

console.log(m1)

const r = [1, 2, 3, 4, 5]

const [first, second, ...rest] = r

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed

