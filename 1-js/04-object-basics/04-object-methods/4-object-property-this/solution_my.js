// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }
//
// let user = makeUser();
//
// console.log(user.ref.name); // 结果是什么？

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user = makeUser();

console.log(user.ref().name); // John