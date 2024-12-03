let somevalue = null;

console.log(typeof somevalue);
console.log(somevalue === null);
console.log(somevalue == null);
console.log(somevalue === "object");
console.log(somevalue == "object");

if(typeof somevalue == "object" && somevalue == null)
{
    console.log("Some Action because the current value is null");
    
}


let someValue1 = null;

// if(typeof somevalue == "object" && somevalue == null)
// {
//     console.log("somevalue is an object");
// }

if(typeof someValue1 == "object" && someValue1 !== null)
{
    console.log("somevalue1 is an object");
}
