var v = 12;
let x = 10;
const e = 3.21;

var browser = "chrome";
var browser = "firefox"; // redeclaration allowed .
browser = "edge"; // reassignment allowed .
console.log(browser);


var testcases = ["login", "logout", "signup"];
for (var i = 0; i < testcases.length; i++) {
    console.log("RUNNIG TEST : " + testcases[i]);
}
console.log("Loop counter leaked outside loop : " + i);


console.log("Hi");
console.log("Hi");
console.log("Hi");


function say() {
    console.log("Hello from function");
}
say();
say();

