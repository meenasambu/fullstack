const table = document.querySelector('table')
console.log(table)




fetch('https://jsonplaceholder.typicode.com/users')
         .then(res =>res.json())
         .then(data => {
             console.log(data)
             data.forEach(user => {
                 
                 let newrow=document.createElement('tr')
                 let dataid = document.createElement('td')
                 let dataidtextnode=document.createTextNode(user.id)
                 dataid.appendChild(dataidtextnode)
                 newrow.appendChild(dataid)

                 let newrow1=document.createElement('tr')
                 let dataname = document.createElement('td')
                 let datanametextnode=document.createTextNode(user.name)
                 dataid.appendChild(datanametextnode)
                 newrow1.appendChild(dataname)

                 let newrow2=document.createElement('tr')
                 let datausername = document.createElement('td')
                 let datausernametextnode=document.createTextNode(user.username)
                 datausername.appendChild(datausernametextnode)
                 newrow2.appendChild(datausername)

                 let newrow3=document.createElement('tr')
                 let dataemail= document.createElement('td')
                 let dataemailtextnode=document.createTextNode(user.email)
                 dataemail.appendChild(dataemailtextnode)
                 newrow3.appendChild(dataemail)

                 let newrow4=document.createElement('tr')
                 let datahno = document.createElement('td')
                 let datahnotextnode=document.createTextNode(user.address)
                 datahno.appendChild(datahnotextnode)
                 newrow4.appendChild(datahno)



                 table.appendChild(newrow)
                 table.appendChild(newrow1)
                 table.appendChild(newrow2)
                 table.appendChild(newrow3)
                 table.appendChild(newrow4)


             })
        })

        
// create a new row first  - tr - row in a table
// create an element  - td - thats a cell in table
// then to the cell we need to add text 
// so add textnode and fetch user id 
// after fetching data id's append it to dataid
// in the new row append dataid
// after filling the row append it to the table