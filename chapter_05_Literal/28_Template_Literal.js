// Template literally .

let firstname = "pramod";
let fullname = ` Hi ${firstname} datta`;
console.log(fullname);

const env = "staging";
const userid = 12345;
const apiurl = `https://api.${env}.tekion.com/users/${userid}`;
console.log(apiurl);


// playwright
const rowindex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowindex}"] [data-column="${columnName}"]`).click();


//logs
const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`);



const testCase = "checkout_flow";
const timestamp = Date.now();

await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });



const username = "pramod";
const role = "admin";

const payload = `{
  "user": "${username}",
  "role": "${role}",
  "timestamp": "${new Date().toISOString()}"
}`;
console.log(payload);



