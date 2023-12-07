const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


// In JavaScript, the `this` keyword behaves differently in arrow functions compared to regular functions. The main distinction lies 
// in how they handle the binding of the `this` context. 

// In a regular function, the value of `this` is dynamically determined when the function is called, depending on how the function is invoked.
// This behavior can sometimes lead to unexpected results, especially in nested functions or callback scenarios.

// On the other hand, arrow functions capture the value of `this` from their surrounding lexical scope. This means that they inherit the 
// `this` value from the enclosing context at the time the arrow function is defined, rather than at the time it is executed.



