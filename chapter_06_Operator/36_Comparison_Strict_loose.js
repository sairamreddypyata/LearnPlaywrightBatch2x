// number == string

/* 
console.log(42 == "42"); // == loose comparison
console.log(42 === "42");// data type and converted value .
console.log(42 == "45"); // value different .
*/

console.log(5 === 5);
console.log(5 === "5");

console.log(5 == 5);
console.log(5 == "5");

console.log(0 == "");  // "" converted to 0 - checked by the loose .
console.log(0 === "");

console.log(true == 1);
console.log(false == 0);
console.log(true == "1");
console.log(false == 2);

console.log(true == 2);
console.log(true == 22);
console.log(true == 32);

console.log(5 != "5"); // 5 is integer and "5" is string both of them are not equal .
console.log(5 !== "5"); // true (value, datatype ) // 5 is integer and "5" is string but value is same so true.    
// console.log(5 !=== 5); // this does not exist .


// === strict check we will check for both the value and datatype .
// == loose check we will check either value or data type .











