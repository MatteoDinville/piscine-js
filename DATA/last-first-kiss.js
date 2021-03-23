//function that takes an array or a string and return the first element.
function first(element) {
    return element[0]
}  

//that takes an array or a string and return the last element.
function last(element) {
    return element[element.length-1]
}
//function that returns an array of 2 elements the last and the first element, in that order
function kiss(element) {
    return [element[element.length-1],element[0]]
}

//--orther function kiss ok-------//

// function kiss2 (element) {
//     let arr = [element[element.length-1]]
//     arr.push(element[0])
//     return arr 
// }

console.log(kiss([1, 2, 3]))