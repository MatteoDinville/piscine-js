// Create the sign function that takes one number argument and return 1 if the number is positive, 
// -1 if the number is negative and 0 if the number is exactly 0 You must not just use Math.sign, make your own.

// Create the sameSign function that takes 2 numbers as arguments 
// and return true if they both have the same sign, or false otherwise.

function sign (number){
    if (number > 0) {
        return 1
    }else if (number == 0){
        return 0
    }else if (number < 0){
        return -1
    }
}   

function sameSign(number, number2){
   if (sign(number) == sign(number2)){
       return true 
   }else 
    return false
}