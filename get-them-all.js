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
    const active = document.querySelectorAll("a.classical.active");
    const active2 = document.querySelectorAll("false");
    return [[...active], [active2]]

}

export function getBonannoPisano () {
    const id = document.getElementById('BonannoPisano');
        return [...id]

}

