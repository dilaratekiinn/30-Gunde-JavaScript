function sayHello()
{
console.log('hello!')

}
sayHello()
function multiply(num1,num2)
{
return num1+num2

}
let total = multiply (5,2)
console.log('Toplam',total)


function sumArrayValues(array){
     let total =0
    for (let i =0; i<array.length; i++){
    total+=array[i]
    }
    return total
}
let dizi = [2,4,6,8,10,20]

console.log('Toplam',sumArrayValues(dizi))


function topla(){
    let total=0
    for(let i=0; i<arguments.length;i++)
    {
        total+=arguments[i]
    }
    return total
}

console.log(topla (2,5,7,9,10));
 (
     function(){
         console.log('he yo!')
     }
 )()

 let sayHello2 = ( function (name) {

     console.log(`Hello $(name)`)

 })('Dilara')
 

 //normal fonksiyon (regular function)
 
 function hello (name,surname){
     //arguments
    return `Hello $(name)`
 }
  // ok fonksiyonu (arrow function)
 const hello2 = (name,surname) => `Hello $(name) $(surname)` 
 
 const toplama =(num1,...numbers) =>
 {
     console.log(num1)
     console.log(numbers)

 }
 toplama(2,4,8,9,10)

 console.log (hello2('Dilara','Ahmet'))

 
