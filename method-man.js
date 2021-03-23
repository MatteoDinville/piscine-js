// words that takes a string and split it into an array of strings on spaces
// sentence that takes an array of strings and join them with spaces
// yell that take a string and return it in upper case
// whisper that take a string and return it in lower case and surround it with *
// Create a capitalize function that takes a string and transforms it to upper case only for the first letter, 
// and in lowercase for the rest of the string

function words (str){
    return str.split(' ');
}
console.log(words("ceci est un test"))

function sentence (str2){
    return str2.join(" ")
}
console.log(sentence([ 'ceci', 'est', 'un', 'test' ]))

function yell (str3){
    return str3.toUpperCase() 
}
console.log(yell("ceci est un test"))

function whisper(str4) {
    return '*' + str4.toLowerCase() + '*'
}
console.log(whisper("ceci est un test"))

function capitalize(str4) {
    return str4[0].toUpperCase() + str4.slice(1).toLowerCase()
}