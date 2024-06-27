// Date

let myDate = new Date()
 //console.log(myDate.toString());
// console.log(myDate.toDateString());  // Thu Jun 27 2024
// console.log(myDate.toISOString());  // 2024-06-27T10:45:00.356Z
// console.log(myDate.toJSON());      // 2024-06-27T10:45:00.356Z
// console.log(myDate.toLocaleString());// 6/27/2024, 10:45:00 AM
// console.log(typeof myDate); // object

let myCreatedDate = new Date("06-27-2024")

 let myTimeStamp = Date.now()

//  console.log(myTimeStamp);
//  console.log(myCreatedDate.getTime());

 let newDate = new Date()
 console.log(newDate );
 console.log(newDate.getDate());
 console.log(newDate.getMonth() + 1);
 console.log(newDate.getDay() );

 newDate.toLocaleString('default',{
    weekday: "long",
 })