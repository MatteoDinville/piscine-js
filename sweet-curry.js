function mult2 (n1) {
    return function (n2) {
        return n1 * n2
    }
}

function add3 (num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3 
        }
    }
}

function sub4 (nb1){
    return function (nb2) {
        return function (nb3) {
            return function (nb4) {
                return nb1 - nb2 - nb3 - nb4
            }
        }
    }
}

mult2(1)
// console.log(add3())
// console.log(sub4())