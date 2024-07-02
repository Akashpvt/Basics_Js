//const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) =>{
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, ]

// const newNum = myNum.filter((num) => {
//     return num > 3
// })
// console.log(newNum);

// const newNum = []
// myNum.forEach((num) => {
//     if (num > 4) {
//         newNum.push(num)
//     }
// })

// console.log(newNum);

const myNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const myNums =myNumb.map( (num) => num +10 )

// const values = myNumb.forEach( (num) => {
//     console.log(num +10);
//     return num
// } )

const newNum = myNumb
              .map( (num) =>num * 10 )
              .map( (num) =>num + 2 )
              .filter( (num) => num >= 40 )

 console.log(newNum);
