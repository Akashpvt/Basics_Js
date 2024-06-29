//const tinderUser = new Object()
const tinderUser = {}

    tinderUser.id ="1233"
    tinderUser.name ="ravi"
    tinderUser.isLoggedIn = false

   // console.log(tinderUser);

   const regularUser = {
    email: "ravi@google.com",
    fullname: {
        userName: {
            FirstName: "Akash",
            LastName: "Gupta"
        }
    }

   }

  // console.log(regularUser.fullname.userName.FirstName);
   
  const obj1 = {1: "a", 2: "G"}
  const obj2 = {3: "W", 4: "J"}

  //const obj3 ={obj1,obj2}
  //const obj3 = Object.assign({}, obj1, obj2)

  const obj3 ={...obj1,...obj2}
  //console.log(obj3);

  const users = [
    {
        id:2,
        email:"rakhi@google.com"
    },
    {
        id:2,
        email:"rakhi@google.com"
    },
    {
        id:2,
        email:"rakhi@google.com"
    },
    {
        id:2,
        email:"rakhi@google.com"
    },
  ]


  users[1].email
  console.log(tinderUser);

//   console.log(Object.keys(tinderUser));
//   console.log(Object.values(tinderUser));



