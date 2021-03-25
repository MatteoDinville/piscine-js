// Create a reverse function that works on both arrays and strings.
// Like [].reverse() but working also for strings (without using the actual method)

function reverse(str) {
    let finalStr = new Array
    for (let i = str.length-1 ; i >= 0; i--) {
        if (typeof(str) == "object") {
            finalStr.push(str[i]);
        } else {
            finalStr += str[i];
        }
    }
    return finalStr
}
console.log(reverse("bonjour"));