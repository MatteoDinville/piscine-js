const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
  }

function get (firstKey) {
    return sourceObject[firstKey]    
}
console.log(get("str"))
