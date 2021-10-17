var arr = [1,2,3,4,5,6,7,8]

arr.unshift(6) //unshift appends elements to the front 
console.log(arr)

arr.shift()
console.log(arr)//deletes the first element

// shift removes 
// unshift adds the elements 

arr1 = arr.slice(2,5)
console.log(arr1)

var arr = [1,2,3,4,5,6,7,8]
var new_arr=[]

for (var i=0;i<arr.length;i++) {
    if (arr[i]%2==0)
    new_arr.push(arr[i])
}
console.log(new_arr)

// filter method - its like a call back func.

var new_arr1=arr.filter((Element,index) => {
     if (Element % 2 == 0)
     return true
})
console.log(new_arr1)