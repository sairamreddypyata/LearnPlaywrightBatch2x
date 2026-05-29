// JS Engine
//LINE BY LINE , JIT Compilation .

console.log(greeting);
var greeting = "hello";
console.log(greeting);

// behind the scene

// var greeting ;              <--- hoisted with undefined .
// console.log(greeting);      <--- undefined
// greeting = "hello";         <--- assignment happens here.
// console.log(greeting);      <--- "hello"

 var a;
console.log(a);
var a = "sai";
console.log(a);