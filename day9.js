
const fonksiyon = number => number **2 


function cube(cb,number) {
    return cb(number)* number 

}

//console.log (cube(fonksiyon, 3)) 

const a = s1 => {
    const b =s2 => {
        const c = s3 => {
            return s1+s2+s3
        }
        return c
    }
    return b 
}

//console.log (a(5)(10)(20))

const numbers = [1,3,5,7,9]
let total = 0 
numbers.forEach(number => total +=number)
// console.log(total)

const numbers2 =numbers.map (number => number *2)
console.log(numbers)

const users = [
    {
    id: 1, 
    name : 'Dilara',
    age : 22
    }, 

    {   id: 2, 
        name : 'Ahmet',
        age : 23
    },

    {   id: 3, 
        name : 'Burak',
        age : 24
    }


]



function sayHello () {
    console.log('Hello!')
}

const interval = setInterval (sayHello,1000)

//clearInterval 
// cleatTimeout

const timeout = setTimeout(() => {
    clearInterval(interval)
    console.log("interval işlemi iptal edildi")

} ,5000)


setTimeout (() => {
clearTimeout(timeout)
console.log("timeout işlemi iptal edildi,interval devam edecek..")
}, 3000)


const names = ['Dilara', 'Ahmet' , 'Sibel']
names.sort()
console.log(names)
