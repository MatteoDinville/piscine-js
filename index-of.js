// indexOf that returns the index of the first occurence of a value
// lastIndexOf that returns the index of the last occurence of a value
// includes that returns true if the value was found in the array

function indexOf (index, value, fromIndex = 0) {
    for (let i = fromIndex ; i < index.length; i++) {
        if (index[i] === value) {
            return i // i est la position de l'index
        }
    }
    return -1
}

function lastIndexOf (index, value, fromIndex = index.length-1) {
    for (let i = index.length-1; i >= fromIndex; i--) {
        if (index[i]=== value){
            return i;
        }
    }
    return -1
}

function includes (index, value) {
    for (let i = 0; i < index.length; i++) {
        if (index[i] == value) {
            return true
        }
    }
    return false
}
console.log(indexOf("1 2 3"))