var heading=document.getElementById('heading')
var body=document.querySelector('body')


heading.innerHTML="i was added by JS"
heading.style="color:red;font-size:2rem"


heading.classList.add('five')
heading.classList.remove('two')

console.log(heading.classList)

//dynamically adding class dark and pre-defined styles of dark in HTML doc
body.classList.add('dark')
