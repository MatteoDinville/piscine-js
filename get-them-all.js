export function getArchitects () {

    const element = document.getElementsByTagName('a');
    const element2 = document.querySelectorAll(":not(a)");
    return [[...element], element2]
}

export function getClassical () {
    const class1 = document.getElementsByClassName("classical");
    const class2 = document.querySelectorAll("a:not(.classical)");
    return [[...class1], class2]
}

export function getActive () {
    const active = document.getElementsByClassName("active");
    const active2 = document.querySelectorAll(":not(active)");
    return [[...active], active2]
}

export function getBonannoPisano () {
    let tab = []

    const firstArr = document.getElementById('BonannoPisano')
    const secondArr = document.querySelectorAll('a:not(#BonannoPisano)')
    tab.push(firstArr)
    tab.push(secondArr)
    
    return tab
}