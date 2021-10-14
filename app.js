// operators

// arithmetic operators
var a=2
var b=10
console.log('a+b=',a+b)
console.log('b-a=',b-a)
console.log('b/a=',b/a)
console.log('b*a=',b*a)
console.log('b**a',b**a)
console.log('b%a',b%a)

// assignment operators
b=11
console.log('b',b)
b+=1
console.log('b',b)
b++
console.log('b',b)
b=10
++b
console.log('b',b)

// comparision operators

var d=10
var e=2
var f=10

console.log(d>e)
console.log(d<e)
console.log(d>=e)
console.log(d<=e)
console.log(d==e)

console.log(d==f)
var f='10'
console.log(d===f)
console.log(d+f) // typecasting takes place here
console.log(f+d)
// typecasting-converting one data type into other data type 
// == is a loose check , it doesnt check for type 
// === is a strict comparision check


// logical operator

console.log('true && true)',true && true)
console.log('true && false)',true && false)
console.log('false && true)',false && true)
console.log('false && false)',false && false)

console.log('true || true', true || true)
console.log('true || false', true || false)
console.log('false || true', false || true)
console.log('false || false', false || false)

