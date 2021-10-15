//instead of iterating each element using for loop we can use callbackfunction

var arr = ['eat','sleep','mve']

// for (var i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }


// parameters in callbackfunction gives elements and index no , no matter wt u name those parameters
var arr = ['eat','sleep','mve']
var callbackfunction = (element,index) => {
    console.log(element , index)
}

arr.forEach(callbackfunction) 

//instead of calling callbackfunc seperatly , directly we can use

arr.forEach((element,index) => {
    console.log(element,index)
})