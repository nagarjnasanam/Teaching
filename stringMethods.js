let value= "learning String comments     ";
let myName="Madhuri";
let a="Hello";
let b="World";
let string="My Name is Madhuri"
let text = "5";

const originalString = "123";
const originalString1 = "123";
const paddedString = originalString.padStart(5, "a");
const paddedString1 = originalString.padEnd(5, "a");
let mynameis="MyName, is Nagarjuna";
// let result=["MyName","is","Nagarjuna"];
let str = "Hello World!";
// let pattern = '/l+g/';
let pattern = /l+/g;
let result = str.match(pattern);
console.log("MatchMethod",result); 
let message="My world is so big";
console.log("inculdesmethod",message.includes("z"));





console.log("splitMethod",mynameis.split(""));
console.log("splitMethod",paddedString.split(""));
console.log("length",myName.length);
console.log("position",value.charAt(7));
console.log("assekey",value.charCodeAt(7));
console.log("catination",a.concat(b));
console.log("Upper",a.toUpperCase());
console.log("Lower",b.toLowerCase());
console.log("cuttings",value.trim());
console.log("replacement", string.replace("Madhuri","Madhu"));
console.log("adding",text.padStart(4,"0"));
console.log("slicing",value.slice(2,10));
console.log("padstring",paddedString);
console.log("padstring",paddedString1);