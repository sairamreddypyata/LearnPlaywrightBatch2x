const BASEURL = "https://api.example.com/data";
BASEURL = "https://api.data";
// TypeError: Assignment to constant variable.


let name = "dutta";
name = "john";
{
    let name = "promod";
    console.log(name); // promod
}
console.log(name); // john
console.log("  ");


function say() {
    let name = "ram";

    console.log(name);
}
say();
say();