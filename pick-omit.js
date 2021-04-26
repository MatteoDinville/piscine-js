function pick (obj, keys) {
    let newObj = {}
    if (typeof(keys) == "string") {
        if (Object.keys(obj).includes(keys)){
            newObj[keys] = obj[keys]
        }
    } else {
        for (let key of keys) {
            if (Object.keys(obj).includes(key)){
                newObj[key] = obj[key]
            }
        }
    }
    return newObj
}
function omit (obj, keys) {
    let newKeys = []
    for (let key of Object.keys(obj)) {
        if (!keys.includes(key)) {
            newKeys.push(key)
        } else {
            continue
        }
    }
    return pick(obj, newKeys)
}

// pick({a: "s", b: "t"}, b); // Returns {b: "t"}
// pick({a: "s", b: "t", c: "u"}, [b, c]) // Returns {b: "t", c: "u"}  

// omit({a: "s", b: "t"}, b); // Returns {a: "s"}
// omit({a: "s", b: "t", c: "u"}, [b, c]) // Returns {a: "s"}