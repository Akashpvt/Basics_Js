let a = 300
if(true){
    let a =10
    const b = 30
    //console.log("INNER:", a);

}
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username ="Aksh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);

    two()
}

//one()

if(true){
    const username ="akash"
    if (username === "akash") {
        const website = " youtube"
        //console.log( username + website);
    }
    //console.log(website);

}

//console.log(username);

console.log(addone(7))

function addone(num){
    return num +2
}

console.log (addTwo(4))

const addTwo = function(num){
    return num +3
}

