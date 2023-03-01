function toAbbreviation(str) {
return str.slice(0,str.indexOf(' ')+2);
}
console.log(toAbbreviation('Robin')); // Output: "Robin S"


// console.log(toAbbreviation("Robin Singh")); // Output: "Robin S"


console.log(toAbbreviation("Robin kppppp")); // Output: "Robin S"
