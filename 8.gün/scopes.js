
ad='Dilara' //window scope 

{
    let deneme='test'
    console.log(deneme)
}

let name = 'Dilara'
let surName = 'TEKİN'

function letsLearnScope() {
console.log(name,surName)
if (true){
    let name='Ahmet Burak'
    let surName='KÜÇÜK'
    console.log(name,surName)

}
console.log(name,surName)
}

letsLearnScope()
console.log(name,surName)

for (var i =1; i<=5;i++){
    //console.log('i',i)

}
//console.log('son i',i)


//Object
 
const user = {

    name : 'Dilara',
    surName: 'Tekin',
    age : '22',
    isMarried : 'False',
    test: {
        deneme:'Deneme text'
    },
    skills : [
        'HTML',
        'CSS', 
        'JavaScript',
    ],
    sblings : [{
        name:"Sibel",
        surName:'Tekin'
    },
],
    getFullName: function(){
      //  return `$(this.name) $(this.surName`

    }
}
console.log(user.getFullName())

const formatter = new Intl.ListFormat (
    'tr',{
        Style:'long',
        type: 'conjunction'
    }

);


user.name= 'Ahmet'
user.title = 'Devoloper'
user.skills.push('PHP')
user.country ='Turkey'
 

user.getPersonİnfo= function()  {

    //let skillsWithoutLastOne = this.skills.splice(0,this.skills.length-1).join(',') 
    //let lastSkill = this.skills.at(-1)
    //let skills = `${skillsWithoutLastOne} and ${lastSkill}.`
    let skills= formatter.format(this.skills)
    let fullName  = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
    
}

console.log(user.getPersonİnfo())
console.log(user.test.deneme)
console.log(user)


//Object Methods

//let newUser = Object.assign({},user)
let newUser = {...user}
//console.log(user)
newUser.name='Alin'
//console.log(newUser)

//console.log(Object.keys(user))
//console.log(Object.values(user))

for (let[key,val] of Object.entries(user)){
   // console.log(key,val)
}
console.log(user.hasOwnProperty('country'))