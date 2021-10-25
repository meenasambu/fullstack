const input=document.querySelector('input')
const button = document.querySelector('button')

const getdata = async () => {
    const url = input.value
    const response=await fetch(url)
    const data = await response.json()
    console.log(data)
}

button.addEventListener('click',getdata)


// get the url 
// fetch the url under await
// get the json of the fetched url
// console the json fetched url
