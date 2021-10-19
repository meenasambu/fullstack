var body = document.querySelector('body')
var input = document.querySelector('input')
var button =document.querySelector('button')

const callbackfunc =(event) =>{
    console.log(input.innerHTML)
    body.classList.toggle('dark')
}

button.addEventListener('click',callbackfunc)
