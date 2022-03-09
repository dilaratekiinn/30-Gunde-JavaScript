const date = new Date()

 let year = date.getFullYear(),
 month = date.getMonth(),
 day = date.getDate(),
 hour = date.getHours(),
 minute = date.getMinutes(),
 second = date.getSeconds(),
 dayNumber = date.getDay()

 let months = [
         'Ocak',
         'Şubat',
         'Mart',
         'Nisan',
         'Mayıs',
         'Haziran',
         'Temmuz',
         'Ağustos',
         'Eylül',
         'Ekim',
         'Kasım',
         'Aralık'

 ]
 console.log(months.length) // 12


 let days = [
        'Pazar',
        'Pazartesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi'

 ]

 //months[month]
 //${months[month]}

 let humanReadableDate =  `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${second}`
 console.log(humanReadableDate)  //18 Şubat 2022, Cuma, 16:18:27