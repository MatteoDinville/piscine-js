// Create a repeat function that takes a string and a number as parameters 
// and return the repeated string by the given number 

function repeat(string, times) {
    let string2 = ""
    for (let i = 1 ; i <= times ; i++) {
        string2 = string2 + string 
    }
    return string2
}
console.log(repeat("zeub", 1))

console.log(repeat("zeub", 2))

console.log(repeat("zeub", 3))

console.log(repeat("zeub ", 4))

console.log(repeat("zeub ", 5))