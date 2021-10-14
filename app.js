var heading =document.getElementById('heading')
var para=document.getElementsByClassName('para')
var tags=document.getElementsByTagName('a')
var query =document.querySelector('#heading')
var query =document.querySelector('.para')
// in query css selectors are mentioned 
// in query it returns only para not array(in console we get html collection of arrays)
// diff in query and para is returning an para and a array
console.log(tags)
console.log(query)
console.log(para)
//
var query =document.querySelectorAll('.para')
console.log(query)