let a = 10; // Global scope
console.log(a);
//definition of function 
function printHello() {
    console.log("the testing academy");
    let a = 20;
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a);
    }
    console.log(" F : " + a);
}
// console.log(" G : " + a);

printHello();