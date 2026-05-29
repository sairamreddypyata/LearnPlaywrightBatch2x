// let - Block scoped

let a = 10;
let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("retry count : " + retryCount);

// let retryCount = 12; // SyntaxError: Identifier 'retryCount' has already been declared .
// redeclaration not allowed with let .

let testStatus = "pending";
if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Execution time : " + executionTime);
}
console.log("Execution time : " + executionTime); // ReferenceError: executionTime is not defined   

