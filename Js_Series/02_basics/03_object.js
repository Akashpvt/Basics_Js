// singleton
// object.create


// Object literals
const mySym = Symbol("key1")

const JsUser = {
    name:"Akash",
    "full name": "Akash Gupta",
    [mySym]:"mykey1",
    age:21,
    email: "akash@gmail.com",
    location:"Bihar",
    isLoggedIn: false,
    lastLoginDay:["monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "raju@gmai.com"
//Object.freeze(JsUser)
JsUser.email = "akash@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting());

