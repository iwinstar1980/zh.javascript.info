function camelize(str) {
    let arr = str.split('-');
    let result = arr.reduce((str, current) => str + ucFirst(current));
    return result;
}

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');