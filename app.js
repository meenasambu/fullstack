// Functions
function greet(name,age){
    console.log(name,age)
    console.log('Hello')
}
greet('ms',21)

var add = function sum(a=10,b=20) {
    var sum=a+b
    return sum
}
console.log(add(10,20))

// arrow function
// it removes the need of using function keyword in functions

var add= (a=10,b=25) => {
    var sum=a+b
    return sum
}

console.log(add(10,30))