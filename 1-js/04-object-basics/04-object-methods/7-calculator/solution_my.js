let calculator = {
    x: 0,
    y: 0,
    read() {
        this.x = Number(prompt("请输入数值X", 0));
        this.y = Number(prompt("请输入数值Y", 0));
    },
    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());