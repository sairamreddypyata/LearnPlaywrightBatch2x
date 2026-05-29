var a = 10; // Global scope
console.log(a);
//definition of function 
function printHello() {
    console.log("the testing academy");
    var a = 20;
    console.log(a);
    if (true)
         {
        var a = 30;
        console.log(a);
    }
    console.log(" F : " + a);
}
// console.log(" G : " + a);

printHello();
