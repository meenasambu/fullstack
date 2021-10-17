const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]

const add=document.querySelector('#add')
const multiply=document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const subtract=document.querySelector('#subtract')

const resultbox=document.querySelector('.result')

const addfunc=() => {
    const result=parseInt(a.value)+parseInt(b.value)
    resultbox.innerHTML=result
    console.log(result)
}
add.addEventListener('click',addfunc)

multiply.addEventListener('click',() => {
    const result=parseInt(a.value) * parseInt(b.value)
    resultbox.innerHTML=result
    console.log(result)
})

divide.addEventListener('click',() => {
    const result=parseInt(a.value) / parseInt(b.value)
    resultbox.innerHTML=result
    console.log(result)
})

subtract.addEventListener('click',() => {
    const result=parseInt(a.value) - parseInt(b.value)
    resultbox.innerHTML=result
    console.log(result)
    
})







