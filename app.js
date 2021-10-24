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
                 //in the data wt we have fetch , to access the data user.id we use
                 dataid.appendChild(dataidtextnode)
                 newrow.appendChild(dataid)

                 table.appendChild(newrow)

             })
        })

        
// create a new row first  - tr - row in a table
// create an element  - td - thats a cell in table
// then to the cell we need to add text 
// so add textnode and fetch user id 
// after fetching data id's append it to dataid
// in the new row append dataid
// after filling the row append it to the table