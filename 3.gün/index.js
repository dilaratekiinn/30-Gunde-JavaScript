
//Boolean, Operatörler ve Tarih İşlemleri

//Boolean değeri true ya da false ' a çevirir.

let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false
 
// Undefined 
let firstName
console.log(firstName) // tanımsızdır

//Null
let empty = null
console.log(empty) 


//Aritmatik Operatörler 
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

// Karşılaştırma Operatörleri
 5 =='5' // true 
'ahmet'.length =='hakan'.length // true 

// Mantıksal Operatörler 
const check = 4 > 3 && 10 > 5         // true && true -> true

//Increment Operator 
let count = 0
console.log(++count)        // 1
console.log(count)          // 1


//Logical Operators
// && ampersand operator
const check = 4 > 3 && 10 > 5         // true && true -> true
const check = 4 > 3 && 10 < 5         // true && false -> false
const check = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator

const check = 4 > 3 || 10 > 5         // true  || true -> true
const check = 4 > 3 || 10 < 5         // true  || false -> true
const check = 4 < 3 || 10 < 5         // false || false -> false

//! Negation
let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true

//Ternary Operators 
let result = 5 > 4 ? 'evet beş büyüktür dörtten' : 'hayır büyük değildir' // evet beş büyüktür dörtten


//Window prompt() methodu 
prompt('Bir sayı  giriniz')// kullanıcıdan input almak için kullanılabilir 
prompt('Bir sayı  giriniz','Sayı yalnızca pozitif olmalı!')


//Window confirm() methodu

confirm("emin misin?") // tamam dersek true döner ya da iptal dersek false döner 
let isDelete = confirm('Silmek istediğine emin misin?')
console.log ( 
    isDelete ? 'Silme işlemi başarılı ' : 'silme işlemi iptal edildi'
    )


   

