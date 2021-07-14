function checkSpam(str) {
    str1 = "viagra";
    str2 = "xxx";

    if (str.toLowerCase().includes(str1) || str.toLowerCase().includes(str2)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));