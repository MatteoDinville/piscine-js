const student = {
    name: "Matteo",
    age: "19"
}
function inverseObject(obj) {
    reserveObj = {}
    newObj = Object.keys(obj).reverse();
    newObj.forEach(function(i){
        reserveObj[i] = obj[i];
    })
    return reserveObj;
}
reverse = inverseObject(student)
console.log(reverse)
