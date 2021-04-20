function longWords (words) {
    return words.every((data)=>{
        return data.length > 5
    })
}

function oneLongWord (words) {
    return words.some((data)=>{
        return data.length > 10
    })
}

function noLongWords (words) {
    return words.every((data)=>{
        return data.length < 7
    })
}
// console.log(longWords([
//     'Alabama',
//     'Alaska',
//     'Arkansas',
//     'Kansas',
//     'Maryland',
//     'Mississippi',
//     'New Jersey',
//     'Tennessee',
//   ]))
// console.log(oneLongWord([
//     'Alabama',
//     'Alaska',
//     'Arkansas',
//     'Kansas',
//     'Maryland',
//     'Mississippi',
//     'New Jersey',
//     'Tennessee',
// ]))

console.log(noLongWords([
    'isma',
    'lou',
    'matt',
    "mohammea",
]))
// const sourceObject = {
//     brand : 'ford',
//     year: 2000,
//   }
// console.log(pick(sourceObject,'brand'))









// // using-filter
// function multiFilter (element) {
//     let vowel = "aeiou"
//     return element.filter((fil)=> {
//         let tag = false 
//         for (letter of fil.tag) {
//             if (vowel.includes(letter.toLowerCase())) {
//                 tag = true
//             }
//         }
//         return fil.region != 'South' && !vowel.includes(fil.name.charAt(0).toLowerCase()) && element.capital.length >= 8 && tag 
//     })
// }