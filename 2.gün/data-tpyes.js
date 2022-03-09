let numOne = 3           // true 
let numTwo= 3

console.log( numOne == numTwo)


let js = 'javascript'
let py = 'pyhton'

console.log ( js == py)                // false 

let lightOn = true
let lighOf = false 

console.log ( lightOn == lighOf)

                

let nums = [ 1, 2, 3]
nums [0] = 10                   // Array (diziler) 0. elemandan başlar 

nums [0]  // 1
nums [1]  // 2  
nums [2]  // 3


 let user1 = {
       name: 'Dilara', 
       surname: 'Tekin'

 }


 let user2 = {
       name: 'Dilara',
       surname: 'Tekin'

 }

 console.log ( user1== user2)

 // declaring number data types 
 
  let age = 35
  const gravity = 9.81 // sabit
  let mass = 72 // Kilogram  
  const pi = 3.14 // geometrik sabit 

   const pi = Math.PI
   console.log(pi)

   console.log (Math.round(9.81))  // 10
   console.log(Math.floor(pi))     
   console.log (Math.ceil(pi))       



   let name = 'Dilara'
   let surname = 'Tekin'
   let a = 4
   let b = 5
  // let fullName = name + surname 
   //console.log(fullName)


   let fullName = ` ${name}  

   a+b = ${a+b}

   ${surname} `

   console.log(fullName)



   let js = 'JavaScript'
   console.log(js.length)         // 10
   let firstName = 'Asabeneh'
   console.log(firstName.length)  // 8


   let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t


let str = 'merhaba dilara, nasılsın dilara?'
str.replace('dilara', 'sibel')  // merhaba sibel, nasılsın dilara?


let string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - it is case sensitive!
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true


let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python



let string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3

let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t



let string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4


let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love')) 

//["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]



let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10

typeof +'5' // 'number' + işareti ile string den int'e çevirebiliriz
