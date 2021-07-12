function mulNum(obj) {
    for (let key in obj) {
        obj[key] = typeof obj[key] === "number" ? obj[key] * 3 : obj[key];
    }
}

let menu = {
    width: 200.3,
    height: 300,
    title: "My menu"
};

mulNum(menu);

for (let key in menu) {
    console.log(menu[key]);
}