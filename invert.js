function reverseObject (object) {

const keys = Object.keys(object)
const values = Object.values(object)
let newobj = {}
for (let i= 0; i < keys.length; i++) {
    newobj[values[i]] = keys[i]
    }
    return newobj    
}
