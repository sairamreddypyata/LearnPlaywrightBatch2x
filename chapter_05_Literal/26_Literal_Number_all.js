// JavaScript supports two main numeric types:
// 1. Number     -> double-precision 64-bit binary format IEEE 754
// 2. BigInt     -> integer values larger than Number.MAX_SAFE_INTEGER

// Number literals
let decimal = 255;                       // decimal integer
let floatNumber = 12.34;                 // floating point
let exponentNumber = 1.23e4;             // exponential notation (1.23 * 10^4)

// Hexadecimal literal
let hexNumber = 0xFF;                    // 255 in hexadecimal

// Octal literal
let octalNumber = 0o755;                 // 493 in octal

// Binary literal
let binaryNumber = 0b1010;               // 10 in binary

// Numeric separators for readability
let largeNumber = 1_000_000;             // one million
let binarySeparator = 0b1010_1010;       // binary with separators

// Special Number values
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;

// BigInt literal
let bigIntNumber = 9007199254740991n;    // BigInt notation with trailing n
let bigIntFromString = BigInt("12345678901234567890");

console.log('decimal:', decimal);
console.log('float:', floatNumber);
console.log('exponent:', exponentNumber);
console.log('hexadecimal:', hexNumber);
console.log('octal:', octalNumber);
console.log('binary:', binaryNumber);
console.log('numeric separator (largeNumber):', largeNumber);
console.log('binary separator:', binarySeparator);
console.log('Infinity:', positiveInfinity);
console.log('-Infinity:', negativeInfinity);
console.log('NaN:', notANumber);
console.log('typeof NaN:', typeof notANumber);
console.log('BigInt:', bigIntNumber);
console.log('BigInt from string:', bigIntFromString);
console.log('typeof BigInt:', typeof bigIntNumber);

// Note: Number and BigInt cannot be mixed in arithmetic directly.
try {
  console.log('BigInt + Number:', bigIntNumber + 1);
} catch (error) {
  console.log('Error mixing BigInt and Number:', error.message);
}

console.log('Number.MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);
console.log('Number.MIN_SAFE_INTEGER:', Number.MIN_SAFE_INTEGER);
console.log('Number.isSafeInteger(9007199254740991):', Number.isSafeInteger(9007199254740991));
console.log('Number.isSafeInteger(9007199254740992):', Number.isSafeInteger(9007199254740992));
