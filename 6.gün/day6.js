for ( let i = 0; i <= 100; i++ ) {
  console.log(i)
}

for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }

  const names = [ 'Dilara','Sibel','Gamze','Alin','Hülya']

  for (let i =0; i <= 4; i++){
      console.log(names[i])
  }

  let numbers = [5,10,15]
  let sum = 0 
  
  for (let i =0; i< numbers.length; i++)
  {
    sum += numbers[i]
  }
  console.log('Toplam', numbers)


  let countries = [ 'Turkey', 'Cyprus','Azerbaijan']
  let newCountries = []

  for ( let i=0; i<countries.length; i++)
  {
      newCountries.push(countries[i])
  }
 
  console.log(newCountries)


  let i =0 
  while (i<names.length)
  {
      console.log('isim',names[i])
      i++
  }

  for (let name of names) {

      if (name == 'Sibel'){
          break
      }
      
      console.log('Ad',name)
  }