var list = document.querySelector('ul')

console.log(list)

var arr=['Go to the gym','cook oatmeal','eat']

for (var i=0; i<arr.length;i++){
    var element=document.createElement('li')
    var textnode=document.createTextNode(arr[i])
    console.log(textnode)
    element.appendChild(textnode)
    list.appendChild(element)
    console.log(textnode)
}







// to iterate all elements in the list in html doc
//we need two nodes in DOM , one for ul and other for elements li
//in DOM we have head & body , rn we are only concerned abt body
//Body-->ul-->li-->text
//         -->li-->text
//         -->li-->text
//appending text to li node then iterating li in ul node
