const hero = ["thor", 'Ironman', "spaiderman"]
const hero2 =["superman", "flash", "batman"]

// hero.push(hero2)

// console.log(hero);
// console.log(hero[3][1]);

// const allHeros = [...hero, ...hero2]
// console.log(allHeros);

let new_Array = [1,2,3,[4,5,6], 7,[6,7,[4,5]]]
let real_Array = new_Array.flat(Infinity)
console.log(real_Array);

console.log(Array.isArray("Akash"));
console.log(Array.from("Akash"));
console.log(Array.from({name:"Akash"})); // interesting

let score1 = 100
let score2 = 200
let score3 = "Akash"

console.log( Array.of (score1, score2, score3));

