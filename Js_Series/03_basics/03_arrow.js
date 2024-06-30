const user = {
    username: "Akash",
    price: 999,
    welcomeMsg: function(){
        console.log((`${this.username}, welcome to website`));
        console.log(this);
    }
}

// user.welcomeMsg()
// user.username = 'ram'
// user.welcomeMsg()

//console.log(this);

// function one(){
//     let username = "Aksh"
//     console.log(this.username);
// }

// const one = function (){
//     let username = "Aksh"
//     console.log(this.username);
// }

const one =  ()=>{
    let username = "Aksh"
    console.log(this);
}
//one()

// () => {} Syntex is Arrow function

// const addTwo = (num1, num2) =>{
//     return num1 + num1
// }

//const addTwo = (num1, num2) => num1 + num1

// const addTwo = (num1, num2) => (num1 + num1)

const addTwo = (num1, num2) => ({username: "Akash"})

console.log(addTwo(7, 9));