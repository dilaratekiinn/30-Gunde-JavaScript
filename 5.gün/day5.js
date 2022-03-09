let names = Array(3).fill(5)

console.log(names)


let names2 = [ 'Dilara', 21, 2000, 'Tekin']

names2 [0] = 'Ahmet'

console.log (names2)

console.log('Dilara'.split(''))


let array1 = [1,2,3]
let array2 = [4,5,6]
let array3 = [7,8,9]

let result =array1.concat(array2,array3, [10, 11, 12])
console.log(result)
 
 
let names = ['Dilara', 'Sibel', 'Alin']
console.log(names.indexOf('Sibel'))

let  numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false


let numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

let number = 50
console.log(Array.isArray(number)) // false


let number = [1, 2, 3, 4, 5]
console.log(number.toString()) // 1,2,3,4,5


let numbers = [1,2,3,4,5]

console.log(numbers.slice(1)) 

 
let names = ['Dilara', 'Sibel', 'Dilara2','Alin']
console.log(names)
names.push('Gamze')
console.log(names) 

  
 
let names = ['Dilara', 'Sibel','Dilara2' ,'Alin']

let sondeger = names.pop()
let sondeger2 = names.pop()

names.unshift("ilk değer")

console.log(sondeger,sondeger2)
console.log(names)



const numbers = [ 4, 3 , 2 , 1]
console.log(numbers)
numbers.sort()
console.log(numbers) 

const numbers = [ 4, 10, 1, [4,5,6] ,8]
console.log(numbers [3][1])
