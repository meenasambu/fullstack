let response = fetch('https://jsonplaceholder.typicode.com/users').then(urldata => {
    let data1 = urldata.json()
    console.log(data1)
    return (data1)
}).then(book => { console.log(book)})


// second then returns the data (i.e.,parseddata)
//first then , considers the url and fetches the data in the url
//and gives output as a promise 

// then is like , when u initiate it , it takes the responsibility of the data mentioned before it

//when data.json gets a value , it jst fulfilles the promise made by then
//if u want data in json then return type is used 


//above then can simply be written as
let res = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
    console.log(data)
})