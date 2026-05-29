console.log(score); // ReferenceError: Cannot access 'score' before initialization

// Note: Unlike var, let and const are not hoisted to the top of their scope. 
// They are in a "temporal dead zone" from the start of the block until the declaration is processed. 
// Accessing them before declaration results in a ReferenceError.

let score = 50;

{
    // TDZ for score starts here
    // console.log(score);         // ReferenceError
    // score = 50;                 // ReferenceError
    // type of score .             // ReferenceError
    // TDZ for score ends here

    let score = 100; //declaration is reached , TDZ ends here 
    console.log(score); // 100 (safe to access now )
}