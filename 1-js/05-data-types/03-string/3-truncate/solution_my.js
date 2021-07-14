function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    } else {
        return str.slice(0, maxlength - 1) + `…`;
    }
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));
