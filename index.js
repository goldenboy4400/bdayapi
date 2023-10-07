

async function getData() {

   let people = []

    while(true) {

        person = await fetch("https://randomuser.me/api/")
        obj = await person.json()
    
        let dobcomp = obj.results[0].dob.date.split('T')
    
        //get bday year and month take out time
        let birthMD = new Date(obj.results[0].dob.date)

        let splitDate = dobcomp[0].split('-');
        
        //console.log(birthMD.toLocaleString())
    
        let bdayMonth = parseInt(splitDate[1])
        let bdayDay = parseInt(splitDate[2])
    
        obj.results[0].bdaypassed = bDay(bdayMonth, bdayDay)
        obj.results[0].birthdate = dobcomp[0]

    
         people.push(obj.results[0])

        //100 results
        if (people.length == 100) {
            break;
        }

        
    }

    return people
 
}

function bDay(bmonth, bday) {

    let currentDate = new Date();

     let currenttime = currentDate.toLocaleString()
     
     let splitMonthDay = currenttime.split('/')


    let currentMonth = parseInt(splitMonthDay[0])

    let currentDay = parseInt(splitMonthDay[1])

        if (bmonth > currentMonth) {
            //bday has passed
            return "Birthday yet to occur"
        } else if (bmonth === currentMonth && bday > currentDay) {
            //bday not here yet
            return "Birthday yet to occur"
        } else if (bmonth === currentMonth && bday === currentDay) {
            //bday
            return "Today is your Birthday"
        } else {
            //bday has passed
            return "Birthday has passed"
        }

}

