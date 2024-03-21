let arr = ["Alex", "Jon", "Bob", "Amir", "Azizbek", "Tyler"]
let arr2 = ["Davlat", "Arslan", "Steve", 32, true, 45]

let newArr = arr.filter((item) => item.charAt(0) == "a")
console.log(newArr);

console.log(arr + arr2)

let res = arr.slice()
console.log(arr.slice(3, 5) + arr.slice(-1, -2))
