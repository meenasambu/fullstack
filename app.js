//DOM API and for loop
//DOM - document object model
// in DOM html doc we have to branches head and body , when u link js to head , body elements reference shows null.
// when you add 'defer' to the linking tag in html file, it excutes after DOM completion

var heading=document.getElementById('heading')
heading.innerHTML="Hi from JS"

console.log( heading)

var heading=document.getElementById('heading')
var para=document.getElementsByClassName('para')

console.log(heading)
console.log(para.length)
console.log(para[0])
console.log(para[1])



var heading =document.getElementById('heading')
var para=document.getElementsByClassName('para')
var tags=document.getElementsByTagName('a')
var query =document.querySelector('#heading')

console.log(tags)
console.log(query)






para.push('asdf')
//you dont have access to push and other methods, as it is not the actual array
//its just gets the elements not the actual arrays 
console.log(para)