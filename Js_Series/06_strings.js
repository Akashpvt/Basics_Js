const name = 'Akash'
const repoCount = 50

//console.log(name + repoCount + 'ran');

console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`);

const gameName = new String('Akash_pappu_jj')

// console.log(gameName[3]);
// console.log(gameName.charAt(4));

// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('k'));

const newString = gameName.substring(2,7)
console.log(newString);

const anotherString = gameName.slice(-8, 7)
console.log(anotherString);

const newStringOne = "  Akash    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aksh.com/akash%30gupta"

console.log(url.replace('%30', '$'));

console.log(url.includes('akash'));

console.log(gameName.split('_'));