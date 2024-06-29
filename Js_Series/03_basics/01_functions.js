function myName(){
    console.log("A");
    console.log("k");
    console.log("A");
    console.log("S");
    console.log("H");
}
//myName()

//   function addTwoNo(number1, number2 /*Parameters*/){
//      console.log(number1 + number2 );
//  }
//addTwoNo(4, null /*Arguments*/)


 function addTwoNo(number1, number2 ){
    //  let result = number1 + number2
    // return result
    return number1 +number2
 }

const result = addTwoNo(4,5)
//console.log("Result", result);

function loginUserMassage(username){
    return `${username} just logged in`
}

//console.log(loginUserMassage("Akash"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
 //console.log(calculateCartPrice(10,30,577,900,445));
const user={
    username: "Aksh",
    price:299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is
         ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username:"sam",
    price:499
})

const NewArray = [200,499,299,199]

function returnSecondValue(getArray){
    return getArray[3]
}
//console.log(returnSecondValue(NewArray));
console.log(returnSecondValue([200,499,299, 199]));
