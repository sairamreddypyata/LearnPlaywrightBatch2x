// let is block scoped

let x = "global";
if (true) {

    // TDZ for block scoped "x" starts here
    //  console.log(x); // // ReferenceError (NOT Global)
    let x = "block";
    console.log(x);
}

console.log(x);