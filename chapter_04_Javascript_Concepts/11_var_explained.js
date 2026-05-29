var a = 10; // Global scope

//var is function scoped .
console.log(a);

function PrintHello()
{
    console.log("Hello the testing acadmey");
    var a=20; // local scope
    console.log(a);
    if(true)
    {
        var a =30;
        console.log(a);
    }
}

PrintHello();
var a = 50 ;
//var = trump, flipper, no trust worthy , dual faced .