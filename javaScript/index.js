// alert('hi bode')
// console.log('hi bode')


// strings
var Uname; //variable declaration
console.log(Uname);
var Bname = "Ada" //variable expression
var Cname = "Mike"
let Dname = "John Smilga"
// Bname = "Chika"
const username = "Mathew";
// username = "Jean"

// concatenation
// console.log("My name is " + Bname);
let sentence = "My name is " + Cname
console.log(sentence);

// template string: better alternative to conctenation
let story = "My name is" + " " + Bname + " and I am friends with " + Cname + " and " + Dname + "." + " We are welcoming " + username + " to the club"

let betterStory = `My name is ${Bname} and I am friends with ${Cname} and ${Dname}. We are welcoming ${username}`

console.log(story);
console.log(betterStory);

// let signedInUser = prompt("Please enter your name?")
// let welcomeMsg = `Welcome ${signedInUser}, thanks for signing up`

// string methods
// let welcomeMsg = `Welcome ${signedInUser.toLowerCase()}, thanks for signing up` 
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(part);

let newSentence = "Hi John, I will like to take your classes"
let slicedSentence = newSentence.slice(34, 41)
console.log(slicedSentence);
console.log(newSentence.length);


// alert(welcomeMsg)
// console.log(welcomeMsg)


