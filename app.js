// ARROW FUNCTION 
// it removes the need of using function keyword in functions

var add= (a=10,b=25) => {
    var sum=a+b
    return sum
}

console.log(add(10,30))

// arrow function can be used like this as well 

var sum=(a=5,b=65) => a+b
console.log(sum(5,65))

// if we have only one parameter , we can remove paranthesis as well
// return can also be removed
var sum=(String) => {
    return 'hi'+String
}
console.log(sum(' ms'))

var sum = String => 'hi ' +String

console.log(sum('ms'))