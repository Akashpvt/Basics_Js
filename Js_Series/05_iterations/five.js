const coding = ["js", "ruby", 'java', 'python', 'cpp']

// coding.forEach(function(item){
//     console.log(item);
// })

// coding.forEach( (val)=>{
//     console.log(val);
// } )

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);

// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "cpp",
        languageFileName: "c++"
    }
]
myCoding.forEach( (item) =>{
    console.log(item.languageName);
} )