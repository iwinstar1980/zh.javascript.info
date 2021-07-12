function isEmpty(obj) {
    return Object.keys(obj).length === 0 ? true:false;
}

let obj1 = {};
console.log(isEmpty(obj1));
obj1["7:50"] = "get up";
console.log(isEmpty(obj1));