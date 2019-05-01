for(crowNum = 99; crowNum >= 1; crowNum--){
  if(crowNum != 1) {
  console.log(crowNum + "crows on the wall" + crowNum + "crows." + "1 fell down and became wight" + (crowNum - 1) + "crows are left.");
 } else {
  console.log("1 single crow. It fell down and became a wight. There is no one left to defend Westeros now.");
}

let count = 99
while (count < 98) {
  if () {
console.log('99');


## Assignment

Step 1 - Write a function called greet that returns a string of
         the name of the person to be greeted.

Step 2 - Write a function called network that utilizes a variable
         that is assigned with the return value of the greet() function
         WITHIN the network function.

         the network function takes a second argument, which is an integer.


The output of the functions should be:

1) "NAME, so nice to meet you!"

2) "NAME just networked with X people"

function greet(name) {
  console.log("${name} so nice to meet you!")
  return name
}

function network(name, int) {
  let person = greet(name)
  console.log(`${person} just networked with ${int} people`)
}
  dollar sign means
