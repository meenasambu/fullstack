// function syntax
let car = {
    name:"c class",
    manufacturer:"mercedes",
    print : function () {
        console.log(`${this.name} was created by ${this.manufacturer}`)
    }
}

car.print()

//arrow function syntax
let car1 = {
    name1:"c class",
    manufacturer1:"mercedes",
    print : ()=> {
        console.log(`${this.name1} was created by ${this.manufacturer1}`)
    }
}

car1.print()

//arrow function - 'this' keyword inside arrow function is always gng to point to window object
//function - 'this' inside function declaration might chage depending on what object it is in