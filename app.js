const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]

const add=document.querySelector('#add')
const multiply=document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const subtract=document.querySelector('#subtract')

const resultbox=document.querySelector('.result')

// const addfunc=() => {
//     const result=parseInt(a.value)+parseInt(b.value)
//     resultbox.innerHTML=result
//     console.log(result)
// }


// const multiplyfunc = () => {
//     const result=parseInt(a.value) * parseInt(b.value)
//     resultbox.innerHTML=result
//     console.log(result)
// }


// const dividefunc = () => {
//     const result=parseInt(a.value) / parseInt(b.value)
//     resultbox.innerHTML=result
//     console.log(result)
// }


// const subtractfunc = () => {
//     const result=parseInt(a.value) - parseInt(b.value)
//     resultbox.innerHTML=result
//     console.log(result)
// }

const calculate = (event , operation) => {
    switch (operation){
        case "add":
            resultbox.innerHTML=parseInt(a.value)+parseInt(b.value)
            break
        case "multiply":
            resultbox.innerHTML=parseInt(a.value) * parseInt(b.value)
            break
        case "divide":
            resultbox.innerHTML=parseInt(a.value) / parseInt(b.value)
            break
        case "subtract" :
            resultbox.innerHTML=parseInt(a.value) - parseInt(b.value)
            break
        default:
            resultbox.innerHTML="not a valid opration"

            
    }

}


add.addEventListener('click',(event) => {
    calculate(event,"add")
})
multiply.addEventListener('click',(event) => {
    calculate(event,"multiply")
})
divide.addEventListener('click',(event) => {
    calculate(event,"divide")
})
subtract.addEventListener('click',(event) => {
    calculate(event,"subtract")
})


