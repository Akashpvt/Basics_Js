const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else{
    console.log("Dont't have user email");
}

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", 'fales', " ", [], {}, function(){ }

// Nullish coalescing Operator (??): null Undefined

let  val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 12
// val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 88 ? console.log("less then 88") : console.log("more the 88");

