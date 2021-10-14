var heading=document.getElementById('heading')

console.log(heading)

// we can dynamically modify content by using innerHTML & style 
heading.innerHTML="i was added by JS"


heading.style="color:red;font-size:2rem"

//we can check wt clss does a element has
//eg:we can also check wt classes does heading have 
console.log(heading.classList)

//to add or remove any class from an element
heading.classList.add('five')
heading.classList.remove('two')

console.log(heading.classList)